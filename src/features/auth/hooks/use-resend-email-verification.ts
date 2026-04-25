import { toast } from "sonner";
import { resendEmailVerification, resetPassword } from "../api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function useResendEmailVerification() {
  return useMutation({
    mutationFn: (payload: { email: string }) => resendEmailVerification(payload),
    onError: (error: any) => {
      console.error("Resend email verification error:", error?.response?.data ?? error.message);
    },

    onSuccess: (data) => {
      toast.success(data.message);
    },
  });
}
