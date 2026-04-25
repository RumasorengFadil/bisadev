import axios from "axios";
import { cookies } from "next/headers";

export async function getUser() {
  try {
    const cookieHeader = (await cookies()).getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");

    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
      {
        headers: {
          Cookie: cookieHeader,
        },
        withCredentials: true,
      }
    );

    return res.data;
  } catch (err) {
    return null;
  }
}