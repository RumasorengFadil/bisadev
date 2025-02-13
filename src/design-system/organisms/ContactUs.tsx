import React from "react";
import ApplicationLogo from "../components/ApplicationLogo";
import { SectionTitle } from "../components/SectionTitle";
import { ExternalLink } from "../components/ExternalLink";
import Button from "../components/Button";

export const ContactUs: React.FC = () => {
    return (
        <section className="flex flex-col w-full space-y-4">
            {/* <ApplicationLogo className="w-40 fill-current" /> */}
            <span className="text-2xl text-black font-semibold">Bbyts</span>
            <SectionTitle align="left" size="base" weight="semibold" className="text-base" title="Do You Need Help ?" />

            <p>Aplikasi Kasir Online . Marketplace portofolio . Pembuatan Website . Desain UI/UX</p>
            <ExternalLink href="https://wa.me/625244682780?text=">
                <Button className="bg-orange-500 text-white rounded-b-2xl rounded-t" >
                    Hubungi Kami
                </Button>
            </ExternalLink>
        </section>
    );
};
