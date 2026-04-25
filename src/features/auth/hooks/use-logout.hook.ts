import { useRouter } from "next/navigation";
import { logout } from "../api";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from "@/context/stores/use-auth.store";


export default function useLogout(){
    const router = useRouter();
    const queryClient = useQueryClient();
    const setUser = useAuthStore((s) => s.setUser);

    return useMutation({
        mutationFn: () => logout(),
        onError: (error: any) => {
            console.error("Register error:", error?.response?.data ?? error.message);
        },

        onSuccess: (data) => {
            queryClient.setQueryData(["me"], null);
            router.replace("/");
            setUser(null);
            console.log("Registered:", data);

        },
    })
}

