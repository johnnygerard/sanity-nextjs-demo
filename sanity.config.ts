/**
 * Sanity Studio configuration
 * @see https://www.sanity.io/docs/studio/configuration
 */
"use client";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "~/sanity/env";
import { schema } from "~/sanity/schema-types";
import { structure } from "~/sanity/structure";

export default defineConfig({
  basePath: "/studio",
  dataset,
  plugins: [
    structureTool({ structure }),
    // https://www.sanity.io/docs/content-lake/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  projectId,
  schema,
});
