/**
 * Sanity CLI configuration file
 * @see https://www.sanity.io/docs/apis-and-sdks/cli
 **/
import { env } from "node:process";
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    dataset: env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  },
});
