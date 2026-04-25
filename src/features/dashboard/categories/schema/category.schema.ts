import z from "zod";
import { CategoryType } from "../enums/category-type.enum";

export const CategoryFormSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
  description: z.string().optional(),
  type: z.nativeEnum(CategoryType),
});

export type CategoryFormSchemaType = z.infer<typeof CategoryFormSchema>;
