import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["img.icons8.com", "localhost"], // daftar domain eksternal
  },
};

const isCI = process.env.NEXT_PUBLIC_ENV === "ci";

// Tambahkan konfigurasi khusus untuk CI/CD
if (isCI) {
  nextConfig.output = "export"; // Untuk static export
}

export default nextConfig;
