import assert from "node:assert/strict";
import fs from "node:fs";
import { spawnSync } from "node:child_process";
import test from "node:test";
import ts from "typescript";
import { buildSeed, validateSeed } from "./sanity-seed.mjs";

function schemas() {
  const source = fs.readFileSync(new URL("../src/sanity/schemaTypes/index.ts", import.meta.url), "utf8");
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const exports = {};
  new Function("exports", "require", compiled)(exports, (module) => {
    if (module === "@/lib/webinar-countries") {
      const countries = fs.readFileSync(new URL("../src/lib/webinar-countries.ts", import.meta.url), "utf8");
      const countryExports = {};
      new Function("exports", ts.transpileModule(countries, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText)(countryExports);
      return countryExports;
    }
    assert.equal(module, "sanity");
    return { defineType: (value) => value, defineField: (value) => value, defineArrayMember: (value) => value };
  });
  return exports.schemaTypes;
}

test("seed matches current Studio fields, required values, and enums", () => {
  const documents = buildSeed();
  validateSeed(documents);
  const types = new Map(schemas().map((schema) => [schema.name, schema]));
  for (const document of documents) {
    const schema = types.get(document._type);
    assert.ok(schema, document._type);
    const allowed = new Set(["_id", "_type", ...schema.fields.map((field) => field.name)]);
    for (const key of Object.keys(document)) assert.ok(allowed.has(key), `${document._id}: unknown field ${key}`);
    for (const field of schema.fields) {
      const rules = { isRequired: false, maxLength: Infinity, uriOptions: null, required() { this.isRequired = true; return this; }, max(value) { this.maxLength = value; return this; }, uri(value) { this.uriOptions = value; return this; } };
      field.validation?.(rules);
      const value = document[field.name];
      if (rules.isRequired) assert.ok(value !== undefined && value !== null && value !== "", `${document._id}.${field.name} is required`);
      if (value === undefined || value === null || value === "") continue;
      if (typeof value === "string" || Array.isArray(value)) assert.ok(value.length <= rules.maxLength, `${document._id}.${field.name} exceeds schema maximum`);
      if (field.options?.list) assert.ok(field.options.list.some((option) => (option.value ?? option) === value), `${document._id}.${field.name} invalid enum`);
      if (rules.uriOptions) assert.ok(rules.uriOptions.scheme.includes(new URL(value).protocol.slice(0, -1)), `${document._id}.${field.name} invalid URL`);
    }
  }
});

test("real tutors and alumni are seeded once and homepage selections are preserved", () => {
  const documents = buildSeed();
  assert.equal(new Set(documents.map((document) => document._id)).size, documents.length);
  assert.equal(documents.filter((document) => document._type === "tutor").length, 8);
  assert.equal(documents.filter((document) => document._type === "testimonial").length, 4);
  assert.equal(documents.filter((document) => document._type === "tutor" && document.featuredOnHome).length, 4);
  assert.equal(documents.filter((document) => document._type === "video" && document.featuredOnHome).length, 3);
  assert.deepEqual(buildSeed(), documents, "IDs and feature keys must be stable across reruns");
  const withoutPhoto = documents.find((document) => document._id.endsWith("margareth-trevina"));
  assert.equal(withoutPhoto.avatar, "", "Do not fabricate missing alumni photos");
});

test("default command validates without credentials or network writes", () => {
  const result = spawnSync(process.execPath, [new URL("sanity-seed.mjs", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1")], { encoding: "utf8", timeout: 30000 });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Dry run passed\. No uploads or writes performed\./);
});

test("preflight rejects duplicate IDs and local assets outside public", () => {
  const documents = buildSeed();
  assert.throws(() => validateSeed([...documents, documents[0]]), /Duplicate seed ID/);
  const invalid = structuredClone(documents);
  invalid[0].image = "/../package.json";
  assert.throws(() => validateSeed(invalid), /Missing\/invalid local image/);
});
