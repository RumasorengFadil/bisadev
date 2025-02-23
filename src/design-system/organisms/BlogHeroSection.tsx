import React from "react";
import { Navbar } from "./Navbar";
import { SectionTitle } from "../components/SectionTitle";
import PrimaryButton from "../molecules/PrimaryButton";
import Link from "next/link";

interface HeroSectionProps {
    onContactClick?: () => void; // Opsional handler untuk tombol "Contact Us"
}

const BlogHeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
    return (
        <div
            className="bg-black space-y-6 rounded-b-[100px]"
            style={{
                backgroundImage: "url(/images/common/futuristic-tunnel.webp)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Navbar />

            <SectionTitle className="text-white" size="lg">
                Insight Bisnis & Teknologi dari {" "}
                <span className="font-bold">Bbyts</span>
            </SectionTitle>

            <p className="text-white text-center mx-auto max-w-[824px] px-10">Dapatkan wawasan terbaru tentang bisnis digital, desain UI/UX, dan teknologi terkini melalui blog bbyts, dengan artikel, panduan, dan tren industri untuk mengembangkan bisnis dan keterampilan Anda. 🚀</p>
            <div className="flex justify-center">
                <Link href="#">
                    <PrimaryButton className="rounded-b-2xl rounded-t hover:text-white" onClick={onContactClick}>
                        Jelajahi Artikel
                    </PrimaryButton>
                </Link>
            </div>

            <div></div>
        </div>
    );
};

export default BlogHeroSection;
