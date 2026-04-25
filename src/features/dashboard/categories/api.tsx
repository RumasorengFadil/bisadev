import { api } from "@/lib/api";
import { CategoryFormSchemaType } from "./schema/category.schema";
import { CategorySearchParams } from "@/types/category-search-params.type";

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

    const res = await api.get(
        queryString ? `/categories?${queryString}` : `/categories`
    );

    return res.data;
}
export async function createCategory(data: CategoryFormSchemaType) {
    const res = await api.post("/category", data);

    return res.data;
}

export async function updateCategory(categoryId: string, data: Partial<CategoryFormSchemaType>) {
    const res = await api.patch(`/category/${categoryId}`, data);

    return res.data;
}

export async function deleteCategory(categoryId: string) {
    const res = await api.delete(`/category/${categoryId}`);

    return res.data;
}
