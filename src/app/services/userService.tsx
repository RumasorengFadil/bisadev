import User from '@/typdata/User';
import api from '@/utils/api';
import { useEffect, useState } from 'react';

export const  userService = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<Boolean | null>(true);
    const [error, setError] = useState<string | null>("");

    useEffect(() => {
        api.get("/api/me")
            .then((res) => {
                setUser(res.data.auth_user);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Gagal ambil user:", err);
                setError("Terjadi Kesalahan, Silakan Hubungi Customer Service Kami")
            });
    }, []);
    return {user, loading, error}
};

export default userService;