"use client";

import { Button } from "@/components/ui/button";
import { ctaItems } from "@/data/heroItems";
import { ExpandScale } from "@/components/motion/ExpandScale";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-end pb-12 justify-end pt-[108px]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/common/futuristic-tunnel-dark.webp')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-left mx-auto px-6 py-6 w-full md:px-16 md:py-8">
        <h1
          className="
      font-montserrat font-bold text-white leading-[120%]
      text-5xl lg:text-6xl
    "
        >
          We Design, Build, and, Scale
          Digital Experiences That Matter.
        </h1>

        <h2
          className="
      mt-6 sm:mt-8 text-gray-300 font-medium
      text-lg lg:text-xl
      leading-[180%]
      max-w-[946px]
    "
        >
          Bbyts builds high-performance websites that solve real business challenges. From responsive design to seamless user experiences, our solutions help businesses engage users, improve conversion, and scale with confidencee.
        </h2>

        {/* CTA Buttons */}
        <div className="flex mt-10 sm:mt-16 flex-wrap lg:flex-nowrap items-center gap-4 md:gap-8">
          {ctaItems.map((item, i) => (
            <Link key={i} href={item.href}>
              <Button className="rounded-lg bg-secondary text-white p-0 px-3 py-1 hover:bg-secondary/90 cursor-pointer w-full md:text-base xl:text-xl sm:w-auto">
                {item.label}
              </Button>
            </Link>
          ))}

          <ExpandScale delay={0.3} className="flex-1">
            <div className="w-full hidden md:block bg-white h-[1px]"></div>
          </ExpandScale>
        </div>
      </div>
    </section >
  );
}
