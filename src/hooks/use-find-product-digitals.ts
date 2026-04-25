import { useQuery } from "@tanstack/react-query";
import { findProductDigitals } from "@/api/api";
import { ProductListItem, ProductSearchParams } from "@/features/dashboard/product-digital/types";
import { PaginationFilter } from "@/types/pagination-filter.type";

export function useFindProductDigitals({ limit = 5, page, query, category, maxPrice, minPrice }: ProductSearchParams) {
  return useQuery<PaginationFilter<ProductListItem>>({
    queryKey: ["product-digitals", limit, page, query, category, maxPrice, minPrice],
    queryFn: () => findProductDigitals({ limit, page, query, category, maxPrice, minPrice }),
    staleTime: 0,
  });
}
