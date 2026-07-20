import { Metadata } from "next";
import { PageClient } from "./page.client";
import { seo } from "./page.seo";

export const metadata: Metadata = seo.metadata;


export default async function Page() {
    return (
        <PageClient />
    )
}