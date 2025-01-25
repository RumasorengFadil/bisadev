// Components/ServicesSection.tsx

import { BsPersonVcard } from "react-icons/bs";
import { TbCashRegister } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { SectionTitle } from "../components/SectionTitle";
import Card from "../components/Card";
import { IconFigure } from "../components/IconFigure";

const ServicesSection = () => {
    return (
        <div className="flex flex-col space-y-14 px-20 bg-yellowpale py-10 rounded-[150px]">
            <SectionTitle title="Jasa & Produk Kami" />
            <div className="flex flex-col sm:flex-row gap-10">
                <Card className="flex-1 sm:w-0 bg-white justify-center">
                    <IconFigure>
                        <div className="bg-yellowpale p-3 rounded-full shadow-md">
                            <BsPersonVcard className="opacity-60 text-black" size={24} />
                        </div>
                        <p className="opacity-60 text-center text-black">BLIO</p>
                    </IconFigure>
                </Card>
                <Card className="flex-1 sm:w-0 bg-white justify-center">
                    <IconFigure>
                        <div className="bg-yellowpale p-3 rounded-full shadow-md">
                            <TbCashRegister className="opacity-60 text-black" size={24} />
                        </div>
                        <p className="opacity-60 text-center text-black">BPOS</p>
                    </IconFigure>
                </Card>
                <Card className="flex-1 sm:w-0 bg-white justify-center">
                    <IconFigure>
                        <div className="bg-yellowpale p-3 rounded-full shadow-md">
                            <FaLaptopCode className="opacity-60 text-black" size={24} />
                        </div>
                        <p className="opacity-60 text-center text-black">Perancangan Website</p>
                    </IconFigure>
                </Card>
                <Card className="flex-1 sm:w-0 bg-white justify-center">
                    <IconFigure>
                        <div className="bg-yellowpale p-3 rounded-full shadow-md">
                            <MdOutlineDesignServices className="opacity-60 text-black" size={24} />
                        </div>
                        <p className="opacity-60 text-center text-black">Desain UI/UX</p>
                    </IconFigure>
                </Card>
            </div>
        </div>
    );
};

export default ServicesSection;
