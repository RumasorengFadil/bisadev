import { apiServerFetch } from "@/lib/api.server.fetch";
import { CategorySearchParams } from "@/types/category-search-params.type";
import { PaginationMeta } from "@/types/pagination-meta.type";
import { CategoryResponse } from "./components/types";


export async function findCategories(catParams: CategorySearchParams) {
    const { limit, page, query, type } = catParams
    const searchParams = new URLSearchParams();

    if (page !== undefined) {
        searchParams.set("page", String(page));
    }

    if (limit !== undefined) {
        searchParams.set("limit", String(limit));
    }

    if (query) {
        searchParams.set("q", query.toString());
    }

    if (type) {
        searchParams.set("type", type);
    }

    const queryString = searchParams.toString();

    const data = apiServerFetch<{ data: CategoryResponse[], meta: PaginationMeta }>(queryString ? `/categories?${queryString}` : `/categories`, { next: { revalidate: 43200 } });

    return data;
}