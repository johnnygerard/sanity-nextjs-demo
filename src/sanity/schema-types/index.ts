import { type SchemaTypeDefinition } from "sanity";
import { exampleType } from "~/sanity/schema-types/example-type";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [exampleType],
};
