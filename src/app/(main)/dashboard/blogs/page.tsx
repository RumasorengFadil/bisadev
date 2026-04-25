import { SearchParams } from "@/types/search-params.type";
import PageClient from "./page.client";

export default async function Page({ searchParams }: { searchParams: Promise<SearchParams> }) {
    const { query, limit, page, status } = await searchParams;
    return (
        <div className="space-y-6">
            <PageClient searchParams={{ limit, page, query, status }} />
        </div>)
}