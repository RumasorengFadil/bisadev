import React from "react";
import { SectionTitle } from "../components/SectionTitle";
import Image from "next/image";

const AboutUsSection: React.FC = () => {
    return <>
        <div id="about" className="min-h-screen pt-32 border-b py-20 flex gap-8 flex-col px-6 md:px-16 justify-center items-center scroll-m-20">
            <h2 className="text-center font-bold leading-[120%] text-3xl sm:text-4xl lg:text-5xl">Tentang Bbyts</h2>
            <div className="flex gap-10 justify-center items-center flex-col text-justify sm:flex-row">
                <div>
                    <Image
                        width={150}
                        height={150}
                        className="sm:max-w-80"
                        src="/images/app/og-image.png"
                        alt="Jasa pembuatan website murah"
                    />
                </div>
                <div className="space-y-6">
                    <p className="text-muted-foreground text-lg">
                        BBYTS adalah perusahaan teknologi kreatif yang berfokus pada layanan pembuatan website profesional dengan harga yang terjangkau dan hasil berkualitas tinggi. Kami membantu bisnis, UKM, hingga brand personal untuk memiliki website yang modern, cepat, aman, dan mudah ditemukan di Google.
                    </p>
                    <p className="text-muted-foreground text-lg">
                        Dengan pengalaman di bidang web development dan SEO (Search Engine Optimization), tim kami menghadirkan solusi digital yang scalable, user-friendly, dan berorientasi hasil. Kami percaya bahwa setiap bisnis berhak memiliki website yang bukan hanya tampil menarik, tetapi juga mampu mendatangkan traffic dan pelanggan baru.
                    </p>
                    <p className="text-muted-foreground text-lg">
                        Di BBYTS, kami tidak hanya membangun website — kami membantu Anda membangun kehadiran digital yang kuat.
                        Mulai dari strategi desain, pengembangan website, hingga optimasi SEO, setiap langkah kami dirancang untuk membantu bisnis Anda tumbuh secara berkelanjutan.
                    </p>
                    <p className="text-muted-foreground text-lg">
                        Sebagai mitra digital yang dapat dipercaya, BBYTS siap membantu Anda mentransformasi bisnis secara online — menjadikannya lebih terlihat, lebih dipercaya, dan lebih menguntungkan.
                    </p>
                </div>
            </div>
        </div>
    </>
};

export default AboutUsSection;
