import User from '@/typdata/User';
import api from '@/utils/api';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
export const userAuth = ({ protect = false }: { protect: Boolean }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<Boolean | null>(true);
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
    }, []);
    return { user, loading, error }
};

export default userAuth;