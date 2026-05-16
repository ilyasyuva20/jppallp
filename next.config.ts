import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // Explicitly set the root if needed, but output: 'export' is the key for Cloudflare Pages static
};

export default nextConfig;
