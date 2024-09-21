import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import images from "./images";
import type { SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, images],
};
