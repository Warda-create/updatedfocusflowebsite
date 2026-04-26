import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Force Next to treat this app directory as the project root.
    // This avoids root auto-detection issues when parent folders also have lockfiles.
    root: __dirname,
  },
};

export default nextConfig;
