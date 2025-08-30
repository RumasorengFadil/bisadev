
export async function POST() {
//   const accessToken = (await cookies()).get("access_token")?.value;
//   const refreshToken = (await cookies()).get("refresh_token")?.value;

//   try {
//     // Request ke Laravel dengan access token
//     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/auth`, {
//       headers: { Authorization: `Bearer ${accessToken}` },
//     });

//     return NextResponse.json(res.data);
//   } catch (err: any) {
//     // Jika expired dan ada refresh token
//     if (err.response?.status === 401 && refreshToken) {
//       try {
//         // Refresh token
//         const refRes = await axios.post(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/refresh`,
//           null,
//           {
//             headers: {
//               Cookie: `refresh_token=${refreshToken}`,
//             },
//           }
//         );

//         const newAccessToken = refRes.data.access_token;
//         const newRefreshToken = refRes.data.refresh_token;

//         // Request ulang ke /auth pakai token baru
//         const res = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/auth`,
//           {
//             headers: { Authorization: `Bearer ${newAccessToken}` },
//           }
//         );

//         const nextRes = NextResponse.json(res.data);

//         // Set Access + Refresh Token baru ke cookie
//         nextRes.cookies
//           .set("access_token", newAccessToken, {
//             httpOnly: true,
//             secure: process.env.NEXT_PUBLIC_ENV === "production",
//             sameSite: "strict",
//             path: "/",
//             maxAge: refRes.data.expires_in, // dari API
//           })
//           .set("refresh_token", newRefreshToken, {
//             httpOnly: true,
//             secure: process.env.NEXT_PUBLIC_ENV === "production",
//             sameSite: "strict",
//             path: "/",
//             maxAge:
//               24 *
//               60 *
//               60 *
//               Number(process.env.NEXT_PUBLIC_REFRESH_TOKEN_EXPRIRES_IN),
//           });

//         return nextRes;
//       } catch (refreshErr) {
//         console.error("Refresh gagal:", refreshErr);
//         return redirect("/auth/login"); // HARUS return
//       }
//     }

//     // Kalau tidak ada refresh token → redirect
//     return redirect("/auth/login");
//   }
}
