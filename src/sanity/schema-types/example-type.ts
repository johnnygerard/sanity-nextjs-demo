import { defineField, defineType } from "sanity";

export const exampleType = defineType({
  type: "document",
  name: "fruit",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Fruit Name",
    }),
    defineField({
      name: "color",
      type: "string",
      title: "Fruit Color",
    }),
  ],
});
