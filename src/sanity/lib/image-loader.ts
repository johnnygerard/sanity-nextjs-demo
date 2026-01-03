"use client";
import type { ImageLoader } from "next/image";
import { urlFor } from "~/sanity/lib/image";

/**
 * Custom Sanity loader for Next.js Image component.
 *
 * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/images#sanity
 * @see https://www.sanity.io/docs/apis-and-sdks/image-urls
 */
const loader: ImageLoader = ({ src, width, quality }) =>
  urlFor(src)
    .auto("format")
    .fit("max")
    .width(width)
    .quality(quality ?? 75)
    .url();

export default loader;
