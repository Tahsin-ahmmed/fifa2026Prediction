import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove console.log statements in production for performance
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Allow flag images from flagcdn.com if you switch to img-based flags
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
    ],
  },

  // Strict experimental features (optional, helps catch issues early)
  experimental: {
    // Optimise package imports for smaller bundles
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@dnd-kit/core",
      "@dnd-kit/sortable",
    ],
  },
};

export default nextConfig;
