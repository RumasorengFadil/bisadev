import { JsonLd } from "@/components/seo/JsonLd";
import HeroSection from "@/features/public/home/HeroSection";
import { Metadata } from "next";
import PageClient from "./page.client";
import { seo } from "./page.seo";

export const metadata: Metadata = seo.metadata;


export default async function Page() {
    return <>
        {/* === Blog Schema === */}
        <JsonLd data={seo.schema} />

        {/* Hero */}
        <HeroSection />

        {/* Page Client */}
        <PageClient />
    </>
}