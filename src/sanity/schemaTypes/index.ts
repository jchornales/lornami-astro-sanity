import author from "./author";
import blockContent from "./blockContent";
import brandInformation from "./brandInformation";
import category from "./category";
import faqs from "./faqs";
import post from "./post";
import pricing from "./pricing";
import webContent from "./content";
import type { SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    author,
    blockContent,
    brandInformation,
    category,
    faqs,
    post,
    pricing,
    webContent,
  ],
};
