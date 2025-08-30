import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_API_URL || "api.bbyts.com",
      },
    ],
  },
  experimental: {
    typedRoutes: true, // opsional, bantu cek error pada route dinamis
  },
  eslint: {
    ignoreDuringBuilds: false, // agar build tidak gagal hanya karena warning eslint
  },
  typescript: {
    ignoreBuildErrors: false, // rekomendasi: biarkan error TS menghentikan build
  },
};

export default nextConfig;
