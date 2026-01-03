import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "~/sanity/env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
