import { APP_CONFIG } from "@/config/app-config";
import { Metadata } from "next";


const metadata: Metadata = {
    title: "Bisa Dev - Jasa Pembuatan Website Profesional, Cepat & SEO Friendly",
    description:
        "Bisa Dev menyediakan jasa pembuatan website profesional, cepat, dan SEO friendly untuk bisnis, startup, dan personal brand. Tingkatkan kehadiran digital Anda sekarang.",
    keywords:
        "bisa dev, jasa pembuatan website, jasa website profesional, jasa desain UI UX, pengembangan website, website bisnis, website startup, jasa website SEO, web developer indonesia",
    robots: "index, follow",

    alternates: {
        canonical: APP_CONFIG.url,
    },

    openGraph: {
        title:
            "Bisa Dev - Jasa Pembuatan Website Profesional, Cepat & SEO Friendly",
        description:
            "Bisa Dev membantu bisnis Anda berkembang dengan website profesional, cepat, dan SEO friendly.",
        url: `${APP_CONFIG.url}`,
        siteName: "Bisa Dev",
        type: "website",
        images: [
            {
                url: `${APP_CONFIG.url}/images/og/home.png`,
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
        images: `${APP_CONFIG.url}/images/og/home.png`,
        site: "@bisadev", // ganti jika ada username Twitter
    },

};

export const seo = { metadata };