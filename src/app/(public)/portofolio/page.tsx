import { JsonLd } from "@/components/seo/JsonLd";
import { Metadata } from "next";
import { PageClient } from "./page.client";
import { portfolioSchema } from "./page.schema";

export const metadata: Metadata = {
    title:
        "Portfolio Website Bisa Dev | Hasil Project & Website yang Telah Diselesaikan",

    description:
        "Lihat portfolio website terbaik dari Bisa Dev. Temukan berbagai project website company profile, landing page, website bisnis, sistem web custom, dan solusi digital yang telah berhasil dikembangkan untuk klien di Indonesia.",

    keywords: [
        "portfolio website",
        "portfolio web developer",
        "hasil project website",
        "contoh website company profile",
        "website bisnis profesional",
        "jasa pembuatan website",
        "web developer indonesia",
        "website custom",
        "portfolio bisa dev",
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
            "Portfolio Website Bisa Dev | Project Website Profesional",
        description:
            "Jelajahi berbagai website dan sistem digital yang telah dikembangkan oleh Bisa Dev untuk UMKM, startup, dan perusahaan di Indonesia.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/portofolio`,
        siteName: "Bisa Dev",
        type: "website",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og/portofolio.png`,
                width: 1200,
                height: 630,
                alt: "Portfolio Website Bisa Dev",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Portfolio Website Bisa Dev | Hasil Project Terbaik",
        description:
            "Lihat berbagai project website, company profile, landing page, dan sistem web custom yang telah berhasil dikerjakan oleh Bisa Dev.",
        images: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og/portofolio.png`,
        site: "@bisadev",
    },

    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/portofolio`,
    },
};


export default function Page() {
    return (
        <>
            {/* Portofolio Schema */}
            <JsonLd data={portfolioSchema} />

            {/* Portofolio Pages */}
            <PageClient />
        </>
    )
}