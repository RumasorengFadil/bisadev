import { useQuery } from "@tanstack/react-query";
import { BlogResponse } from "../types/index.type";
import { PaginationMeta } from "@/types/pagination-meta.type";
import { findBlogs } from "../api";
import { BlogSearchParams } from "@/types/blog-search-params";

export function useFindBlogs({ page = 1, limit = 10, query = "", status = "" }: BlogSearchParams) {
  return useQuery<{ data: BlogResponse[]; meta: PaginationMeta }>({
    queryKey: ["blogs", page, limit, query, status],
    queryFn: () => findBlogs({ page, limit, query, status }),

    // UX
    placeholderData: (prev) => prev,

    // Performance
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5,

    // Network behaviour
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,

    // Error handling
    retry: 1,
  });
}
