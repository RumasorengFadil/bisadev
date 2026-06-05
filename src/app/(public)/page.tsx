import { findBlogs } from "@/features/dashboard/blog/api.server";
import { Metadata } from "next";
import { PageClient } from "./page.client";

export const metadata: Metadata = {
    title: "Bisa Dev - Jasa Pembuatan Website Profesional, Cepat & SEO Friendly",
    description:
        "Bisa Dev menyediakan jasa pembuatan website profesional, cepat, dan SEO friendly untuk bisnis, startup, dan personal brand. Tingkatkan kehadiran digital Anda sekarang.",
    keywords:
        "bisa dev, jasa pembuatan website, jasa website profesional, jasa desain UI UX, pengembangan website, website bisnis, website startup, jasa website SEO, web developer indonesia",
    robots: "index, follow",

    openGraph: {
        title:
            "Bisa Dev - Jasa Pembuatan Website Profesional, Cepat & SEO Friendly",
        description:
            "Bisa Dev membantu bisnis Anda berkembang dengan website profesional, cepat, dan SEO friendly.",
        url: "https://bisadev.id", // ganti sesuai domain baru
        siteName: "Bisa Dev",
        type: "website",
        images: [
            {
                url: "https://bisadev.id/images/app/og-image.png", // ganti jika ada
                width: 1200,
                height: 630,
                alt: "Bisa Dev - Jasa Pembuatan Website Profesional dan SEO Friendly",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Bisa Dev - Jasa Pembuatan Website Profesional & SEO Friendly",
        description:
            "Solusi website profesional untuk bisnis, startup, dan personal brand.",
        images: "https://bisadev.id/images/app/og-image.png",
        site: "@bisadev", // ganti jika ada username Twitter
    },

    alternates: {
        canonical: "https://bisadev.id",
    },
};


export default async function Page() {
    const latestBlogs = await findBlogs({ limit: 3, sort: "created_at:desc" });
    return (
        <PageClient latestBlogs={latestBlogs.data} />
    )
}