/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes#optional-catch-all-segments
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */
import { NextStudio } from "next-sanity/studio";
import type { FC } from "react";
import config from "~root/sanity.config";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

const StudioPage: FC = () => <NextStudio config={config} />;
export default StudioPage;
