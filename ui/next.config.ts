import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true } ,
  webpack: (config) => {
    config.cache = {
      type: "filesystem", // Stocke en fichier plutôt qu'en RAM
    };
    return config;
  },
};

export default nextConfig;
