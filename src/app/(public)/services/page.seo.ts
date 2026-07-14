import { absoluteUrl } from "@/utils/absolute-path.util";
import { Metadata } from "next";


const metadata: Metadata = {
    title:
        "Layanan Bisa Dev - Jasa Pembuatan Website Custom & Solusi Digital",
    description:
        "Layanan Bisa Dev mencakup pembuatan website custom yang profesional, cepat, dan SEO friendly. Kami juga mengembangkan solusi digital seperti marketplace produk digital dan sistem POS.",
    keywords:
        "layanan bisa dev, jasa pembuatan website custom, website profesional indonesia, jasa web development, jasa UI UX, pengembangan website bisnis, solusi digital, aplikasi POS indonesia, marketplace digital",
    robots: "index, follow",

    openGraph: {
        title:
            "Layanan Bisa Dev - Website Development & Solusi Digital",
        description:
            "Bangun website profesional dengan performa tinggi dan SEO optimal bersama Bisa Dev.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
        siteName: "Bisa Dev",
        type: "website",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og/services.png`,
                width: 1200,
                height: 630,
                alt: "Layanan Bisa Dev - Website Development & Solusi Digital",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Layanan Bisa Dev - Website Development",
        description:
            "Solusi pembuatan website profesional untuk bisnis, startup, dan personal brand.",
        images: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og/services.png`,
        site: "@bisadev",
    },

    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Service",

    "@id": absoluteUrl("/services#services"),

    "name": metadata.title,

    "description": metadata.description,

    "url": absoluteUrl("/services"),

    "provider": {
        "@id": absoluteUrl("/#organization")
    }
}

export const seo = { metadata, schema };