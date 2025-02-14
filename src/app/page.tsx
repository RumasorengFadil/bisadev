import ApplicationLayout from "@/Layouts/ApplicationLayout";
import ServicesSection from "@/design-system/organisms/ServicesSection";
import AboutUsSection from "@/design-system/organisms/AboutUsSection";
import WhyBbytsSection from "@/design-system/organisms/WhyBbytsSection";
import { Metadata } from "next";
import { ContactUs } from "@/design-system/organisms/ContactUs";
import { FooterProducts } from "@/design-system/organisms/FooterProducts";
import { FooterService } from "@/design-system/organisms/FooterService";
import { FooterFindUs } from "@/design-system/organisms/FooterFindUs";
import HomeHeroSection from "@/design-system/organisms/HomeHeroSection";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website & Solusi Digital Terbaik | Bbyts",
  description: "Bbyts adalah penyedia jasa pembuatan website profesional dan solusi digital untuk bisnis. Kami menawarkan layanan desain UI/UX, pengembangan website, serta portofolio online yang menarik dan fungsional. Kembangkan bisnis Anda dengan solusi digital terbaik dari Bbyts!",
  keywords: "jasa pembuatan website, jasa website profesional, jasa desain UI/UX, solusi digital bisnis, pengembangan website, portofolio online, website murah berkualitas, pembuatan website startup",
  robots: "index, follow",
  openGraph: {
    title: "Jasa Pembuatan Website & Solusi Digital Terbaik | Bbyts",
    description: "Bbyts adalah penyedia jasa pembuatan website profesional dan solusi digital untuk bisnis. Kami menawarkan layanan desain UI/UX, pengembangan website, serta portofolio online yang menarik dan fungsional. Kembangkan bisnis Anda dengan solusi digital terbaik dari Bbyts!",
    url: "https://bbyts.com/",
    type: "website",
    images: [{
      url: "https://bbyts.com/images/hero-banner.jpg",
      width: 1200,
      height: 630,
      alt: "Jasa Pembuatan Website & Solusi Digital - Bbyts"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website & Solusi Digital Terbaik | Bbyts",
    description: "Dapatkan layanan pembuatan website profesional, desain UI/UX, dan solusi digital terbaik untuk bisnis Anda hanya di Bbyts!",
    images: "https://bbyts.com/images/hero-banner.jpg",
    site: "@bbyts",
  },
};

export default function Home() {
  const header = (
    <>
      <HomeHeroSection />
    </>
  )

  const content = (
    <>
      <AboutUsSection />

      <ServicesSection />

      <WhyBbytsSection />

      <div className="text-white bg-white">.</div>
    </>
  )

  const footer = (
    <>
      <ContactUs />

      <FooterProducts />

      <FooterService />

      <FooterFindUs />
    </>
  )
  return (
    <ApplicationLayout header={header} content={content} footer={{content:footer, copyright:""}} />
  );
}
