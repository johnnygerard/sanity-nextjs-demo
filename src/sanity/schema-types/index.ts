import { type SchemaTypeDefinition } from "sanity";
import { blogPostType } from "~/sanity/schema-types/blog-post-type";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPostType],
};
