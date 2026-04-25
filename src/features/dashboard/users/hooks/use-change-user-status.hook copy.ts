import { useMutation } from '@tanstack/react-query';
import {  changeStatus } from "../api";
import { UserStatus } from '@/enums/user.status.enum';

export default function useChangeUserStatus(){
    return useMutation({
        mutationFn: ({data, userId}:{userId:string, data:{status:UserStatus}}) => changeStatus(userId, data),
        onError: (error: any) => {
            console.error("Change user status error:", error?.response?.data ?? error.message);
        },

        onSuccess: () => {},
    })
}

