import { useQuery } from "@tanstack/react-query";
import { findStats } from "../api";
import { UserStats } from "../types/user-stats.type";

export function useFindUserStats() {
  return useQuery<UserStats>({
    queryKey: ["user-stats"],
    queryFn: () => findStats(),
    staleTime: 0,
  });
}