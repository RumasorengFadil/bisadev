"use client"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ChevronDown, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import ApplicationLogoWithText from "@/components/ApplicationLogoWithText"
import Link from "next/link"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    return (
        <div className="backdrop-blur-md bg-transparent border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex w-full items-center justify-between sm:w-max">
                    <Link href="/">
                        {/* <span className="text-2xl text-white font-semibold">Bbyts {subtitle}</span> */}
                        <ApplicationLogoWithText className="cursor-pointer w-24" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/" className={linkStyle}>Home</Link>

                    {/* <Link href="/" className={linkStyle}>Service</Link> */}
                    <Popover
                        open={openDropdown === "products"}
                        onOpenChange={(open) => setOpenDropdown(open ? "products" : null)}>
                        <PopoverTrigger className={linkStyle}>
                            <span className="inline-flex items-center gap-1">
                                Services
                                <ChevronDown className={cn("w-4 h-4 ", {
                                    "rotate-180 transition-all duration-1000": openDropdown === "products",
                                })} />
                            </span>
                        </PopoverTrigger>
                        <PopoverContent className="w-max mt-2 rounded-lg shadow p-0">
                            <ul className="space-y-2 flex flex-col">
                                <Link href="#services" className={dropdownLinkStyle}>Basic Package</Link>
                                <Link href="#services" className={dropdownLinkStyle}>Professional Package</Link>
                                <Link href="#services" className={dropdownLinkStyle}>Custom Package</Link>
                            </ul>
                        </PopoverContent>
                    </Popover>
                    <Link href="#products" className={linkStyle}>Products</Link>
                    <Link href="#about" className={linkStyle}>About Us</Link>

                    <Link href="/explore" className={linkStyle}>Blog</Link>
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger>
                            <Menu className="text-white" />
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-white w-[250px] p-6">
                            <nav className="flex flex-col gap-4">
                                <Link href="/" onClick={() => setOpen(false)} className="text-gray-800 font-medium">Home</Link>
                                <div>
                                    <div className="font-semibold text-gray-800">Services</div>
                                    <ul className="pl-4 mt-2 space-y-2">
                                        <li>
                                            <Link href="#services" onClick={() => setOpen(false)} className="text-gray-600">Basic Package</Link>
                                        </li>
                                        <li>
                                            <Link href="#services" onClick={() => setOpen(false)} className="text-gray-600">Professional Package</Link>
                                        </li>
                                        <li>
                                            <Link href="#services" onClick={() => setOpen(false)} className="text-gray-600">Custom Package</Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* <Link href="#about" onClick={() => setOpen(false)} className="text-gray-800 font-medium">Service</Link> */}
                                <Link href="#about" onClick={() => setOpen(false)} className="text-gray-800 font-medium">About Us</Link>
                                <Link href="#products" onClick={() => setOpen(false)} className="text-gray-800 font-medium">Products</Link>
                                <Link href="/explore" onClick={() => setOpen(false)} className="text-gray-800 font-medium">Blog</Link>
                                {/* <Link href="#contact" onClick={() => setOpen(false)} className="text-gray-800 font-medium">Contact</Link> */}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}

const linkStyle = cn("text-white font-medium hover:underline transition")
const dropdownLinkStyle = cn("text-sm font-medium text-gray-700 hover:text-black px-4 py-2 hover:bg-muted rounded-lg cursor-pointer")
