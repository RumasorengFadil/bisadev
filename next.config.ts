import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/overview",
        permanent: false,
      },
    ];
  },

  reactStrictMode: true,

  images: {
    unoptimized: process.env.NEXT_PUBLIC_ENV === "local",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
      } as const,
      {
        protocol: "https",
        hostname: "unsplash.com",
      } as const,
      ...(process.env.NEXT_PUBLIC_ENV === "local"
        ? [
          {
            protocol: "http",
            hostname: "**",
          } as const,
        ]
        : [
          {
            protocol: "https",
            hostname: process.env.NEXT_PUBLIC_IMAGE_HOST ?? "",
          } as const,
        ]),
    ],
  },
};

export default nextConfig;