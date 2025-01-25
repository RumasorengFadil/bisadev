import HeroSection from "@/design-system/organisms/HeroSection";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import ServicesSection from "@/design-system/organisms/ServicesSection";
import AboutUsSection from "@/design-system/organisms/AboutUsSection";

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
    </>
  )
  return (
    <ApplicationLayout header={header} content={content} />
  );
}
