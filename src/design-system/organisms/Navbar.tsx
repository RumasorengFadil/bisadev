"use client"
import Link from "next/link"
import { NavbarToggleIcon } from "../components/NavbarToggleIcon"
import { Dropdown } from "../components/Dropdown"
import { DropdownButton } from "../components/DropdownButton"
import { WhatWeDo } from "../molecules/WhatWeDo"
import { useState } from "react"
import { OurProducts } from "../molecules/OurProducts"


export const Navbar = ({ subtitle = "" }:{subtitle?:string}) => {
    const [toggleNavbar, setToggleNavbar] = useState(false);

    return (
        <div className={`flex items-start space-y-4 flex-col space-x-5 py-5 flex-1 px-10 justify-between sm:space-y-0 sm:flex-row sm:items-center`}>
            <div className="flex w-full items-center justify-between sm:w-max">
                <Link href="">
                    <span className="text-2xl text-white font-semibold">Bbyts {subtitle}</span>
                    {/* <ApplicationLogo className="cursor-pointer w-60" /> */}
                </Link>
                <NavbarToggleIcon
                    toggle={toggleNavbar}
                    onClick={() => setToggleNavbar(!toggleNavbar)}
                />
            </div>

            <div className={`flex flex-col text-white space-y-4 sm:space-y-0 sm:space-x-10 sm:flex-row ${toggleNavbar ? "" : "hidden"} sm:flex`}>
                <Dropdown
                    className="sm:absolute sm:bg-gray-950 sm:translate-y-full sm:bottom-0"
                    trigger={<DropdownButton label="Produk Kami" />}
                    whenOpen="sm:opacity-100 sm:visible translate-y-0 sm:translate-y-full"
                    whenClose="hidden sm:invisible sm:flex sm:opacity-0 sm:translate-y-3/4"
                >
                    <WhatWeDo className="px-2 rounded sm:py-2 sm:hover:bg-gray-700" />
                </Dropdown>

                <Dropdown
                    className="sm:absolute sm:bg-gray-950 sm:translate-y-full sm:bottom-0"
                    trigger={<DropdownButton label="Jasa Kami" />}
                    whenOpen="sm:opacity-100 sm:visible translate-y-0 sm:translate-y-full"
                    whenClose="hidden sm:invisible sm:flex sm:opacity-0 sm:translate-y-3/4"
                >
                    <OurProducts className="px-2 rounded sm:py-2 sm:hover:bg-gray-700" />
                </Dropdown>

                <Link className=" sm:py-4" href="/blog">Blog</Link>
                <Link className=" sm:py-4" href="#who-we-are">Tentang Kami</Link>
            </div>
        </div>
    )
}