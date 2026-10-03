import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: Electron serves the `out/` folder in production.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  devIndicators: false,
  // A package.json exists in the user's home folder; pin the root here.
  turbopack: { root: process.cwd() },
};

export default nextConfig;
