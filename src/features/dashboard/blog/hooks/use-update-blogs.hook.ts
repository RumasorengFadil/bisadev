import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogFormSchemaType } from "../schema/blog-form.schema";
import { updateBlog } from "../api";
import { toast } from "sonner";
import { BlogResponse } from "../types/index.type";

export default function useUpdateBlogs(blogId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<BlogFormSchemaType>) => updateBlog(blogId, data),
    onError: (error: any) => {
      console.error("Update blog error:", error?.response?.data ?? error.message);
    },

    onSuccess: (updatedBlog: BlogResponse) => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      toast.success("Blog successfully updated", {});
    },
  });
}
