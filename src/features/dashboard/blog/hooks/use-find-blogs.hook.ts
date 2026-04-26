import { useQuery } from "@tanstack/react-query";
import { BlogResponse } from "../types/index.type";
import { PaginationMeta } from "@/types/pagination-meta.type";
import { findBlogs } from "../api";
import { BlogSearchParams } from "@/types/blog-search-params";

export function useFindBlogs({ params : {page = 1, limit = 10, query = "", status = "", category}, initialData }: {params: BlogSearchParams, initialData?:{ data: BlogResponse[]; meta: PaginationMeta }}) {
  return useQuery<{ data: BlogResponse[]; meta: PaginationMeta }>({
    queryKey: ["blogs", page, limit, query, status, category],
    queryFn: () => findBlogs({ page, limit, query, status, category }),

    // UX
    placeholderData: (prev) => prev,

    initialData,
    // Performance
    staleTime: 0,
    gcTime: 1000 * 60 * 5,

    // Network behaviour
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,

    // Error handling
    retry: 1,
  });
}
