import Image from "next/image";
import { SectionTitle } from "../components/SectionTitle";

const WhyBbytsSection = () => {
    return (
      <div className="flex flex-col space-y-4 px-10">
        <SectionTitle>
          Kenapa Harus <span className="font-bold">Bbyts</span>
        </SectionTitle>
  
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row">
          <div>
            <Image
              layout="responsive"
              width={1200}
              height={1200}
              className="max-w-full"
              src="/images/common/career-orientation.png"
              alt="Team Image"
              unoptimized
            />
          </div>
  
          <div className="flex flex-col space-y-6">
            <SectionTitle>
              Solusi Digital Untuk Bisnis dan <br /> Masa Depan Kamu
            </SectionTitle>
  
            <p className="text-justify">
              Kami percaya bahwa setiap bisnis dan insan memiliki karakter unik, sehingga kami menawarkan solusi yang disesuaikan dengan kebutuhan Anda untuk memastikan hasil yang optimal.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhyBbytsSection;
  