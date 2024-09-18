// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from "./src/utils/envVariables";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: true,
      apiVersion: "v2022-03-07",
      studioBasePath: "/studio",
    }),
    react(),
  ],
});
