import { PageClient } from "./page.client";

import { JsonLd } from "@/components/seo/JsonLd";
import { Metadata } from "next";
import { seo } from "./page.seo";

export const metadata: Metadata = seo.metadata;

export default function Page() {
  return (
    <>
      {/* === About Schema === */}
      <JsonLd data={seo.metadata} />

      {/* === About Page === */}
      <PageClient />
    </>
  )
}