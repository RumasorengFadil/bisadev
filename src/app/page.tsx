import { SectionTitle } from "@/design-system/components/SectionTitle";
import HeroSection from "@/design-system/organisms/HeroSection";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import Image from "next/image";

export default function Home() {
  const header = <>
    <HeroSection />
  </>

  const content = <>
    <SectionTitle weight="bold" className="" title="About Us" />

    <div className="flex flex-col px-10 space-x-10 text-justify sm:flex-row">
      <Image className="w-full sm:max-w-72" src="/images/common/team-1.png" alt="" />
      <p className="max-w-[600px]">Bbyts adalah perusahaan yang menyediakan layanan profesional di bidang pembuatan website, jasa desain, dan pengembangan portofolio berbasis website. Kami berkomitmen untuk menghadirkan solusi digital kreatif dan inovatif yang mendukung kesuksesan bisnis Anda.</p>
    </div>
    
    <div className="bg-gray-200 w-full h-96 rounded-t-[100px]"></div>

  </>
  return (
    <ApplicationLayout header={header} content={content} />
  );
}
