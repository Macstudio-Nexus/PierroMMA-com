import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable production optimizations
  reactStrictMode: true,

  // Optimize compilation
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
