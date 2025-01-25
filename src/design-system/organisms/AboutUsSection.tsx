import React from "react";
import Image from "next/image";
import { SectionTitle } from "../components/SectionTitle";

const AboutUsSection: React.FC = () => {
    return <>
        <SectionTitle weight="bold" title="Tentang Kami" />
        <div className="flex justify-center flex-col px-10 space-x-10 text-justify sm:flex-row bg-white">
            <Image
                layout="responsive"
                width={200}
                height={200}
                className="w-full sm:max-w-80"
                src="/images/common/team-1.png"
                alt="Team Image"
                unoptimized
            />
            <p className="max-w-[600px] text-black">
                Bbyts adalah perusahaan yang menyediakan layanan profesional di bidang pembuatan website, jasa desain, dan pengembangan portofolio berbasis website. Kami berkomitmen untuk menghadirkan solusi digital kreatif dan inovatif yang mendukung kesuksesan bisnis Anda.
            </p>
        </div>
    </>
};

export default AboutUsSection;
