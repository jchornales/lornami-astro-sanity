// ./sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./src/sanity/schemaTypes";
import { media, mediaAssetSource } from "sanity-plugin-media";
import {
  unsplashImageAsset,
  unsplashAssetSource,
} from "sanity-plugin-asset-source-unsplash";

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool(),
    visionTool({
      defaultApiVersion: "v2021-10-21",
      defaultDataset: "production",
    }),
    media({
      creditLine: {
        enabled: true,
        excludeSources: ["unsplash"],
      },
      maximumUploadSize: 10000000,
    }) as any,
    unsplashImageAsset(),
  ],
  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource !== mediaAssetSource,
        );
      },
    },
    image: {
      assetSources: (previousAssetSources, { schema }) => {
        if (schema.name === "movie-image") {
          // remove unsplash from movie-image types
          return previousAssetSources.filter(
            (assetSource) => assetSource !== unsplashAssetSource,
          );
        }
        return previousAssetSources;
      },
    },
  },
  schema: schema,
});
