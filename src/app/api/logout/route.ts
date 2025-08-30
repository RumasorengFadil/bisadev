import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const refreshToken = req.headers
      .get("cookie")
      ?.match(/refresh_token=([^;]+)/)?.[1];

    const accessToken = req.headers.get("authorization");

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/logout`,
      null,
      {
        headers: {
          Cookie: `refresh_token=${refreshToken}`,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const nextRes = NextResponse.json({ status: res.status });

    nextRes.cookies.delete("refresh_token");
    nextRes.cookies.delete("verified_at");

    return nextRes;
  } catch (e: unknown) {
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
