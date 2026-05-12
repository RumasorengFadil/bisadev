import { apiPublicFetch } from "@/lib/api.public.fetch";
import { BlogSearchParams } from "@/types/blog-search-params";
import { PaginationMeta } from "@/types/pagination-meta.type";
import { BlogResponse } from "./types/index.type";

export async function findBlog(slug: string, revalidate?: number) {
    const data = apiPublicFetch<BlogResponse>(`/blogs/${slug}`, { next: { revalidate: 0 } });

    return data;
}

export async function findBlogs({ query, status, limit, page, sort, category }: BlogSearchParams) {
    const searchParams = new URLSearchParams();

    if (query) {
        searchParams.set("q", query);
    }

    if (status) {
        searchParams.set("status", status);
    }

    if (page) {
        searchParams.set("page", page.toString());
    }

    if (limit) {
        searchParams.set("limit", limit.toString());
    }

    if (sort) {
        searchParams.set("sort", sort.toString());
    }

    if (category) {
        searchParams.set("category", category.toString());
    }

    const queryString = searchParams.toString();

    const data = apiPublicFetch<{ data: BlogResponse[], meta: PaginationMeta }>(queryString ? `/blogs?status=published&${queryString}` : `/blogs?status=published`, { next: { revalidate: 0 } });

    return data;
}

export async function findRelatedBlogs(category: string) {
    const data = apiPublicFetch<{ data: BlogResponse[], meta: PaginationMeta }>(`/blogs?status=published&limit=3&sort=created_at:desc&category=${category}`, { next: { revalidate: 0 } });

    return (await data).data;
}