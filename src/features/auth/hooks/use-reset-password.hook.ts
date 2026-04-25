import { toast } from "sonner";
import { resetPassword } from "../api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function useResetPassword(token: string) {
  const router = useRouter();
  return useMutation({
    mutationFn: (payload: { password: string }) => resetPassword(token, payload),
    onError: (error: any) => {
      console.error("Reset password error:", error?.response?.data ?? error.message);
    },

    onSuccess: () => {
      toast.success("Password Reset Successful", {
        description: "Your password has been updated. You will be redirected to the login page.",
      });

      setTimeout(() => {
        router.replace("/login");
      }, 1800);
    },
  });
}
