import { JsonLd } from "@/components/seo/JsonLd";
import { PageClient } from "./page.client";

import { Metadata } from "next";
import { seo } from "./page.seo";

export const metadata: Metadata = seo.metadata;
export default function Page() {
  return (
    <>
      {/* === Contact Schema === */}
      <JsonLd data={seo.schema} />

      {/* === Contact Page === */}
      <PageClient />
    </>
  )
}