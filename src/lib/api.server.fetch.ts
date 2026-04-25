import { cookies } from "next/headers";

export async function apiServerFetch<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
    const cookieStore = await cookies();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Cookie: cookieStore.toString(),
      },
      cache: "no-store",
    });

    if (!response.ok) {
      const errorBody = await response.text();
      
      throw new Error(
        `Request failed: ${response.status} - ${errorBody}`
      );
    }
    
    return await response.json();
}