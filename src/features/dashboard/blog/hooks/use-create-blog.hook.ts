import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "nextjs-toploader/app";
import { BlogFormSchemaType } from "../schema/blog-form.schema";
import { BlogResponse } from "../types/index.type";
import { createBlog } from "../api";

export default function useCreateBlog() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: (data: BlogFormSchemaType) => createBlog(data),
    onError: (error: any) => {
      console.error("Create blog error:", error?.response?.data ?? error.message);
    },

    onSuccess: (newData: BlogResponse) => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });

      toast.success("Blog successfully created", {
        description: "You will be redirected to the edit page shortly.",
      });

      router.replace(`/dashboard/blogs/${newData.slug}/edit`);
    },
  });
}
