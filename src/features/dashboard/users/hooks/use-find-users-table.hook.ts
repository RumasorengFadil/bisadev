import { useQuery } from "@tanstack/react-query";
import { findUsersTable } from "../api";
import { UserSearchParams } from "../types/user-search-params.type";
import { Pagination } from "@/types/pagination.type";
import { UserResponse } from "@/types/user-response.type";

export function useFindUsersTable({limit, page, query, role, status}: UserSearchParams) {
  return useQuery<Pagination<UserResponse>>({
    queryKey: ["users-table", page, query, status, role],
    queryFn: () => findUsersTable({limit, page, query, role, status}),
    staleTime: 0,
    // UX
    placeholderData: (prev) => prev,

    gcTime: 1000 * 60 * 5,

    // Network behaviour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,

    // Error handling
    retry: 1,
  });
}