import { api } from "@/lib/api";
import { UserFormSchemaType } from "../users/schemas/user-form.schema";
import { SecurityFormValuesType } from "./schemas/security-schema";

export async function updateUserProfile(data: Partial<UserFormSchemaType>) {
  const res = await api.patch("/user/profile", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
}
export async function updateUserPassword(data: Partial<SecurityFormValuesType>) {
  const res = await api.patch("/user/password", data, {
  });

  return res.data;
}