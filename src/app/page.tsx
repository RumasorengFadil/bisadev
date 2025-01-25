import HeroSection from "@/design-system/organisms/HeroSection";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import ServicesSection from "@/design-system/organisms/ServicesSection";
import AboutUsSection from "@/design-system/organisms/AboutUsSection";
import WhyBbytsSection from "@/design-system/organisms/WhyBbytsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website dan Solusi Digital - Bbyts",
  description: "Bbyts adalah perusahaan yang menyediakan layanan profesional di bidang pembuatan website murah, jasa desain UI/UX murah, dan pengembangan portofolio berbasis website.",
};

export default function Home() {
  const header = (
    <>
      <HeroSection />
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
  return (
    <ApplicationLayout header={header} content={content} />
  );
}
