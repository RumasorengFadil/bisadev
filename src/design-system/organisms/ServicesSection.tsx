import { BsPersonVcard } from "react-icons/bs";
import { TbCashRegister } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { SectionTitle } from "../components/SectionTitle";
import Card from "../components/Card";
import { IconFigure } from "../components/IconFigure";
import { Slides } from "../components/Slide";

const ServicesSection = () => {
    return (
        <div id="our-service" className="flex flex-col space-y-14 px-20 bg-primary py-10 "
            style={{ clipPath: "ellipse(120% 50% at 50% 50%)" }}>
            <SectionTitle weight="bold" title="Jasa & Produk Kami" />
            <div className="flex flex-col sm:flex-row gap-10">
                <Card className="flex-1 sm:w-0 bg-white justify-center">
                    <IconFigure>
                        <div className="bg-primary p-3 rounded-full shadow-md">
                            <BsPersonVcard className="opacity-60 text-black" size={24} />
                        </div>
                        <p className="opacity-60 text-center text-black">BLIO</p>
                    </IconFigure>
                </Card>
                <Card className="flex-1 sm:w-0 bg-white justify-center">
                    <IconFigure>
                        <div className="bg-primary p-3 rounded-full shadow-md">
                            <TbCashRegister className="opacity-60 text-black" size={24} />
                        </div>
                        <p className="opacity-60 text-center text-black">BPOS</p>
                    </IconFigure>
                </Card>
                <Card className="flex-1 sm:w-0 bg-white justify-center">
                    <IconFigure>
                        <div className="bg-primary p-3 rounded-full shadow-md">
                            <FaLaptopCode className="opacity-60 text-black" size={24} />
                        </div>
                        <p className="opacity-60 text-center text-black">Perancangan Website</p>
                    </IconFigure>
                </Card>
                <Card className="flex-1 sm:w-0 bg-white justify-center">
                    <IconFigure>
                        <div className="bg-primary p-3 rounded-full shadow-md">
                            <MdOutlineDesignServices className="opacity-60 text-black" size={24} />
                        </div>
                        <p className="opacity-60 text-center text-black">Desain UI/UX</p>
                    </IconFigure>
                </Card>
            </div>
            <div className="flex flex-col space-y-4 overflow-hidden">
                <Slides
                    slides={[
                        {
                            title: "TAMPILKAN KARYA ANDA DALAM SATU HALAMAN PERSONAL",
                            image: "/images/common/slider-image-1.png",
                            price: "Rp. 2.000.000",
                            description: "Blio adalah layanan jasa pembuatan website portofolio profesional yang dirancang untuk menampilkan karya dan pencapaian anda secara elegan dan menarik. Desain responsif, cepat, dan dioptimalkan agar nama kamu mudah ditemukan di Google."
                        },
                        {
                            title: "SISTEM KASIR DIGITAL & SIAP MENDUKUNG BISNIS ANDA",
                            image: "/images/common/slider-image-2.png",
                            price: "Rp. 8.000.000",
                            description: "BPOS adalah solusi sistem kasir digital berbasis website & mobile yang cocok digunakan untuk usaha anda, terutama bagi pelaku UMKM. Dengan BPOS, anda dapat mengelola transaksi harian dengan mudah dan membuat laporan bisnis secara otomatis yang dapat diakses kapan saja secara online."
                        },
                        {
                            title: "BANGUN IDENTITAS BISNIS ANDA SECARA PROFESIONAL",
                            image: "/images/common/slider-image-3.png",
                            price: "Rp. 5.000.000",
                            description: "Kami menghadirkan solusi pengembangan website yang modern dan sesuai dengan kebutuhan bisnis Anda. Mulai dari website profil perusahaan, toko online, hingga sistem custom berbasis web, kami siap membantu Anda memiliki website yang tidak hanya menarik secara visual, tetapi juga optimal dari segi fungsi dan performa."
                        },
                    ]}
                    interval={5000}
                />
            </div>
        </div>
    );
};

export default ServicesSection;
