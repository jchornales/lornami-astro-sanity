import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import coverPhoto from "./coverPhoto";
import type { SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, coverPhoto],
};
