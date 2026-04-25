import { UserRole } from "@/enums/user.role.enum"

// features/auth/types/index.ts
export interface User {
    id: string
    name: string
    email: string
    password: string
    provider: string
    providerId: string | null
    isEmailVerified: boolean
    verificationTokens: []
}
export interface UserResponse {
  id: string;
  name: string;
  email: string;

  avatar: string | null;
  avatar_url: string | null;
  bio: string | null;
  company: string | null;
  job: string | null;
  telp_num: string | null;
  total_employee: number | null;

  provider: 'google' | 'local' | string;
  provider_id: string | null;

  role: UserRole;

  is_email_verified: boolean;

  refresh_token_hash: string | null;

  created_at: string; // ISO Date string
  updated_at: string; // ISO Date string
}

export interface RegisterForm {
  email: string
  name: string
  password:string
  confirmPassword:string
}

export interface AuthResponse {
  user: UserResponse
  accessToken: string
  refreshToken: string
  expiresIn: number
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials extends LoginCredentials {
  name: string
  confirmPassword: string
}

export interface TokenPayload {
  userId: string
  email: string
  role: string
  exp: number
}

export interface RefreshTokenResponse {
  accessToken: string
  refreshToken: string
  expiresIn: number
}

export type Session = {
  user: {
    id: string;
    email: string;
    role: "admin" | "instructor" | "student";
  };
};
