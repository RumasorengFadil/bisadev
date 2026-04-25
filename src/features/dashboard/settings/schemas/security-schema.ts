import { UserRole } from "@/enums/user.role.enum";
import { z } from "zod";

export const securitySchema = z
  .object({
    current_password: z.string().min(8),
    new_password: z.string().min(8),
    confirm_password: z.string().min(8),
  });

export type SecurityFormValuesType = z.infer<typeof securitySchema>;
