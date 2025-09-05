import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/explore/", "/auth/login/", "/auth/register/"],
        disallow: [
          "/dashboard/",
          "/blog/",
          "/maintenance/",
          "/users/",
          "/settings/",
          "/account/",
          "/auth/forgot-password/",
          "/auth/reset-password/",
          "/auth/verify-email/",
        ],
      },
    ],
    sitemap: "https://bbyts.com/sitemap.xml",
  };
}
