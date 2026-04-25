import { UserRoleFilter } from "@/enums/user-role-filter.enum";
import { UserRole } from "@/enums/user.role.enum";
import { SearchParams } from "@/types/search-params.type";

export interface UserSearchParams extends SearchParams {
    role?: UserRoleFilter,
}