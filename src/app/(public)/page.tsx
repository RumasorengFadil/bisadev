import { Metadata } from "next";
import { PageClient } from "./page.client";

export const metadata: Metadata = {
    title: "Bisa Dev - Jasa Pembuatan Website Profesional, Cepat & SEO Friendly",
    description:
        "Bisa Dev menyediakan jasa pembuatan website profesional, cepat, dan SEO friendly untuk bisnis, startup, dan personal brand. Tingkatkan kehadiran digital Anda sekarang.",
    keywords:
        "bisa dev, jasa pembuatan website, jasa website profesional, jasa desain UI UX, pengembangan website, website bisnis, website startup, jasa website SEO, web developer indonesia",
    robots: "index, follow",

    alternates: {
        canonical: process.env.NEXT_PUBLIC_BASE_URL,
    },

    openGraph: {
        title:
            "Bisa Dev - Jasa Pembuatan Website Profesional, Cepat & SEO Friendly",
        description:
            "Bisa Dev membantu bisnis Anda berkembang dengan website profesional, cepat, dan SEO friendly.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        siteName: "Bisa Dev",
        type: "website",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og/home.png`,
                width: 1200,
                height: 675,
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
        images: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og/home.png`,
        site: "@bisadev", // ganti jika ada username Twitter
    },

};


export default async function Page() {
    return (
        <PageClient />
    )
}