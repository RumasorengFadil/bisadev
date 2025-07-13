import User from '@/typdata/User';
import api from '@/utils/api';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
export const useAuth = ({ protect = false }: { protect: boolean }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean | null>(true);
    const [error, setError] = useState<string | null>("");
    const router = useRouter();
    
    useEffect(() => {
        api.get("/api/me")
            .then((res) => {
                setUser(res.data.auth_user);
            })
            .catch((err) => {
                if (protect) {
                    router.push('/auth/login');

                    return;
                }
                console.error("Gagal ambil user:", err);
                setError("Gagal mengambil user, Silakan Hubungi Customer Service Kami")
            }).finally(() => {
                setLoading(false);
            });
    }, [protect, router]);
    return { user, loading, error }
};

export default useAuth;