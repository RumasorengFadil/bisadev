import { BlogSearchParams } from "@/types/blog-search-params";
import { PaginationMeta } from "@/types/pagination-meta.type";
import { useQuery } from "@tanstack/react-query";
import { findBlogs } from "../api";
import { BlogResponse } from "../types/index.type";

export function useFindBlogs({ params: { page, limit, query = "", status = "", category }, initialData }: { params: BlogSearchParams, initialData?: { data: BlogResponse[]; meta: PaginationMeta } }) {
  return useQuery<{ data: BlogResponse[]; meta: PaginationMeta }>({
    queryKey: ["blogs", page, limit, query, status, category],
    queryFn: () => findBlogs({ page, limit, query, status, category }),
    staleTime: 0
  });
}
