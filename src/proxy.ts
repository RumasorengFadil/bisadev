import { NextResponse, NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/admin", "/my-learning"];

const authRoutes = ["/login", "/register"];
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("access_token")?.value;
  const refreshToken = request.cookies.get("refresh_token")?.value;

  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));
  
  const isAuthPage = authRoutes.includes(pathname);
  
  if (!accessToken && refreshToken) return NextResponse.next();
  
  // If you are not logged in and access a protected page → redirect to login
  if (!accessToken && isProtected) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If you are already logged in but open the login page → redirect to the dashboard
  if (accessToken && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!accessToken && pathname.startsWith("/verify-email")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/login", "/register"],
};
