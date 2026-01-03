import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "src/sanity/lib/image-loader.ts",
  },
  reactCompiler: true,
};

export default nextConfig;
