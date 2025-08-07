import { fetchWithAuth } from '@/utils/fetchWithAuth';
import { cookies } from 'next/headers';

export default async function DashboardPage() {
    const cookieStore = cookies();
  const token = (await cookieStore).get('refresh_token')?.value;

  if (!token) return null;

    const res = await fetchWithAuth("api/me");
    // await fetch('http://localhost:8000/api/me', {
    //     method:"GET",
    //     headers: {
    //          'Authorization': `Bearer ${token}`,
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //     },
    // });
    // if (!res.ok) {
    //     // Redirect manual jika unauthorized
    //     return <p>Redirecting...</p>;
    // }

    const user = await res.json();
    console.log(user);
    return (
        <div>
            <h1>Halo, {user.name}</h1>
        </div>
    );
}