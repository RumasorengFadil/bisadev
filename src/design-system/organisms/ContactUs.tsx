import React from "react";
import { SectionTitle } from "../components/SectionTitle";
import { ExternalLink } from "../components/ExternalLink";
import Button from "../components/Button";
import ApplicationLogo from "../components/ApplicationLogo";

export const ContactUs: React.FC = () => {
    return (
        <section className="flex flex-col w-full space-y-4 text-white">
            {/* <ApplicationLogo className="w-40 fill-current" /> */}
            <ApplicationLogo className="w-24" />
            <SectionTitle align="left" size="base" weight="semibold" className="text-base text-white" title="Do You Need Help ?" />

            <p>Aplikasi Kasir Online . Marketplace portofolio . Pembuatan Website . Desain UI/UX</p>
            <ExternalLink href="https://wa.me/625244682780?text=">
                <Button className="bg-primary text-black rounded-b-2xl rounded-t" >
                    Hubungi Kami
                </Button>
            </ExternalLink>
        </section>
    );
};
