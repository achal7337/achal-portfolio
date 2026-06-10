import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully static site in `out/` for Cloudflare Pages.
  output: "export",
  // `next/image` optimization requires a server, so disable it for static export.
  images: { unoptimized: true },
};

export default nextConfig;
