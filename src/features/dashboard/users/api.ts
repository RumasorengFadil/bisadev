import { api } from "@/lib/api";
import { SearchParams } from "@/types/search-params.type";
import { UserSearchParams } from "./types/user-search-params.type";
import { UserFormSchemaType } from "./schemas/user-form.schema";
import { UserStatus } from "@/enums/user.status.enum";

export async function findStats() {
  const res = await api.get("/user/stats");

  return res.data;
}

export async function findUsersTable({ page, limit, query, status, role }: UserSearchParams) {
  const searchParams = new URLSearchParams();

  if (page !== undefined) {
    searchParams.set("page", String(page));
  }

  if (limit !== undefined) {
    searchParams.set("limit", String(limit));
  }

  if (query) {
    searchParams.set("q", query);
  }

  if (status) {
    searchParams.set("status", status);
  }

  if (role) {
    searchParams.set("role", role);
  }

  const queryString = searchParams.toString();

  const res = await api.get(queryString ? `/user/table?${queryString}` : `/user/table`);

  return res.data;
}

export const searchInstructors = async (search: string, page: number) => {
  const { data } = await api.get("user/instructors", {
    params: { search, page, limit: 10 },
  });
  return data;
};

export const getInstructorsByIds = async (ids: string[]) => {
  const { data } = await api.get("/user/by-ids", {
    params: { ids: ids.join(",") },
  });
  return data;
};

export async function createUser(data: UserFormSchemaType) {
  const res = await api.post("/user", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
}

export async function resetPassword(userId: string) {
  const res = await api.post(`/user/${userId}/reset-password`);

  return res.data;
}

export async function updateUser(userId: string, data: Partial<UserFormSchemaType>) {
  const res = await api.patch(`/user/${userId}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
}

export async function changeStatus(userId: string, data: { status: UserStatus }) {
  const res = await api.patch(`/user/${userId}/change-status`, data);

  return res.data;
}
export async function blockUser(userId: string) {
  const res = await api.patch(`/user/${userId}/block`);

  return res.data;
}
export async function unblockUser(userId: string) {
  const res = await api.patch(`/user/${userId}/unblock`);

  return res.data;
}

export async function deleteUser(userId: string) {
  const res = await api.delete(`/user/${userId}`);

  return res.data;
}
