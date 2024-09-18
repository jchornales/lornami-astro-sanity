// ./sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from "./src/utils/envVariables";

export default defineConfig({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  plugins: [structureTool()],
  schema: schema,
});
