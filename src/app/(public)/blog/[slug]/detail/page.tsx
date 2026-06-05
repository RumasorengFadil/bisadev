import { findBlog, findRelatedBlogs } from "@/features/dashboard/blog/api.server";
import PageClient from "./page.client";

export const dynamic = "force-static";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const post = await findBlog(slug);

    const relatedPosts = await findRelatedBlogs(post.category.name)

    return (
        <PageClient relatedPosts={relatedPosts} post={post} />
    )
}