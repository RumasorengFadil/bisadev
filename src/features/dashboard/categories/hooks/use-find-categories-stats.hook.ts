import { useQuery } from "@tanstack/react-query";
import { CategoryStatsResponse } from "../types";
import { findCategoriesStats } from "../api";

export function useFindCategoriesStats() {
  return useQuery<CategoryStatsResponse[]>({
    queryKey: ["categories-stats"],
    queryFn: () => findCategoriesStats(),
    staleTime: 5 * 60 * 1000, // 5 menit,
  });
}
