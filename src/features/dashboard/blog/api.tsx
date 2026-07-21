import { api } from "@/lib/api";
import { BlogSearchParams } from "@/types/blog-search-params";
import { BlogFormSchemaType } from "./schema/blog-form.schema";

//
// COURSES
//
export async function findBlogs({ page, limit, query, status, category }: BlogSearchParams) {
    const searchParams = new URLSearchParams();

    if (page !== undefined) {
        searchParams.set("page", String(page));
    }

    if (limit !== undefined) {
        searchParams.set("limit", String(limit));
    }

    if (query) {
        searchParams.set("q", query);
    }

    if (status) {
        searchParams.set("status", status);
    }
    if (category) {
        searchParams.set("category", category);
    }

    const queryString = searchParams.toString();

    const res = await api.get(
        queryString ? `/blogs/${queryString}` : `/blogs`
    );

    return res.data;
}
export async function findBlog(slug: string) {
    const res = await api.get(`/blogs/${slug}`);

    return res.data;
}

export async function createBlog(data: BlogFormSchemaType) {
    const res = await api.post("/blogs", data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return res.data;
}

export async function findStats() {
    const res = await api.get("/blogs/stats");

    return res.data;
}

export async function updateBlog(blogId: string, data: Partial<BlogFormSchemaType>) {
    const res = await api.patch(`/blogs/${blogId}`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return res.data;
}

export async function deleteBlog(blogId: string) {
    const res = await api.delete(`/blogs/${blogId}`);

    return res.data;
}