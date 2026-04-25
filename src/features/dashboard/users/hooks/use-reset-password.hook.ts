import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../api";
import { UserResponse } from "@/types/user-response.type";
import { toast } from "sonner";

export default function useResetPassword() {
  return useMutation({
    mutationFn: (userId: string) => resetPassword(userId),
    onError: (error: any) => {
      console.error("Reset user password error:", error?.response?.data ?? error.message);
    },

    onSuccess: (data: UserResponse) => {
      toast.success(`Password reset email sent to ${data.email}`, {
        description: `${data.name} will receive an email with instructions to reset their password.`,
      });
    },
  });
}
