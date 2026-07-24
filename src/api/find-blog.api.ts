import { BlogResponse } from "@/features/dashboard/blog/types/index.type";
import { apiPublicFetch } from "@/lib/api.public.fetch";

export async function findBlog(slug: string) {
    const data = apiPublicFetch<BlogResponse>(`/blogs/${slug}`);

    return data;
}
