import { verifyRefreshToken } from "@/utils/verifyRefreshToken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware untuk autentikasi JWT dengan refresh token (HttpOnly cookie)
 */
export async function authMiddleware(req: NextRequest) {
  const refreshToken = req.cookies.get("refresh_token")?.value;

  if (!refreshToken) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  const isValid = await verifyRefreshToken(refreshToken);
  if (!isValid) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}
