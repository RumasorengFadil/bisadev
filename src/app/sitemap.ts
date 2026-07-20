import { SITEMAP_CONFIG } from "@/config/sitemap.config";
import { findBlogs } from "@/features/dashboard/blog/api.server";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // Static pages
  const staticRoutes = SITEMAP_CONFIG.staticRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    priority: route.priority,
  }));

  //Dynamic Blog Posts
  const blogPosts = await findBlogs({ limit: 100 });

  const blogRoutes = blogPosts.data.map(post => {
    return {
      url: `${baseUrl}/blog/${post.slug}/detail`,
      lastModified: post.updated_at,
      priority: SITEMAP_CONFIG.blogPostsPrior,
    }
  })
  return [...staticRoutes, ...blogRoutes];
}

// Dynamic blog posts (contoh)
//   const blogPosts = await getBlogPosts(); // ambil dari API / DB

//   const blogRoutes = blogPosts.map((post: any) => ({
//     url: `${baseUrl}/blog/${post.slug}`,
//     lastModified: new Date(post.updatedAt || post.createdAt),
//   }));
