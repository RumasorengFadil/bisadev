import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../api";
import { toast } from "sonner";
import { UserFormSchemaType } from "../schemas/user-form.schema";

export default function useCreateUser() {
  return useMutation({
    mutationFn: (data: UserFormSchemaType) => createUser(data),
    onError: (error: any) => {
      console.error("Create user error:", error?.response?.data ?? error.message);
    },

    onSuccess: () => {
      toast.success("User created successfully", {
        description: "An activation email has been sent to the user.",
      });
    },
  });
}
