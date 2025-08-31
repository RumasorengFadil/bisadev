import ApplicationLogoWithText from "@/components/ApplicationLogoWithText";
import { Button } from "@/components/ui/button";
import React from "react";
import { ExternalLink } from "../components/ExternalLink";
import { SectionTitle } from "../components/SectionTitle";

export const ContactUs: React.FC = () => {
    return (
        <section className="flex flex-col w-full space-y-4 text-white">
            {/* <ApplicationLogo className="w-40 fill-current" /> */}
            <ApplicationLogoWithText className="w-24" />
            <SectionTitle align="left" size="base" weight="semibold" className="text-base text-white" title="Do You Need Help ?" />

            <p>Aplikasi Kasir Online . Marketplace portofolio . Pembuatan Website . Desain UI/UX</p>
            <ExternalLink href="https://wa.me/6285178137881?text=">
                <Button className="bg-primary text-black rounded-b-2xl rounded-t" >
                    Hubungi Kami
                </Button>
            </ExternalLink>
        </section>
    );
};

