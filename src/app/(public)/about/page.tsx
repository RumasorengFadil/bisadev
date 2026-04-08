import { PageClient } from "./page.client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Bisa Dev - Partner Digital untuk Website Profesional",
  description:
    "Kenali Bisa Dev, partner digital yang membantu bisnis, startup, dan personal brand dalam membangun website profesional, cepat, dan SEO friendly.",
  keywords:
    "tentang bisa dev, bisadev indonesia, web developer indonesia, jasa website profesional, developer website indonesia, tentang perusahaan bisa dev",
  robots: "index, follow",

  openGraph: {
    title: "Tentang Bisa Dev - Partner Digital untuk Bisnis Anda",
    description:
      "Bisa Dev adalah partner digital yang fokus membantu bisnis berkembang melalui website profesional dan SEO friendly.",
    url: "https://bisadev.id/about",
    siteName: "Bisa Dev",
    type: "website",
    images: [
      {
        url: "https://bisadev.id/images/common/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Tentang Bisa Dev - Jasa Pembuatan Website Profesional",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tentang Bisa Dev",
    description:
      "Kenali lebih dekat Bisa Dev sebagai partner digital untuk bisnis Anda.",
    images: "https://bisadev.id/images/common/og-image.webp",
    site: "@bisadev",
  },

  alternates: {
    canonical: "https://bisadev.id/about",
  },
};

export default function Page() {
    return (
        <PageClient />
    )
}