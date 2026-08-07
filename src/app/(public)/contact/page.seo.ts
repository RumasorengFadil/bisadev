import { absoluteUrl } from "@/utils/absolute-path.util";
import { Metadata } from "next";


const metadata: Metadata = {
    title:
        "Kontak Bisadev - Konsultasi Website Gratis & Penawaran Project",
    description:
        "Hubungi Bisadev untuk konsultasi pembuatan website profesional. Diskusikan kebutuhan bisnis Anda dan dapatkan solusi terbaik dengan cepat dan SEO friendly.",
    keywords:
        "kontak Bisadev, jasa website indonesia, konsultasi website gratis, web developer indonesia, jasa pembuatan website jakarta, hubungi developer website, jasa website profesional",
    robots: "index, follow",

    openGraph: {
        title:
            "Kontak Bisadev - Konsultasi Website Gratis",
        description:
            "Punya ide website? Hubungi Bisadev sekarang dan mulai project Anda bersama tim profesional.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
        siteName: "Bisadev",
        type: "website",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og/contact.png`,
                width: 1200,
                height: 630,
                alt: "Kontak Bisadev - Jasa Pembuatan Website Profesional",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Kontak Bisadev - Konsultasi Website",
        description:
            "Diskusikan project website Anda bersama Bisadev sekarang.",
        images: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og/contact.png`,
        site: "@bisadev",
    },

    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    },
};

export const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",

    "@id": absoluteUrl("/contact#contact"),

    "name": metadata.title,

    "description": metadata.description,

    "url": absoluteUrl("/contact"),

    "about": {
        "@id": absoluteUrl("/#organization")
    }
}

export const seo = { metadata, schema };