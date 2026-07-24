import { SITEMAP_CONFIG } from "@/config/sitemap.config";
import { findBlogs } from "@/features/dashboard/blog/api.server";
import { MetadataRoute } from "next";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // Static pages
  const staticRoutes = SITEMAP_CONFIG.staticRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    priority: route.priority,
  }));

  //Dynamic Blog Posts
  const blogPosts = await findBlogs({ limit: 300 });

  const blogRoutes = blogPosts.data.map(post => {
    return {
      url: `${baseUrl}/blog/${post.slug}/detail`,
      lastModified: post.updated_at,
      priority: SITEMAP_CONFIG.blogPostsPrior,
    }
  })
  return [...staticRoutes, ...blogRoutes];
}