import { findRelatedBlogs } from "@/features/dashboard/blog/api.server";
import PageClient from "./page.client";

export const dynamic = "force-static";

import { findBlog } from "@/api/find-blog.api";
import { JsonLd } from "@/components/seo/JsonLd";
import { APP_CONFIG } from "@/config/app-config";
import { BlogResponse } from "@/features/dashboard/blog/types/index.type";
import { absoluteUrl } from "@/utils/absolute-path.util";
import type { Metadata } from 'next';
import { cache } from "react";
import { metadata } from "../../page";

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
const generateSchema = async (post: BlogResponse) => {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",

        "@id": absoluteUrl(`/blog/${post.slug}/detail#article`),
        "url": absoluteUrl(`/blog/${post.slug}/detail`),

        "headline": post.title,
        "description": metadata.description,

        "image": post.thumbnail_url,

        "datePublished": post.created_at,
        "dateModified": post.updated_at,

        "author": {
            "@type": "Person",
            "name": post.author?.name ?? "Admin"
        },

        "publisher": {
            "@id": absoluteUrl("/#organization")
        },

        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": absoluteUrl(`/blog/${post.slug}/detail`)
        }
    };
};
export const revalidate = 3600;


export default async function Page({ params }: Props) {
    const { slug } = await params;

    const post = await findBlogCache(slug);
    const schema = await generateSchema(post);

    const relatedPosts = await findRelatedBlogs(post.category.name)

    return (
        <>
            <JsonLd data={schema} />
            <PageClient relatedPosts={relatedPosts} post={post} />

        </>
    )
}