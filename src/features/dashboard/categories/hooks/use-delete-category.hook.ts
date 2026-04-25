import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "../api";
import { toast } from "sonner";

export function useDeleteCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (courseId: string) => deleteCategory(courseId),
    onError: (error: any) => {
      console.error("Delete category error:", error?.response?.data ?? error.message);
    },
    onSuccess: (_res, categoryId) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}
