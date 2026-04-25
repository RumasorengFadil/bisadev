import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory } from "../api";
import { CategoryFormSchemaType } from "../schema/category.schema";

export default function useCreateCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CategoryFormSchemaType) => createCategory(data),
    onError: (error: any) => {
      console.error("Create category error:", error?.response?.data ?? error.message);
    },
    onSuccess: (newCat) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}
