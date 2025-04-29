import React from "react";
import { Navbar } from "./Navbar";
import { SectionTitle } from "../components/SectionTitle";
import PrimaryButton from "../molecules/PrimaryButton";
import { ExternalLink } from "../components/ExternalLink";

interface HeroSectionProps {
  onContactClick?: () => void; // Opsional handler untuk tombol "Contact Us"
}

const HomeHeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <div
      className="bg-black space-y-10"
      style={{
        backgroundImage: "url(/images/common/futuristic-tunnel.webp)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        clipPath: "ellipse(90% 100% at 50% 0%)"
      }}
    >
      <Navbar />

      <SectionTitle className="text-white" size="lg">
        Prepare experience for <br /> your future with {" "}
        <span className="font-bold">Bbyts</span>
      </SectionTitle>

      <div className="flex justify-center">
        <ExternalLink href="https://wa.me/6285244682780?text=">
          <PrimaryButton className="rounded-b-2xl rounded-t" onClick={onContactClick}>
            Hubungi Kami
          </PrimaryButton>
        </ExternalLink>
      </div>

      <div></div>
    </div>
  );
};

export default HomeHeroSection;
