import { useMutation } from "@tanstack/react-query";
import { blockUser, changeStatus } from "../api";
import { UserStatus } from "@/enums/user.status.enum";
import { UserResponse } from "@/types/user-response.type";
import { toast } from "sonner";

export default function useBlockUser() {
  return useMutation({
    mutationFn: (userId: string) => blockUser(userId),
    onError: (error: any) => {
      console.error("Block user error:", error?.response?.data ?? error.message);
    },

    onSuccess: (data: UserResponse) => {
      toast.success(
        `${data.name} has been blocked`,

        {
          description: "The user can no longer access the platform.",
        },
      );
    },
  });
}
