import { UserResponse } from "@/types/user-response.type";
import { BlogStatus } from "../enums/blog-status.enum";
import { CategoryResponse } from "../../categories/components/types";

export interface BlogResponse {
  id: string;
  title: string;
  slug: string;

  thumbnail_url?: string | null;

  excerpt: string;
  content: string;
  content_JSON: string;

  status: BlogStatus;

  category_id?: string;
  author_id: string;

  created_at: string; // ISO date
  updated_at: string;

  // relations (optional tergantung query)
  author?: UserResponse;
  category?: CategoryResponse;
}
export interface BlogStatsRes {
  publishedCount: number;
  draftedCount: number;
  totalBlogPosts: number;
}
