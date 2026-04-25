import { useMutation } from '@tanstack/react-query';
import {  updateUser } from "../api";
import { UserFormSchemaType } from '../schemas/user-form.schema';
import { toast } from 'sonner';

export default function useUpdateUser(){
    return useMutation({
        mutationFn: ({data, userId}:{userId:string, data:Partial<UserFormSchemaType>}) => updateUser(userId, data),
        onError: (error: any) => {
            console.error("Update user error:", error?.response?.data ?? error.message);
        },

        onSuccess: () => {
              toast.success("User updated successfully");
        },
    })
}

