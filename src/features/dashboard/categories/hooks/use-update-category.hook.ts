import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CategoryFormSchemaType } from "../schema/category.schema";
import { updateCategory } from "../api";
import { toast } from "sonner";

export default function useUpdateCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ categoryId, data }: { categoryId: string; data: Partial<CategoryFormSchemaType> }) =>
      updateCategory(categoryId, data),
    onError: (error: any) => {
      console.error("Update category error:", error?.response?.data ?? error.message);
    },
    onSuccess: (updatedCategory) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}
