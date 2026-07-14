import { JsonLd } from "@/components/seo/JsonLd";
import { Metadata } from "next";
import { PageClient } from "./page.client";
import { seo } from "./page.seo";

export const metadata: Metadata = seo.metadata;

export default function Page() {
    return (
        <>
            {/* Portofolio Schema */}
            <JsonLd data={seo.schema} />

            {/* Portofolio Pages */}
            <PageClient />
        </>
    )
}