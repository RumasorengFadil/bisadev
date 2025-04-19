// Components/ServicesSection.tsx

import { BsPersonVcard } from "react-icons/bs";
import { TbCashRegister } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { SectionTitle } from "../components/SectionTitle";
import Card from "../components/Card";
import { IconFigure } from "../components/IconFigure";
import Link from "next/link";

const ServicesSection = () => {
    return (
        <div className="flex flex-col space-y-14 px-20 bg-primary py-10"
            style={{ clipPath: "ellipse(95% 50% at 50% 50%)" }}>
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

            {/* <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-6xl md:text-7xl font-bold text-indigo-900 mb-6">
                        BLIO
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-700 mb-8">
                        TAMPILKAN KARYA ANDA DALAM SATU HALAMAN PERSONAL
                    </p>

                    <div className="bg-white rounded-xl shadow-lg p-8 mb-10 max-w-3xl mx-auto">
                        <p className="text-lg md:text-xl text-gray-800 mb-6">
                            <span className="font-bold text-indigo-600">Bilo</span> adalah layanan jasa pembuatan website portofolio profesional yang dirancang untuk menampilkan karya dan pencapaian anda secara elegan dan menarik. Desain responsif, cepat, dan dioptimalkan agar nama kamu mudah ditemukan di Google.
                        </p>

                        <div className="mt-8">
                            <p className="text-gray-600 mb-2">Harga Mulai Dari</p>
                            <p className="text-3xl font-bold text-indigo-700 mb-6">
                                Rp. xxx.xxx
                            </p>

                            <Link href="/paket" passHref>
                                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                                    Lihat Paket
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default ServicesSection;
