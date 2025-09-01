import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const accessToken = req.headers.get("authorization");

    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/verified`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    
    const nextRes = NextResponse.json({ verified: res.data.data.verified });

    nextRes.cookies.set("verified_at", res.data.data.verified, {
      httpOnly: true,
      secure: process.env.NEXT_PUBLIC_ENV === "production",
      sameSite: "strict",
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
          : { message: "Failed to verified account!" }),
      },
      { status: error.status }
    );
  }
}
