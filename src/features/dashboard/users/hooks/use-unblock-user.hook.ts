import { useMutation } from "@tanstack/react-query";
import { unblockUser } from "../api";
import { UserResponse } from "@/types/user-response.type";
import { toast } from "sonner";

export default function useUnblockUser() {
  return useMutation({
    mutationFn: (userId: string) => unblockUser(userId),
    onError: (error: any) => {
      console.error("Unblock user status error:", error?.response?.data ?? error.message);
    },

    onSuccess: (data: UserResponse) => {
      toast.success(`${data.name} has been unblocked`, {
        description: "The user can now access the platform again.",
      });
    },
  });
}
