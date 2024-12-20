/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

declare module "@styles/*";

interface ImportMetaEnv {
  readonly VITE_PUBLIC_SANITY_PROJECT_ID: string;
  readonly VITE_PUBLIC_SANITY_DATASET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export type HTMLInputTypeAttribute = astroHTML.JSX.HTMLInputTypeAttribute;
