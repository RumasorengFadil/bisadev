import { z } from "zod";
import { BlogStatus } from "../enums/blog-status.enum";


export const BlogFormSchema = z.object({
  title: z.string().min(1, "Title is required"),

  category_id: z.string().uuid("Invalid category ID"),

 thumbnail: z.instanceof(File).optional().nullable(),

  excerpt: z.string().min(1, "Excerpt is required"),

  status: z.nativeEnum(BlogStatus),

  content: z.string().min(1, "Content is required"),

  content_JSON: z.string().min(1, "Content JSON is required"),
});

export type BlogFormSchemaType = z.infer<typeof BlogFormSchema>;
