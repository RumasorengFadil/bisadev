import { UserRole } from "@/enums/user.role.enum";
import { z } from "zod";

export const UserFormSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters").max(120, "Name must not exceed 120 characters"),

  email: z.string().email("Invalid email address"),

  role: z.nativeEnum(UserRole, {
    errorMap: () => ({ message: "Invalid role value" }),
  }),

  telp_num: z.string().max(20, "Phone number must not exceed 20 characters").optional(),

  company: z.string().max(120, "Company name must not exceed 120 characters").optional(),

  job: z.string().max(120, "Job title must not exceed 120 characters").optional(),

  total_employee: z.string().max(50, "Total employee must not exceed 50 characters").optional(),

  expertise: z.string().optional(),

  avatar: z.instanceof(File).optional().nullable(),

  bio: z.string().optional(),
});

export type UserFormSchemaType = z.infer<typeof UserFormSchema>;
