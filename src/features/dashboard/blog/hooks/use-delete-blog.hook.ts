import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteBlog } from "../api";
import { BlogResponse } from "../types/index.type";
import { SearchParams } from "@/types/search-params.type";

export default function useDeleteBlog() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (blogId: string) => deleteBlog(blogId),
    onError: (error: any) => {
      console.error("Delete blog error:", error?.response?.data ?? error.message);
    },

    onSuccess: (deletedBlog: BlogResponse) => {
      
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });

      toast.success("Blog successfully deleted");
    },
  });
}
