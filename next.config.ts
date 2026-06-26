import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — outputs a self-contained `out/` folder that any
  // static host (cPanel, shared hosting, S3, Netlify drop) can serve.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
