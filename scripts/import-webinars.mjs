// Uses inherited credentials or the existing CLI login. Never loads dotenv.
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createClient } from "@sanity/client";
import ts from "typescript";

const root = fileURLToPath(new URL("../", import.meta.url));
const require = createRequire(import.meta.url);
const manifest = JSON.parse(fs.readFileSync(path.join(root, "data/webinars-2026.json"), "utf8"));
const countriesSource = fs.readFileSync(path.join(root, "src/lib/webinar-countries.ts"), "utf8");
const countryExports = {};
new Function("exports", ts.transpileModule(countriesSource, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText)(countryExports);
const countries = new Set(countryExports.webinarCountries.map((item) => item.value));

function validate(sourceDir) {
  const ids = new Set();
  const files = new Set();
  for (const entry of manifest.entries) {
    assert.match(entry._id, /^[a-zA-Z0-9][a-zA-Z0-9._-]+$/);
    assert.ok(!entry._id.startsWith("drafts."));
    assert.ok(!ids.has(entry._id), `Duplicate ID: ${entry._id}`);
    assert.ok(!files.has(entry.file), `Duplicate poster: ${entry.file}`);
    ids.add(entry._id);
    files.add(entry.file);
    assert.equal(path.basename(entry.file), entry.file);
    assert.equal(path.extname(entry.file), ".png");
    assert.ok(fs.lstatSync(path.join(sourceDir, entry.file)).isFile());
    assert.ok(countries.has(entry.country), `Unknown country: ${entry.country}`);
    assert.ok(entry.title.trim());
    assert.match(entry.date, /^2026-\d{2}-\d{2}$/);
    const date = new Date(`${entry.date}T00:00:00Z`);
    assert.equal(date.toISOString().slice(0, 10), entry.date);
    assert.equal(date.getUTCDay(), entry.dayOnPoster === "Sabtu" ? 6 : 0, `Weekday mismatch: ${entry.file}`);
    assert.match(entry.timeWita, /^(?:[01]\d|2[0-3]):[0-5]\d$/);
    assert.equal(typeof entry.featuredOnHome, "boolean");
  }
  const sourceFiles = fs.readdirSync(sourceDir).filter((name) => /\.png$/i.test(name));
  assert.equal(sourceFiles.length, files.size, "Manifest must cover every source poster");
  sourceFiles.forEach((file) => assert.ok(files.has(file), `Unreviewed poster: ${file}`));
  return { posters: files.size, countries: new Set(manifest.entries.map((entry) => entry.country)).size };
}

async function getToken() {
  if (process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN) {
    return process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN;
  }
  assert.ok(!path.basename(process.env.SANITY_CLI_CONFIG_PATH || "").startsWith(".env"));
  const modulePath = path.resolve(path.dirname(require.resolve("@sanity/cli-core")), "../config/cli/cliUserConfig.js");
  const { getCliToken } = await import(pathToFileURL(modulePath).href);
  const token = await getCliToken();
  assert.ok(token, "Sign in to Sanity CLI or provide an inherited write token");
  return token;
}

function fields(entry) {
  return Object.fromEntries(["title", "country", "date", "featuredOnHome"].map((key) => [key, entry[key]]));
}

function matches(document, expected) {
  return Object.entries(expected).every(([key, value]) =>
    (key === "assetId" ? document.poster?.asset?._ref : document[key]) === value);
}

async function main() {
  const args = process.argv.slice(2);
  const value = (flag) => args.includes(flag) ? args[args.indexOf(flag) + 1] : undefined;
  const sourceArg = value("--source-dir");
  assert.ok(sourceArg && !sourceArg.startsWith("--"), "Pass --source-dir with the reviewed Webinar folder");
  const sourceDir = path.resolve(sourceArg);
  const summary = validate(sourceDir);
  console.log(JSON.stringify({ ...summary, projectId: manifest.projectId, dataset: manifest.dataset }));
  if (!args.includes("--apply")) {
    console.log("Dry run passed. No network calls, uploads, or mutations performed.");
    return;
  }

  const client = createClient({ projectId: manifest.projectId, dataset: manifest.dataset,
    token: await getToken(), apiVersion: "2026-01-01", useCdn: false, perspective: "raw", timeout: 120000 });
  const ids = manifest.entries.map((entry) => entry._id);
  const before = await client.fetch("*[_id in $ids]", { ids: ids.flatMap((id) => [id, `drafts.${id}`]) });
  const byId = new Map(before.map((document) => [document._id, document]));
  const planned = [];
  let skipped = 0;
  for (const entry of manifest.entries) {
    assert.ok(!byId.has(`drafts.${entry._id}`), `Existing draft requires manual review: ${entry._id}`);
    const document = byId.get(entry._id);
    if (document && matches(document, fields(entry)) && document.poster?.asset?._ref) { skipped++; continue; }
    if (document) {
      assert.equal(document._type, "webinar");
      assert.ok(entry.expectedPrevious && matches(document, entry.expectedPrevious), `Existing content changed: ${entry._id}`);
    }
    planned.push(entry);
  }

  const reportDir = path.resolve(value("--report-dir") || path.join(os.tmpdir(), "banua-webinars-2026"));
  fs.mkdirSync(reportDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  fs.writeFileSync(path.join(reportDir, `before-${stamp}.json`), JSON.stringify(before, null, 2));
  const cachePath = path.join(reportDir, "uploaded-assets.json");
  const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, "utf8")) : {};
  const cachedIds = Object.values(cache).map((item) => item.assetId);
  const cachedAssets = cachedIds.length ? await client.fetch('*[_type == "sanity.imageAsset" && _id in $ids]._id', { ids: cachedIds }) : [];
  const existingAssets = new Set(cachedAssets);
  const images = new Map();
  let cursor = 0;
  const uploadWorker = async () => {
    while (cursor < planned.length) {
      const entry = planned[cursor++];
      const sourcePath = path.join(sourceDir, entry.file);
      const stat = fs.statSync(sourcePath);
      let assetId = cache[entry.file]?.assetId;
      if (!existingAssets.has(assetId) || cache[entry.file].size !== stat.size || cache[entry.file].mtimeMs !== stat.mtimeMs) {
        const asset = await client.assets.upload("image", fs.createReadStream(sourcePath), {
          filename: `english-banua-${entry._id}.png`,
        });
        assetId = asset._id;
        cache[entry.file] = { assetId, size: stat.size, mtimeMs: stat.mtimeMs };
        fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
      }
      images.set(entry._id, { _type: "image", asset: { _type: "reference", _ref: assetId } });
      console.log(`Poster ready: ${entry.file} -> ${entry.date}`);
    }
  };
  const uploads = await Promise.allSettled(Array.from({ length: Math.min(3, planned.length) }, uploadWorker));
  const failed = uploads.find((result) => result.status === "rejected");
  if (failed) throw failed.reason;

  if (planned.length) {
    const transaction = client.transaction();
    for (const entry of planned) {
      const content = { ...fields(entry), poster: images.get(entry._id) };
      const document = byId.get(entry._id);
      if (document) transaction.patch(entry._id, (patch) => patch.ifRevisionId(document._rev).set(content));
      else transaction.createIfNotExists({ _id: entry._id, _type: "webinar", ...content });
    }
    await transaction.commit();
  }

  const saved = await client.fetch('*[_id in $ids]{_id,title,country,date,featuredOnHome,poster,"asset":poster.asset->{_id,size,originalFilename,metadata{dimensions}}}', { ids });
  assert.equal(saved.length, manifest.entries.length);
  for (const entry of manifest.entries) {
    const document = saved.find((item) => item._id === entry._id);
    assert.ok(document && matches(document, fields(entry)), `Saved values mismatch: ${entry._id}`);
    assert.ok(document.asset?._id && document.asset.metadata?.dimensions?.width, `Missing image asset: ${entry._id}`);
    if (images.has(entry._id)) assert.equal(document.asset._id, images.get(entry._id).asset._ref);
  }
  const report = { verifiedAt: new Date().toISOString(), ...summary,
    projectId: manifest.projectId, dataset: manifest.dataset,
    created: planned.filter((entry) => !byId.has(entry._id)).length,
    updated: planned.filter((entry) => byId.has(entry._id)).length, skipped, documents: saved };
  fs.writeFileSync(path.join(reportDir, "report.json"), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ ...summary, created: report.created, updated: report.updated, skipped,
    publishedAndVerified: saved.length, reportPath: path.join(reportDir, "report.json") }));
}

main().catch((error) => {
  console.error(error.statusCode ? `Sanity request failed: HTTP ${error.statusCode}` : error.message);
  process.exitCode = 1;
});
