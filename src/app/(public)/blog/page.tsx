
import { findBlogs } from "@/features/dashboard/blog/api.server";
import { findCategories } from "@/features/dashboard/categories/api.server";
import { CategoryType } from "@/features/dashboard/categories/enums/category-type.enum";
import { Metadata } from "next";
import { Suspense } from "react";
import PageClient from "./page.client";

export const metadata: Metadata = {
    title:
        "Blog Bisa Dev - Insight Website, Bisnis Digital & Teknologi",
    description:
        "Temukan insight terbaru tentang pembuatan website, bisnis digital, e-commerce, dan teknologi dari Bisa Dev. Tingkatkan pengetahuan dan strategi digital Anda.",
    keywords:
        "blog bisa dev, artikel website, tips website bisnis, web development indonesia, e commerce indonesia, teknologi digital, bisnis online, SEO website, pengembangan website",
    robots: "index, follow",

    openGraph: {
        title:
            "Blog Bisa Dev - Insight & Artikel Digital",
        description:
            "Pelajari strategi website, bisnis digital, dan teknologi untuk mengembangkan bisnis Anda.",
        url: "https://bisadev.id/blog",
        siteName: "Bisa Dev",
        type: "website",
        images: [
            {
                url: "https://bisadev.id/images/app/og-image.png",
                width: 1200,
                height: 630,
                alt: "Blog Bisa Dev - Insight Website & Teknologi",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Blog Bisa Dev - Insight Digital & Teknologi",
        description:
            "Artikel seputar website, bisnis digital, dan teknologi terbaru.",
        images: "https://bisadev.id/images/app/og-image.png",
        site: "@bisadev",
    },

    alternates: {
        canonical: "https://bisadev.id/blog",
    },
};

export default async function Page() {

    const { data: categories } = await findCategories({ type: CategoryType.BLOG, limit: 5 })

    const blogs = await findBlogs({});

    return (
        <div className="space-y-6">
            <Suspense>
                <PageClient initialBlogData={blogs} categories={categories} />
            </Suspense>
        </div>)
}