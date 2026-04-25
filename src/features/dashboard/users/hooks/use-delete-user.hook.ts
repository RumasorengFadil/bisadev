import { useMutation } from "@tanstack/react-query";
import { deleteUser } from "../api";
import { UserResponse } from "@/types/user-response.type";
import { toast } from "sonner";

export default function useDeleteUser() {
  return useMutation({
    mutationFn: (userId: string) => deleteUser(userId),
    onError: (error: any) => {
      console.error("Delete user error:", error?.response?.data ?? error.message);
    },

    onSuccess: (data: UserResponse) => {
      toast.success("User deleted successfully", {
        description: `${data.name} has been permanently removed from the platform.`,
      });
    },
  });
}
