import { UserRole } from "@/enums/user.role.enum";
import { UserStatus } from "@/enums/user.status.enum";

export interface UserResponse {
  id: string;
  name: string;
  email: string;

  telp_num: string | null;
  job: string | null;

  role: UserRole;
  status: UserStatus;

  avatar: string | null;
  avatar_url: string | null;

  company: string | null;
  bio: string | null;
  expertise: string | null;

  total_employee : string | null;
  created_at: string;  
  updated_at: string;  
}
