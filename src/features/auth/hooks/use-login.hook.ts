import { useRouter } from "next/navigation";
import { loginUser } from "../api";
import { LoginCredentials } from "../types";
import { useMutation } from "@tanstack/react-query";

export default function useLogin(redirect?: string) {
  const router = useRouter();
  return useMutation({
    mutationFn: (payload: LoginCredentials) => loginUser(payload),
    onError: (error: any) => {
      console.error("Login error:", error?.response?.data ?? error.message);
    },

    onSuccess: () => {
      if (redirect) {
        router.replace(redirect);
      } else {
        router.replace("/dashboard");
      }
    },
  });
}
