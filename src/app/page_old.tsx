import { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Bbyts - Jasa Pembuatan Website Murah, Profesional, dan SEO Friendly | Bbyts",
  description: "Jasa pembuatan website murah, profesional, dan SEO friendly untuk bisnis Anda. Desain elegan, cepat, dan mudah ditemukan di Google. Dapatkah penawaran terbaik sekarang!",
  keywords: "jasa pembuatan website, jasa website profesional, jasa desain UI/UX, solusi digital bisnis, pengembangan website, portofolio online, website murah berkualitas, pembuatan website startup",
  robots: "index, follow",
  openGraph: {
    title: "Jasa Pembuatan Website Murah, Profesional, dan SEO Friendly",
    description: "Jasa pembuatan website murah, profesional, dan SEO friendly untuk bisnis Anda. Desain elegan, cepat, dan mudah ditemukan di Google. Dapatkah penawaran terbaik sekarang!",
    url: "https://bbyts.com",
    siteName: "Bbyts",
    type: "website",
    images: [{
      url: "https://bbyts.com/images/common/futuristic-tunnel-dark.webp",
      width: 1200,
      height: 630,
      alt: "Jasa Pembuatan Website Murah, Profesional, dan SEO Friendly. Dapatkah penawaran terbaik sekarang!"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Murah, Profesional, dan SEO Friendly",
    description: "Jasa pembuatan website murah, profesional, dan SEO friendly.",
    images: "https://bbyts.com/images/common/futuristic-tunnel-dark.webp",
    site: "@bbyts",
  },
  alternates: {
    canonical: "https://bbyts.com",
  },
};

export default async function Home() {
  return (
    <PageClient />
  )
}

