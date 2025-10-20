"use client";

import { useCallback, useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import ContactButton from "../molecules/ContactButtonV1";
import { siteConfig } from "@/config/site";
import ApplicationLogoWithText from "@/components/ApplicationLogoWithText"
import { navItems } from "@/data/navItems";

interface NavbarSectionProps {
  autoHide?: boolean;
}

export default function NavbarSection({ autoHide = false }: NavbarSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hash, setHash] = useState<string>("");
  const [isScroll, setIscroll] = useState(false);

  // Scroll behavior
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIscroll(currentScrollY > window.innerHeight * 0.1);
      setIsOpen(false);
      setHidden(autoHide && currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [autoHide]);

  // Hash change
  const updateHash = useCallback(() => {
    setHash(window.location.hash);
  }, []);

  useEffect(() => {
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [updateHash]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-[background-color,box-shadow] duration-500 ease-in-out
        ${isScroll ? "bg-white shadow-sm" : ""}`}
    >
      <div className={`mx-auto flex items-center justify-between transition-all duration-500  ${isScroll ? "px-6 py-4 md:px-16 md:py-4" : "px-6 py-6 md:px-16 md:py-6"}`}>
        {/* Logo */}
        <div className="flex items-center">
          <ApplicationLogoWithText className="w-24" />
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex items-center gap-4 xl:gap-8">
            {navItems.map((item) => {
              const isActive =
                item.href === hash || (item.href === "/" && !hash);

              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    href={item.href}
                    className="hover:bg-transparent p-0 focus-visible:outline-none focus-visible:ring-0 focus:bg-transparent"
                  >
                    <span
                      className={`relative transition-all duration-500 flex items-center gap-2 text-sm md:text-base tracking-wide
                        before:content-[''] before:inline-block before:w-2 before:h-2
                        before:rounded-full before:bg-primary before:transition-opacity
                        before:opacity-0 hover:before:opacity-100
                        ${isActive
                          ? `before:opacity-100 font-semibold ${isScroll ? "text-black" : "text-gray-100"
                          }`
                          : `${isScroll ? "text-gray-700" : "text-gray-100"
                          }`
                        }`}
                    >
                      {item.label}
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}

            {/* Contact Us Button */}
            <ContactButton whatsAppNumber={siteConfig.whatsapp} isScroll={isScroll} />
          
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-md p-2 lg:hidden"
        >
          {isOpen ? (
            <div className="p-3 bg-gray-200 cursor-pointer rounded-md">
              <X
                className={`h-6 w-6 cursor-pointer ${isScroll ? "text-foreground" : "text-background"
                  }`}
              />
            </div>
          ) : (
            <div className="p-3 bg-gray-200/30 cursor-pointer rounded-md">
              <Menu
                className={`h-5 w-5 ${isScroll ? "text-foreground" : "text-background"
                  }`}
              />
            </div>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-0 left-0 z-40 flex h-screen w-full flex-col bg-white shadow-md lg:hidden">
          {/* Header mobile */}
          <div className="flex items-center justify-between border-b py-6 mx-6 md:px-16 md:py-8">
            <ApplicationLogoWithText className="w-24" />
            <button onClick={() => setIsOpen(false)} className="rounded-md p-2">
              <div className="p-3 bg-gray-200 cursor-pointer  rounded-md">
                <X
                  className={`h-5 w-5 cursor-pointer text-black ${isScroll ? "text-foreground" : "text-background"
                    }`}
                />
              </div>
            </button>
          </div>

          {/* Menu List */}
          <div className="flex flex-1 flex-col items-center pt-6 justify-start space-y-6">
            {navItems.map((item) => {
              const isActive =
                item.href === hash || (item.href === "/" && !hash);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`relative text-2xl font-medium transition tracking-wide ${isActive
                    ? "text-black font-semibold"
                    : "text-gray-600 hover:text-black"
                    }`}
                >
                  <span
                    className={`flex items-center gap-2 before:content-[''] before:inline-block before:w-3 before:h-3 md:before:w-4 md:before:h-4 before:rounded-full before:bg-primary before:transition-opacity ${isActive ? "before:opacity-100" : "before:opacity-0"
                      }`}
                  >
                    {item.label}
                  </span>
                </a>
              );
            })}

            {/* Contact Us Button */}
            <ContactButton whatsAppNumber={siteConfig.whatsapp} isScroll={true} />

          </div>

          {/* Footer */}
          <div className="border-t px-4 py-3 text-center text-xs text-gray-500">
            <p>Copyright © 2025. PT. Rotapro Nademi Teknikal</p>
            <p>Design by ROTAPRO</p>
          </div>
        </div>
      )}
    </header>
  );
}
