import React from "react";
import { Button } from "@/components/ui/button";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { ExternalLink } from "../components/ExternalLink";
import Navbar from "./Navbar";
import Image from "next/image";

interface HeroSectionProps {
  onContactClick?: () => void;
}

const HomeHeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section
      className="relative overflow-hidden bg-black text-white  min-h-[50vh] lg:min-h-[90vh]"
      style={{
        clipPath: "ellipse(90% 100% at 50% 0%)"
      }}
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 -z-10 h-full w-full" style={{
        clipPath: "ellipse(90% 100% at 50% 0%)"
      }}>
        <ParallaxProvider>
          <Parallax speed={-20}>
            <div className="w-full h-full object-cover min-h-[50vh] lg:min-h-[90vh]">
              <Image
                src="/images/common/futuristic-tunnel.webp"
                alt="Parallax Background"
                className="object-cover"
                priority
                fill
              />
            </div>
          </Parallax>
        </ParallaxProvider>
      </div>

      {/* Navbar tetap di atas */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Konten Tengah */}
      <div className="flex flex-col justify-center items-center text-center min-h-[50vh] lg:min-h-[90vh] space-y-10 px-4 z-10 relative">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Prepare experience for <br />
          your future with <span className="font-bold text-primary">Bbyts</span>
        </h1>

        <ExternalLink href="https://wa.me/6285244682780?text=">
          <Button className="rounded-b-2xl rounded-t transition-all duration-300 hover:scale-105 hover:shadow-lg" onClick={onContactClick}>
            Contact Us
          </Button>
        </ExternalLink>
      </div>
    </section>
  );
};

export default HomeHeroSection;
