import { PageClient } from "./page.client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Kontak Bisa Dev - Konsultasi Website Gratis & Penawaran Project",
  description:
    "Hubungi Bisa Dev untuk konsultasi pembuatan website profesional. Diskusikan kebutuhan bisnis Anda dan dapatkan solusi terbaik dengan cepat dan SEO friendly.",
  keywords:
    "kontak bisa dev, jasa website indonesia, konsultasi website gratis, web developer indonesia, jasa pembuatan website jakarta, hubungi developer website, jasa website profesional",
  robots: "index, follow",

  openGraph: {
    title:
      "Kontak Bisa Dev - Konsultasi Website Gratis",
    description:
      "Punya ide website? Hubungi Bisa Dev sekarang dan mulai project Anda bersama tim profesional.",
    url: "https://bisadev.id/contact",
    siteName: "Bisa Dev",
    type: "website",
    images: [
      {
        url: "https://bisadev.id/images/app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kontak Bisa Dev - Jasa Pembuatan Website Profesional",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kontak Bisa Dev - Konsultasi Website",
    description:
      "Diskusikan project website Anda bersama Bisa Dev sekarang.",
    images: "https://bisadev.id/images/app/og-image.png",
    site: "@bisadev",
  },

  alternates: {
    canonical: "https://bisadev.id/contact",
  },
};

export default function Page() {
    return (
        <PageClient />
    )
}