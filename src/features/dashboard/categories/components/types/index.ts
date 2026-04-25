import { CategoryType } from "../../enums/category-type.enum";

export interface CategoryResponse {
  id: string;
  name: string;
  description: string;
  type: CategoryType;
  created_at: string;
  updated_at: string;
}