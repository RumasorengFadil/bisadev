import { JsonLd } from "@/components/seo/JsonLd";
import { Metadata } from "next";
import { PageClient } from "./page.client";
import { seo } from "./page.seo";

export const metadata: Metadata = seo.metadata;

export default function Page() {
  return (

    <>
      {/* === Service Schema */}
      <JsonLd data={seo.schema} />

      {/* === Service Page */}
      <PageClient />
    </>
  )
}