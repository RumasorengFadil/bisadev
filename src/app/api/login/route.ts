import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = res.data.data;

    const nextRes = NextResponse.json({ ...data, refresh_token: null });

    nextRes.cookies.set("refresh_token", data.refresh_token, {
      httpOnly: true,
      secure: process.env.NEXT_PUBLIC_ENV === "production",
      sameSite: "none",
      domain:".bbyts.com",
      path: "/",
      maxAge: 24 * 60 * 60 * Number(process.env.REFRESH_TOKEN_EXPRIRES_IN),
    });

    nextRes.cookies.set("verified_at", data.user.email_verified_at, {
      httpOnly: true,
      secure: process.env.NEXT_PUBLIC_ENV === "production",
      sameSite: "none",
      domain:".bbyts.com",
      path: "/",
      maxAge: 24 * 60 * 60 * Number(process.env.REFRESH_TOKEN_EXPRIRES_IN),
    });

    return nextRes;
  } catch (e: unknown) {
    const error = e as AxiosError;

    console.error("ERROR:", error);

    return NextResponse.json(
      {
        ...(typeof error.response?.data === "object" &&
        error.response?.data !== null
          ? error.response.data
          : { message: "Failed to login!" }),
      },
      { status: error.status }
    );
  }
}
