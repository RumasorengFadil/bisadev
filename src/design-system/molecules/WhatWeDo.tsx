"use client"

import Link from "next/link";
import { DropdownItem } from "../components/DropdownItem";

export const WhatWeDo = ({className}:{className?:string}) => {
    return <>
        <Link href="#our-service">
            <DropdownItem className={`cursor-pointer ${className}`} label="B-Portolio (Blio)" />
        </Link>
        <Link href="#our-service">
            <DropdownItem className={`cursor-pointer ${className}`} label="B-Point Of Sale (BPOS)" />
        </Link>
    </>

}