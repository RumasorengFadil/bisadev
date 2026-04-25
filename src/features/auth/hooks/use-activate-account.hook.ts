import { activateAccount } from "../api";
import { useMutation } from '@tanstack/react-query';

export default function useActivateAccount(token:string){
    return useMutation({
        mutationFn: (payload:{password:string}) => activateAccount(token, payload),
        onError: (error: any) => {
            console.error("Activate account error:", error?.response?.data ?? error.message);
        },

        onSuccess: (data) => {},
    })
}

