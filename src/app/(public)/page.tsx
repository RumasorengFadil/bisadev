import { Metadata } from "next";
import { PageClient } from "./page.client";
import { seo } from "./page.seo";

export const metadata: Metadata = seo.metadata;
export const revalidate = 3600;

export default async function Page() {
    return (
        <PageClient />
    )
}