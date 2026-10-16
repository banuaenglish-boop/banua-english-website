import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";

const root = fileURLToPath(new URL("../", import.meta.url));
const require = createRequire(import.meta.url);
const cache = new Map();

// Isolate pure SEO modules and component markup from the Next.js server.
// Configuration files are never loaded; the domain below is a test fixture.
function loadSource(relativePath) {
  const filename = path.resolve(root, relativePath);
  assert.ok(filename.startsWith(path.join(root, "src") + path.sep));
  assert.match(filename, /\.tsx?$/);
  if (cache.has(filename)) return cache.get(filename).exports;
  const source = fs.readFileSync(filename, "utf8");
  const { outputText } = ts.transpileModule(source, {
    fileName: filename,
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true, target: ts.ScriptTarget.ES2020 },
  });
  const compiledModule = { exports: {} };
  cache.set(filename, compiledModule);
  const localRequire = (specifier) => {
    if (specifier === "next/link") {
      return function PreviewLink({ children, ...props }) {
        return React.createElement("a", props, children);
      };
    }
    if (specifier.startsWith("@/")) {
      const base = path.join("src", specifier.slice(2));
      const file = [base + ".ts", base + ".tsx"].find((item) => fs.existsSync(path.join(root, item)));
      assert.ok(file, `Missing source module: ${specifier}`);
      return loadSource(file);
    }
    assert.ok(["react/jsx-runtime", "clsx", "tailwind-merge"].includes(specifier), `Unexpected dependency: ${specifier}`);
    return require(specifier);
  };
  vm.runInNewContext(outputText, {
    module: compiledModule, exports: compiledModule.exports, require: localRequire,
    process: { env: { NEXT_PUBLIC_SITE_URL: "https://seo-check.example" } },
    URL,
  }, { filename });
  return compiledModule.exports;
}

const { siteConfig, siteRoutes, absoluteUrl } = loadSource("src/lib/site.ts");
const { pageMetadata } = loadSource("src/lib/seo.ts");
const { coursePages, ieltsCourse, toeflCourse } = loadSource("src/lib/course-content.ts");
const { courseLinks, programDetailPath } = loadSource("src/lib/course-routes.ts");
const { breadcrumbJsonLd, JsonLd } = loadSource("src/components/JsonLd.tsx");
const CourseLanding = loadSource("src/components/program/CourseLanding.tsx").default;
const provided = loadSource("src/lib/provided-content.ts");
const routePaths = new Set(siteRoutes.map((route) => route.path));
const rendered = [];
const keywordMetrics = [];

for (const route of siteRoutes) {
  const sourcePath = path.join(root, "src/app", route.path, "page.tsx");
  const source = ts.createSourceFile(sourcePath, fs.readFileSync(sourcePath, "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const metadata = source.statements
    .filter(ts.isVariableStatement)
    .flatMap((statement) => [...statement.declarationList.declarations])
    .find((declaration) => declaration.name.getText(source) === "metadata");
  assert.ok(metadata?.initializer, `Missing metadata: ${route.path}`);
  const resolved = vm.runInNewContext(metadata.initializer.getText(source), { pageMetadata, siteConfig, ieltsCourse, toeflCourse });
  assert.equal(resolved.alternates.canonical, absoluteUrl(route.path), `Wrong canonical: ${route.path}`);
  assert.equal(resolved.openGraph.url, absoluteUrl(route.path));
  assert.equal(resolved.openGraph.title, resolved.title.absolute);
  assert.equal(resolved.twitter.title, resolved.title.absolute);
  assert.equal(resolved.title.absolute.split(siteConfig.name).length - 1, 1, `Repeated brand: ${route.path}`);
  assert.ok(resolved.description.length > 50, `Missing description: ${route.path}`);
}

for (const course of coursePages) {
  assert.ok(routePaths.has(course.path), `Course missing from sitemap: ${course.path}`);
  assert.equal(courseLinks.find((item) => item.exam === course.exam)?.path, course.path);
  const breadcrumb = breadcrumbJsonLd(course.path).itemListElement;
  assert.equal(breadcrumb.length, 3);
  assert.equal(breadcrumb[1].item, absoluteUrl("/program"));
  assert.equal(breadcrumb[2].item, absoluteUrl(course.path));
  const html = renderToStaticMarkup(React.createElement(CourseLanding, {
    course, tutors: provided.tutors.slice(0, 4),
    testimonials: provided.testimonials.filter((item) => item.program === course.exam.toLowerCase()).slice(0, 2),
  }));
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `Expected one H1: ${course.path}`);
  assert.equal((html.match(/<details\b/g) ?? []).length, course.faqs.length);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  const faq = schemas.find((schema) => schema["@type"] === "FAQPage");
  assert.deepEqual(faq.mainEntity.map((item) => [item.name, item.acceptedAnswer.text]), JSON.parse(JSON.stringify(course.faqs.map((item) => [item.question, item.answer]))));
  const service = schemas.find((schema) => schema["@type"] === "Service");
  assert.equal(service.url, absoluteUrl(course.path));
  assert.equal(service.offers, undefined, "Unconfirmed prices must not be published in schema");
  for (const [, href] of html.matchAll(/href="(\/[^"]*)"/g)) {
    const [pathname, hash] = href.split("#");
    assert.ok(routePaths.has(pathname || course.path), `Broken internal link: ${href}`);
    if (hash && !pathname) assert.ok(html.includes(`id="${hash}"`), `Missing anchor: ${hash}`);
  }
  const text = html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ").replace(/&[^;]+;/g, " ").replace(/\s+/g, " ");
  const words = text.match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu)?.length ?? 0;
  const keyword = `kursus ${course.exam} Banjarmasin`;
  const occurrences = (text.match(new RegExp(keyword, "gi")) ?? []).length;
  keywordMetrics.push({ path: course.path, words, keyword, occurrences, phraseDensityPercent: Number((occurrences / words * 100).toFixed(2)) });
  rendered.push({ course, html });
}

assert.equal(programDetailPath("IELTS Preparation"), ieltsCourse.path);
assert.equal(programDetailPath("TOEFL iBT"), toeflCourse.path);
assert.equal(programDetailPath("IELTS & TOEFL"), undefined);
assert.equal(programDetailPath("Scholarship Mentoring"), undefined);
const escapedSchema = renderToStaticMarkup(React.createElement(JsonLd, { data: { text: "</script><script>unsafe</script>" } }));
assert.equal((escapedSchema.match(/<script/g) ?? []).length, 1);
assert.ok(escapedSchema.includes("\\u003c"));

console.log(JSON.stringify({ metadataRoutesChecked: siteRoutes.length, coursePagesChecked: coursePages.length, keywordMetrics }, null, 2));

const previewFlag = process.argv.indexOf("--preview-dir");
if (previewFlag !== -1) {
  const outputDir = path.resolve(process.argv[previewFlag + 1]);
  const { compile } = await import("@tailwindcss/node");
  const stylesheet = await compile(fs.readFileSync(path.join(root, "src/app/globals.css"), "utf8"), { base: path.join(root, "src/app"), onDependency() {} });
  const candidates = new Set(rendered.flatMap(({ html }) => [...html.matchAll(/class="([^"]+)"/g)].flatMap((match) => match[1].split(/\s+/))));
  const css = stylesheet.build([...candidates]);
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "style.css"), css);
  for (const { course, html } of rendered) {
    fs.writeFileSync(path.join(outputDir, `${course.exam.toLowerCase()}.html`), `<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${course.title}</title><link rel="stylesheet" href="/style.css"><style>:root{--font-inter:Arial,sans-serif;--font-poppins:Arial,sans-serif}</style></head><body><main>${html}</main></body></html>`);
  }
  fs.writeFileSync(path.join(outputDir, "keyword-metrics.json"), JSON.stringify(keywordMetrics, null, 2));
  console.log(`Isolated component previews: ${outputDir}`);
}
