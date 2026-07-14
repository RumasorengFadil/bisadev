import { absoluteUrl } from "@/utils/absolute-path.util";
import { Metadata } from "next";


const metadata: Metadata = {
    title:
        "Blog Edusio - Artikel Pelatihan, Webinar, Pengembangan Skill & Karier",
    description:
        "Baca artikel terbaru seputar pelatihan online, webinar, sertifikasi, pengembangan skill, pendidikan digital, produktivitas, dan karier profesional bersama Edusio.",

    keywords:
        "blog edusio, pelatihan online, webinar indonesia, kursus online, sertifikasi profesional, pengembangan skill, pendidikan digital, pembelajaran online, pengembangan karier, teknologi pendidikan, artikel edukasi, tips karier, soft skill, hard skill",

    robots: "index, follow",

    openGraph: {
        title:
            "Blog Edusio - Artikel Pelatihan, Webinar & Pengembangan Skill",
        description:
            "Temukan insight, tips, dan panduan seputar pelatihan, webinar, sertifikasi, pendidikan digital, serta pengembangan karier profesional.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
        siteName: "Edusio",
        type: "website",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og/blog.png`,
                width: 1200,
                height: 630,
                alt: "Blog Edusio - Pelatihan, Webinar & Pengembangan Skill",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Blog Edusio - Artikel Pelatihan, Webinar & Pengembangan Skill",
        description:
            "Insight terbaru tentang pelatihan, webinar, sertifikasi, pendidikan digital, dan pengembangan karier.",
        images: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og/blog.png`,
        site: "@edusio",
    },

    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    },

    category: "education",
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