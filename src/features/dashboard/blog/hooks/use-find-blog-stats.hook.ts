import { useQuery } from "@tanstack/react-query";
import { BlogStatsRes } from "../types/index.type";
import { findStats } from "../api";

export function useFindBlogStats() {
  return useQuery<BlogStatsRes>({
    queryKey: ["stats"],
    queryFn: () => findStats(),
    staleTime: 1000 * 30,
  });
}
