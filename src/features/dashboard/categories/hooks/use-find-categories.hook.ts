import { useQuery } from "@tanstack/react-query";
import { findCategories } from "../api";
import { Pagination } from "@/types/pagination.type";
import { CategorySearchParams } from "@/types/category-search-params.type";
import { CategoryResponse } from "../components/types";

export function useFindCategories(catSearchParams: CategorySearchParams) {
  return useQuery<Pagination<CategoryResponse>>({
    queryKey: ["categories", catSearchParams],
    queryFn: () => findCategories(catSearchParams),
    staleTime: 5 * 60 * 1000, // 5 menit,
  });
}