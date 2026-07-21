import { JsonLd } from "@/components/seo/JsonLd";
import { QueryFilterProvider } from "@/context/providers/query-filter-provider";
import { BlogStatus } from "@/features/dashboard/blog/enums/blog-status.enum";
import { BlogSearchParams } from "@/types/blog-search-params";
import { Metadata } from "next";
import PageClient from "./page.client";
import { seo } from "./page.seo";

export const metadata: Metadata = seo.metadata;

export default async function Page({ searchParams }: { searchParams: Promise<BlogSearchParams> }) {
    const { category, query } = await searchParams;

    return (
        <QueryFilterProvider<BlogSearchParams>
            defaultValues={{
                query: query ?? "",
                category: category ?? "",
                status: BlogStatus.PUBLISHED
            }}
        >
            <div className="space-y-6">
                <>
                    {/* === Blog Schema === */}
                    <JsonLd data={seo.schema} />

                    {/* === Blog Page === */}
                    <PageClient />
                </>
            </div>
        </QueryFilterProvider>
    )
}