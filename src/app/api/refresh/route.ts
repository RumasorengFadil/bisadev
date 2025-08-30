import { NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

export async function POST(req: Request) {
  try {
    const refreshToken = req.headers
      .get("cookie")
      ?.match(/refresh_token=([^;]+)/)?.[1];

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/refresh`,
      null,
      {
        headers: {
          Cookie: `refresh_token=${refreshToken}`,
        },
      }
    );
    const nextRes = NextResponse.json({
      success: true,
      access_token: res.data.access_token,
      refresh_token: null,
      expires_in: res.data.expires_in,
      user: res.data.user,
    });

    // Set Access Token ke cookie
    nextRes.cookies.set("refresh_token", res.data.refresh_token, {
      httpOnly: true,
      secure: process.env.NEXT_PUBLIC_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge:
        24 *
        60 *
        60 *
        Number(process.env.NEXT_PUBLIC_REFRESH_TOKEN_EXPRIRES_IN),
    });

    return nextRes;
  } catch (e) {
    const error = e as AxiosError;

    console.error("ERROR:", error);

    return NextResponse.json(
      {
        ...(typeof error.response?.data === "object" &&
        error.response?.data !== null
          ? error.response.data
          : { message: "Failed to refresh token!" }),
      },
      { status: error.status }
    );
  }
}
