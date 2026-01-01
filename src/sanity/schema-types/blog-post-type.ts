import { BookIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const blogPostType = defineType({
  type: "document",
  name: "blogPost",
  icon: BookIcon,
  fields: [
    defineField({
      name: "featuredImage",
      type: "image",
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "URL Slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      type: "string",
    }),
    defineField({
      name: "content",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
  ],
});
