import React from "react";
import { Navbar } from "./Navbar";
import { SectionTitle } from "../components/SectionTitle";
import PrimaryButton from "../molecules/PrimaryButton";

interface HeroSectionProps {
  onContactClick?: () => void; // Opsional handler untuk tombol "Contact Us"
}

const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <div
      className="bg-black space-y-14 rounded-b-[100px]"
      style={{
        backgroundImage: "url(/images/common/futuristic-tunnel.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />

      <SectionTitle className="text-yellowpale" size="lg">
        Prepare experience for <br /> your future with {" "}
        <span className="font-bold">Bbyts</span>
      </SectionTitle>

      <div className="flex justify-center">
        <PrimaryButton className="rounded-b-2xl rounded-t" onClick={onContactClick}>
          Hubungi Kami
        </PrimaryButton>
      </div>

      <div></div>
    </div>
  );
};

export default HeroSection;
