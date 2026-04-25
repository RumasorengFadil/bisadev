import { api } from "@/lib/api";
import { LoginCredentials, RegisterForm } from "./types";

export async function registerUser(user: RegisterForm) {
  const res = await api.post("/auth/register", user, { xcsrf: false });

  return res.data;
}

export async function loginUser(credentials: LoginCredentials) {
  const res = await api.post("/auth/login", credentials, { skipAuthRefresh: true, xcsrf: false });

  return res.data;
}

export async function refreshToken() {
  const res = await api.post("/auth/refresh");

  return res.data;
}

export async function loginGoogle() {
  const res = await api.get("/auth/google", { xcsrf: false });

  return res.data;
}

export async function me() {
  const res = await api.get("/auth/me");

  return res.data;
}

export async function verifyEmail(token: string) {
  const res = await api.get(`/auth/verify/?token=${token}`);

  return res.data;
}

export async function activateAccount(token: string, data: { password: string }) {
  const res = await api.post(`/auth/activate-account?token=${token}`, data);

  return res.data;
}
export async function resetPassword(token: string, data: { password: string }) {
  const res = await api.post(`/auth/reset-password?token=${token}`, data);

  return res.data;
}
export async function resendEmailVerification(data: { email: string }) {
  const res = await api.post(`/auth/resend-verification`, data);

  return res.data;
}

export async function forgotPassword(data: { email: string }) {
  const res = await api.post(`/auth/forgot-password`, data);

  return res.data;
}

export async function logout() {
  const res = await api.post(`/auth/logout`);

  return res.data;
}
