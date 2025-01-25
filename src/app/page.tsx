import { SectionTitle } from "@/design-system/components/SectionTitle";
import HeroSection from "@/design-system/organisms/HeroSection";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import Image from "next/image";
import firstTeam from '../../public/images/common/team-1.png';

export default function Home() {
  const header = <>
    <HeroSection />
  </>

  const content = <>
    <SectionTitle weight="bold" className="" title="About Us" />

    <div className="flex justify-center flex-col px-10 space-x-10 text-justify sm:flex-row">
      <Image
        layout="responsive" // Mengisi penuh kontainer
        width={200}
        height={200}
        className="w-full sm:max-w-80"
        src={firstTeam} alt=""
        unoptimized
      />
      <p className="max-w-[600px]">Bbyts adalah perusahaan yang menyediakan layanan profesional di bidang pembuatan website, jasa desain, dan pengembangan portofolio berbasis website. Kami berkomitmen untuk menghadirkan solusi digital kreatif dan inovatif yang mendukung kesuksesan bisnis Anda.</p>
    </div>

    <div className="bg-gray-200 w-full h-96 rounded-t-[100px]"></div>

  </>
  return (
    <ApplicationLayout header={header} content={content} />
  );
}
