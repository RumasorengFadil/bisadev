import { absoluteUrl } from "@/utils/absolute-path.util";
import { Metadata } from "next";


const metadata: Metadata = {
    title:
        "Bisadev | Artikel Web Development, Software House, AI, SEO & Teknologi Indonesia",

    description:
        "Baca artikel terbaru dari BisaDev seputar web development, software house, website bisnis, AI, SEO, React, Laravel, Next.js, digital transformation, serta tips teknologi untuk UMKM, startup, dan perusahaan.",

    keywords:
        "Bisadev, BisaDev Indonesia, Bisadev, software house indonesia, jasa pembuatan website, web development, website bisnis, aplikasi web, React.js, Next.js, Laravel, TypeScript, SEO website, AI, artificial intelligence, digital transformation, teknologi bisnis, software development, UMKM digital, startup indonesia",

    robots: "index, follow",

    openGraph: {
        title:
            "Bisadev | Insight Web Development, AI & Digital Transformation",

        description:
            "Temukan insight, tutorial, dan artikel terbaru tentang web development, AI, SEO, digital transformation, React, Laravel, Next.js, serta teknologi untuk mengembangkan bisnis.",

        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
        siteName: "BisaDev",
        type: "website",

        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og/blog.png`,
                width: 1200,
                height: 630,
                alt: "Bisadev - Web Development & Teknologi",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Bisadev | Web Development, AI, SEO & Teknologi",

        description:
            "Artikel terbaru tentang web development, AI, React, Laravel, Next.js, SEO, dan digital transformation dari BisaDev.",

        images: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og/blog.png`,

        site: "@bisadev",
    },

    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    },

    category: "technology",
};

export const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",

    "@id": absoluteUrl("/blog#blog"),

    "name": metadata.title,

    "description": metadata.description,

    "url": absoluteUrl("/blog"),

    "publisher": {
        "@id": absoluteUrl("/#organization")
    }
}
export const seo = { metadata, schema };