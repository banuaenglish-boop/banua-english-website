import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";

// Studio dibaca oleh Vite, jadi env-nya berprefix SANITY_STUDIO_ (bukan NEXT_PUBLIC_).
const projectId = process.env.SANITY_STUDIO_PROJECT_ID!;
const dataset = process.env.SANITY_STUDIO_DATASET ?? "production";

export default defineConfig({
  name: "banua",
  title: "English Banua",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
