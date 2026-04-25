import { forgotPassword } from "../api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function useForgotPassword() {
  const router = useRouter();
  return useMutation({
    mutationFn: (payload: { email: string }) => forgotPassword(payload),
    onError: (error: any) => {
      console.error("Forgot password error:", error?.response?.data ?? error.message);
    },

    onSuccess: () => {
      toast.message('Your email has been sending', {
        description: "Please check your email or spam"
      })
      router.push("/sent");
    },
  });
}
