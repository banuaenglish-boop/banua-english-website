/* Never loads dotenv or any .env file. Uses inherited variables or Sanity CLI login. */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createClient } from "@sanity/client";
import ts from "typescript";

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const imageFields = { program: "image", tutor: "image", teamMember: "image", webinar: "poster", video: "thumbnail", testimonial: "avatar", banuaStory: "image" };

function readContent(relativePath) {
  const source = fs.readFileSync(path.join(root, relativePath), "utf8");
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const exports = {};
  // These two content modules contain only literals and type-only imports.
  new Function("exports", compiled)(exports);
  return exports;
}

function buildSeed() {
  const mocks = readContent("src/sanity/lib/mockData.ts");
  const provided = readContent("src/lib/provided-content.ts");
  const { banuaStories } = readContent("src/lib/banua-stories.ts");
  const homeTutorIds = new Set(provided.homeTutors.map((item) => item._id));
  const homeVideoIds = new Set(mocks.MOCK_HOME_VIDEOS.map((item) => item._id));
  const groups = {
    banuaStory: banuaStories.map(({ id, ...story }) => ({ ...story, _id: id, featuredOnHome: true })),
    program: mocks.MOCK_PROGRAMS.map((item) => ({ ...item, featuredOnHome: true, badgeColor: "bg-[#2C3E8A] text-white", features: item.features?.map((feature, index) => ({ ...feature, _type: "object", _key: `feature-${index + 1}` })) })),
    tutor: provided.tutors.map((item) => ({ ...item, score: item.expertise, experience: item.role, featuredOnHome: homeTutorIds.has(item._id) })),
    teamMember: provided.team,
    milestone: provided.milestones,
    partner: mocks.MOCK_PARTNERS,
    webinar: mocks.MOCK_WEBINARS.map((item) => ({ ...item, featuredOnHome: true, registrationUrl: item.registrationUrl?.startsWith("/") ? "https://wa.me/6282115151221" : item.registrationUrl })),
    video: mocks.MOCK_VIDEOS.map((item) => ({ ...item, featuredOnHome: homeVideoIds.has(item._id) })),
  };
  // Homepage and gallery share the same alumni documents, with homepage-specific labels.
  groups.testimonial = provided.testimonials.map((item) => ({ ...item, role: item.programLabel, featuredOnHome: true }));
  const orderedTypes = new Set(["program", "tutor", "teamMember", "partner", "testimonial", "banuaStory"]);
  return Object.entries(groups).flatMap(([type, items]) => items.map((item, index) => ({ ...item, _id: `initial-${type}-${item._id}`, _type: type, ...(orderedTypes.has(type) ? { order: index + 1 } : {}) })));
}

function validateSeed(documents) {
  const requiredFields = {
    banuaStory: ["image", "caption", "alt"],
    program: ["title", "subtitle", "mode", "description", "image"],
    tutor: ["name", "credential", "image"],
    teamMember: ["name", "role", "description", "image"],
    milestone: ["year", "title", "description"],
    partner: ["name", "region"],
    webinar: ["title", "country", "date", "poster"],
    video: ["title", "category", "date", "duration", "youtubeUrl", "thumbnail"],
    testimonial: ["name", "program", "programLabel", "university", "text"],
  };
  const ids = new Set();
  for (const document of documents) {
    if (!requiredFields[document._type]) throw new Error(`Unknown document type: ${document._type}`);
    for (const field of requiredFields[document._type]) {
      if (typeof document[field] !== "string" || !document[field].trim()) throw new Error(`Missing ${field}: ${document._id}`);
    }
    if (ids.has(document._id)) throw new Error(`Duplicate seed ID: ${document._id}`);
    ids.add(document._id);
    const field = imageFields[document._type];
    const image = document[field];
    if (image?.startsWith("/")) {
      const localPath = path.resolve(root, "public", `.${image}`);
      if (!localPath.startsWith(path.join(root, "public") + path.sep) || !fs.existsSync(localPath)) throw new Error(`Missing/invalid local image for ${document._id}`);
    } else if (image) {
      const url = new URL(image);
      if (url.protocol !== "https:" || url.hostname !== "images.unsplash.com") throw new Error(`Unsupported image source for ${document._id}`);
    }
    if (document._type === "program" && document.features?.length > 4) throw new Error(`Too many features: ${document._id}`);
    if (document.date && (!/^\d{4}-\d{2}-\d{2}$/.test(document.date) || !Number.isFinite(Date.parse(document.date)))) throw new Error(`Invalid date: ${document._id}`);
    for (const field of ["registrationUrl", "youtubeUrl"]) {
      if (document[field] && new URL(document[field]).protocol !== "https:") throw new Error(`Invalid ${field}: ${document._id}`);
    }
  }
}

async function getToken() {
  const inherited = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN;
  if (inherited) return inherited;
  // Read only the existing CLI login, bypassing CLI project and dotenv loaders.
  const tokenModule = path.resolve(path.dirname(require.resolve("@sanity/cli-core")), "../config/cli/cliUserConfig.js");
  const { getCliToken } = await import(pathToFileURL(tokenModule).href);
  return getCliToken();
}

async function uploadImage(client, source) {
  let body;
  let filename;
  if (source.startsWith("/")) {
    body = fs.createReadStream(path.resolve(root, "public", `.${source}`));
    filename = path.basename(source);
  } else {
    const response = await fetch(source, { signal: AbortSignal.timeout(30000), redirect: "error" });
    if (!response.ok) throw new Error(`Image download failed: HTTP ${response.status}`);
    if (!response.headers.get("content-type")?.startsWith("image/")) throw new Error("Remote source did not return an image");
    body = Buffer.from(await response.arrayBuffer());
    filename = `${new URL(source).pathname.split("/").pop()}.jpg`;
  }
  const asset = await client.assets.upload("image", body, { filename });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

async function main() {
  const args = process.argv.slice(2);
  const value = (flag) => args[args.indexOf(flag) + 1];
  const allDocuments = buildSeed();
  const selectedType = args.includes("--type") ? value("--type") : undefined;
  if (args.includes("--type") && (!selectedType || selectedType.startsWith("--"))) throw new Error("Pass a document type after --type.");
  if (selectedType && !allDocuments.some((document) => document._type === selectedType)) throw new Error("Unknown --type. Use an existing seed document type.");
  const documents = selectedType ? allDocuments.filter((document) => document._type === selectedType) : allDocuments;
  validateSeed(documents);
  const counts = documents.reduce((result, document) => ({ ...result, [document._type]: (result[document._type] || 0) + 1 }), {});
  console.log("Seed content:", JSON.stringify(counts), `(${documents.length} documents)`);
  if (documents.some((document) => document._type === "webinar" || document._type === "video")) console.log("Existing example webinar dates and generic YouTube links are retained; replace them in Studio when real schedules/recordings are ready.");
  if (!args.includes("--apply")) {
    console.log("Dry run passed. No uploads or writes performed.");
    return;
  }
  const projectId = args.includes("--project") ? value("--project") : process.env.SANITY_STUDIO_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = args.includes("--dataset") ? value("--dataset") : process.env.SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET;
  if (!projectId || !dataset || projectId.startsWith("--") || dataset.startsWith("--")) throw new Error("Pass --project PROJECT_ID --dataset DATASET explicitly.");
  const token = await getToken();
  if (!token) throw new Error("Sanity login or an inherited write token is required. Never paste tokens into chat.");
  const client = createClient({ projectId, dataset, token, apiVersion: "2026-01-01", useCdn: false, perspective: "raw" });
  // Preflight read verifies the target before any assets are uploaded.
  const existing = await client.fetch('*[_id in $ids]._id', { ids: documents.flatMap((item) => [item._id, `drafts.${item._id}`]) });
  const existingIds = new Set(existing);
  const images = new Map();
  const ready = [];
  for (const document of documents) {
    if (existingIds.has(document._id) || existingIds.has(`drafts.${document._id}`)) continue;
    const field = imageFields[document._type];
    const source = document[field];
    if (field && source) {
      if (!images.has(source)) images.set(source, await uploadImage(client, source));
      document[field] = images.get(source);
    } else if (field) {
      delete document[field];
    }
    ready.push(document);
    console.log(`Prepared ${document._id}`);
  }
  // One atomic document transaction. Existing documents are never replaced.
  if (ready.length) {
    const transaction = client.transaction();
    ready.forEach((document) => transaction.createIfNotExists(document));
    await transaction.commit();
  }
  const saved = await client.fetch('*[_id in $ids]{_id, _type}', { ids: documents.map((item) => item._id) });
  const savedIds = new Set(saved.map((item) => item._id));
  const missing = documents.filter((item) => !savedIds.has(item._id) && !existingIds.has(`drafts.${item._id}`));
  if (missing.length) throw new Error(`Verification failed: ${missing.length} documents missing.`);
  console.log(`Verified ${saved.length} published seed documents in ${projectId}/${dataset}. Created ${ready.length}; skipped ${documents.length - ready.length} existing documents/drafts.`);
}

export { buildSeed, validateSeed };
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main().catch((error) => {
  // Avoid dumping request/authorization objects from client errors.
  console.error(error.statusCode ? `Sanity request failed: HTTP ${error.statusCode}` : error.message);
  process.exitCode = 1;
});
