import { absoluteUrl } from "@/utils/absolute-path.util";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Tentang Bisadev - Partner Digital untuk Website Profesional",
    description:
        "Kenali Bisadev, partner digital yang membantu bisnis, startup, dan personal brand dalam membangun website profesional, cepat, dan SEO friendly.",
    keywords:
        "tentang Bisadev, bisadev indonesia, web developer indonesia, jasa website profesional, developer website indonesia, tentang perusahaan Bisadev",
    robots: "index, follow",

    openGraph: {
        title: "Tentang Bisadev - Partner Digital untuk Bisnis Anda",
        description:
            "Bisadev adalah partner digital yang fokus membantu bisnis berkembang melalui website profesional dan SEO friendly.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
        siteName: "Bisadev",
        type: "website",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og/about.png`,
                width: 1200,
                height: 630,
                alt: "Tentang Bisadev - Jasa Pembuatan Website Profesional",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Tentang Bisadev",
        description:
            "Kenali lebih dekat Bisadev sebagai partner digital untuk bisnis Anda.",
        images: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og/about.png`,
        site: "@bisadev",
    },

    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
};

export const schema = {
    "@context": "https://schema.org",
    "@type": "About",

    "@id": absoluteUrl("/about#about"),

    "name": metadata.title,

    "description": metadata.description,

    "url": absoluteUrl("/about"),

    "about": {
        "@id": absoluteUrl("/#organization")
    }
}

export const seo = { metadata, schema };