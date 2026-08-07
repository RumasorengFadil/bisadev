import { absoluteUrl } from "@/utils/absolute-path.util";
import { Metadata } from "next";


const metadata: Metadata = {
    title:
        "Portfolio Website Bisadev | Hasil Project & Website yang Telah Diselesaikan",

    description:
        "Lihat portfolio website terbaik dari Bisadev. Temukan berbagai project website company profile, landing page, website bisnis, sistem web custom, dan solusi digital yang telah berhasil dikembangkan untuk klien di Indonesia.",

    keywords: [
        "portfolio website",
        "portfolio web developer",
        "hasil project website",
        "contoh website company profile",
        "website bisnis profesional",
        "jasa pembuatan website",
        "web developer indonesia",
        "website custom",
        "portfolio Bisadev",
        "jasa website indonesia",
        "pengembang website profesional",
        "project website perusahaan",
    ].join(", "),

    robots: {
        index: true,
        follow: true,
    },

    openGraph: {
        title:
            "Portfolio Website Bisadev | Project Website Profesional",
        description:
            "Jelajahi berbagai website dan sistem digital yang telah dikembangkan oleh Bisadev untuk UMKM, startup, dan perusahaan di Indonesia.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/portofolio`,
        siteName: "Bisadev",
        type: "website",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og/portofolio.png`,
                width: 1200,
                height: 630,
                alt: "Portfolio Website Bisadev",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Portfolio Website Bisadev | Hasil Project Terbaik",
        description:
            "Lihat berbagai project website, company profile, landing page, dan sistem web custom yang telah berhasil dikerjakan oleh Bisadev.",
        images: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og/portofolio.png`,
        site: "@bisadev",
    },

    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/portofolio`,
    },
};

export const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    "@id": absoluteUrl("/portfolio#portfolio"),

    "name": metadata.title,

    "description": metadata.description,

    "url": absoluteUrl("/portfolio"),

    "about": {
        "@id": absoluteUrl("/#organization")
    }
}

export const seo = { metadata, schema };