// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID,
      dataset: import.meta.env.VITE_PUBLIC_SANITY_DATASET,
      useCdn: true,
      apiVersion: "2024-09-19",
      studioBasePath: "/studio",
    }),
    react(),
    tailwind(),
  ],
  vite: {
    ssr: {
      noExternal: ["astro", "@astrojs/image", "react-effect-typewriter"],
    },
  },
});
