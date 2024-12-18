// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID,
      dataset: import.meta.env.VITE_PUBLIC_SANITY_DATASET,
      useCdn: false,
      apiVersion: "2024-09-19",
      studioBasePath: "/studio",
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  vite: {
    ssr: {
      noExternal: ["astro", "@astrojs/image", "react-effect-typewriter"],
    },
  },

  output: "server",
  adapter: netlify({
    edgeMiddleware: true,
  }),
});
