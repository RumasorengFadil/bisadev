import Card from "@/design-system/components/Card";
import { IconFigure } from "@/design-system/components/IconFigure";
import { SectionTitle } from "@/design-system/components/SectionTitle";
import AboutUs from "@/design-system/organisms/AboutUs";
import HeroSection from "@/design-system/organisms/HeroSection";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import { BsPersonVcard } from "react-icons/bs";
import { TbCashRegister } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

export default function Home() {
  const header = (
    <>
      <HeroSection />
    </>
  )

  const content = (
    <>
      <AboutUs />

      <div className="flex flex-col space-y-14 px-20 bg-yellowpale py-10 rounded-[150px]">
        <SectionTitle title="Jasa & Produk Kami" />

        <div className="flex flex-col sm:flex-row gap-10">
          <Card className="flex-1 sm:w-0 bg-white justify-center">
            <IconFigure>
              <div className="bg-yellowpale p-3 rounded-full shadow-md">
                <BsPersonVcard className="opacity-60" size={24} />
              </div>
              <p className="opacity-60 text-center">BLIO</p>
            </IconFigure>
          </Card>
          <Card className="flex-1 sm:w-0 bg-white justify-center">
            <IconFigure>
              <div className="bg-yellowpale p-3 rounded-full shadow-md">
                <TbCashRegister className="opacity-60" size={24} />
              </div>
              <p className="opacity-60 text-center">BPOS</p>
            </IconFigure>
          </Card>
          <Card className="flex-1 sm:w-0 bg-white justify-center">
            <IconFigure>
              <div className="bg-yellowpale p-3 rounded-full shadow-md">
                <FaLaptopCode className="opacity-60" size={24} />
              </div>
              <p className="opacity-60 text-center">Perancangan Website</p>
            </IconFigure>
          </Card>
          <Card className="flex-1 sm:w-0 bg-white justify-center">
            <IconFigure>
              <div className="bg-yellowpale p-3 rounded-full shadow-md">
                <MdOutlineDesignServices className="opacity-60" size={24} />
              </div>
              <p className="opacity-60 text-center">Desain UI/UX</p>
            </IconFigure>
          </Card>


        </div>
      </div>
    </>
  )
  return (
    <ApplicationLayout header={header} content={content} />
  );
}
