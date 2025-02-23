import React from "react";
import { SectionTitle } from "../components/SectionTitle";
import Link from "next/link";

export const FooterService: React.FC = () => {
  return (
    <div className="flex flex-col w-full space-y-4 text-white">
      <SectionTitle align="left" size="base" weight="semibold" title="Jasa Kami" className="text-base text-white" />

      <ul className="flex flex-col space-y-2">
        <Link href={""} >

          <li>Perancangan Website</li>
        </Link>
        <Link href="">
          <li>Desain UI/UX</li>
        </Link>
      </ul>
    </div>
  );
};
