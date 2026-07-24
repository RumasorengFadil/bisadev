import { findRelatedBlogs } from "@/features/dashboard/blog/api.server";
import PageClient from "./page.client";

export const dynamic = "force-static";

import { findBlog } from "@/api/find-blog.api";
import { APP_CONFIG } from "@/config/app-config";
import type { Metadata } from 'next';
import { cache } from "react";

type Props = {
    params: Promise<{ slug: string }>
}

export const findBlogCache = cache(async (slug: string) => {
    return await findBlog(slug);
});

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    // read route params
    const { slug } = await params

    // fetch data
    const post = await findBlogCache(slug);

    return {
        title: post.title,
        description: post.excerpt,
        robots: "index, follow",
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            url: `${APP_CONFIG.url}/blog/${post.slug}/detail`,
            images: post.thumbnail_url ?
                [
                    {
                        url: post.thumbnail_url,
                        width: 1200,
                        height: 630,
                        alt: post.title,
                    }
                ]
                :
                []
            ,
        },

        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: post.thumbnail_url ? [post.thumbnail_url] : []
        },

        alternates: {
            canonical: `${APP_CONFIG.url}/blog/${post.slug}/detail`,
        }
    }
}
export const revalidate = 3600;


export default async function Page({ params }: Props) {
    const { slug } = await params;

    const post = await findBlogCache(slug);

    const relatedPosts = await findRelatedBlogs(post.category.name)

    return (
        <PageClient relatedPosts={relatedPosts} post={post} />
    )
}