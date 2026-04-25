import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateUserPassword, updateUserProfile } from "../api";
import { SecurityFormValuesType } from "../schemas/security-schema";

export default function useUpdateUserPassword() {
  return useMutation({
    mutationFn: (data: Partial<SecurityFormValuesType>) => updateUserPassword(data),
    onError: (error: any) => {
      console.error("Update user password error:", error?.response?.data ?? error.message);
    },

    onSuccess: () => {
      toast.success("User password updated successfully", {
        description: "Your changes have been saved and are now live.",
      });
    },
  });
}
