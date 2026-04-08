import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_ENV === "local" ? "http://localhost:3000/" : "https://bisadev.id/";

  // Static pages
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // Dynamic blog posts (contoh)
//   const blogPosts = await getBlogPosts(); // ambil dari API / DB

//   const blogRoutes = blogPosts.map((post: any) => ({
//     url: `${baseUrl}/blog/${post.slug}`,
//     lastModified: new Date(post.updatedAt || post.createdAt),
//   }));

  return [...staticRoutes];
}