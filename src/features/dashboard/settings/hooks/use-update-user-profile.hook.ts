import { UserFormValuesType } from "@/features/dashboard/settings/schemas/user.schema";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateUserProfile } from "../api";

export default function useUpdateUserProfile() {
  return useMutation({
    mutationFn: (data: Partial<UserFormValuesType>) => updateUserProfile(data),
    onError: (error: any) => {
      console.error("Update user profile error:", error?.response?.data ?? error.message);
    },

    onSuccess: () => {
      toast.success("User profile updated successfully", {
        description: "Your changes have been saved and are now live.",
      });
    },
  });
}
