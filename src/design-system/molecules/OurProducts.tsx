"use client"

import Link from "next/link";
import { DropdownItem } from "../components/DropdownItem";

export const OurProducts = ({ className }: { className?: string }) => {
    return <>
        <Link href="#our-service">
            <DropdownItem className={`cursor-pointer ${className}`} label="Perancangan Website Murah" />
        </Link>
        <Link href={""}>
            <DropdownItem className={`cursor-pointer ${className}`} label="Desain UI/UX" />
        </Link>
        {/* <Link href={""}>
            <DropdownItem className={`cursor-pointer ${className}`} label="Desain Properti" />
        </Link> */}
    </>

}