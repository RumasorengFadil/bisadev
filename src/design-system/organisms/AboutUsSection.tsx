import React from "react";
import { SectionTitle } from "../components/SectionTitle";
import Image from "next/image";

const AboutUsSection: React.FC = () => {
    return <>
        <div id="about" className="py-16">
            <SectionTitle className="mb-6" weight="bold" title="About Bbyts" />
            <div className="flex justify-center flex-col px-10 space-x-10 text-justify sm:flex-row">
                <Image
                    width={200}
                    height={200}
                    className="w-full sm:max-w-80"
                    src="/images/common/team-1.webp"
                    alt="Jasa pembuatan website murah"
                />
                <div className="space-y-6">
                    <p className="text-muted-foreground text-lg">
                        Bbyts is a creative technology company offering professional services in website development, UI/UX design, portfolio-based websites, and point of sale (POS) systems. Our solutions are tailored to support and empower MSMEs in enhancing their digital presence and business operations. With a strong commitment to innovation and user-centric design, we help businesses grow through smart, scalable, and impactful digital products. At Bbyts, your success is our mission—powered by creativity, driven by technology.
                    </p>
                    <p className="text-muted-foreground text-lg">
                        With a commitment to quality, speed, and convenience, bbyts is here as a trusted digital partner
                        to realize your business transformation.
                    </p>
                </div>
            </div>
        </div>
    </>
};

export default AboutUsSection;
