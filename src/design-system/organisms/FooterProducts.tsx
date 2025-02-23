import React from "react";
import { SectionTitle } from "../components/SectionTitle";
import Link from "next/link";

export const FooterProducts: React.FC = () => {
  return (
    <div className="flex flex-col w-full space-y-4 text-white">
      <SectionTitle align="left" size="base" weight="semibold" title="Produk Kami" className="text-base text-white" />

      <ul className="flex flex-col space-y-2">
        <Link href={""} >

          <li>B-Portofolio (Blio)</li>
        </Link>
        <Link href="">
          <li>B-Point of Sale (BPOS)</li>
        </Link>
      </ul>
    </div>
  );
};
