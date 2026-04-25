import { Session } from "@/features/auth/types";
import { cookies } from "next/headers";

export async function getSession(): Promise<Session | null> {
  const cookieStore = cookies();
  const token = (await cookieStore).get("access_token")?.value;

  if (!token) return null;

  try {
    // OPTION 1: decode JWT (TANPA verify)
    const payload = JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString()
    );

    return {
      user: {
        id: payload.sub,
        email: payload.email,
        role: payload.role,
      },
    };
  } catch {
    return null;
  }
}
