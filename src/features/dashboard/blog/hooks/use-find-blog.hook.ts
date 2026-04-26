import { PaginationMeta } from "@/types/pagination-meta.type";
import { useQuery } from "@tanstack/react-query";
import { findBlog } from "../api";
import { BlogResponse } from "../types/index.type";

export function useFindBlog(slug: string) {
  return useQuery<BlogResponse>({
    queryKey: ["blog"],
    queryFn: () => findBlog(slug),

    // Performance
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,

    // Network behaviour
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,

    // Error handling
    retry: 1,
  });
}
