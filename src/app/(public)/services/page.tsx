import { PageClient } from "./page.client";

import { Metadata } from "next";

export const metadata: Metadata = {
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
    url: "https://bisadev.id/services",
    siteName: "Bisa Dev",
    type: "website",
    images: [
      {
        url: "https://bisadev.id/images/app/og-image.png",
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
    images: "https://bisadev.id/images/common/og-image.webp",
    site: "@bisadev",
  },

  alternates: {
    canonical: "https://bisadev.id/services",
  },
};

export default function Page() {
    return (
        <PageClient />
    )
}