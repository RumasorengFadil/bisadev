"use client"

import Head from "next/head"
import AuthorRegisterNotice from "@/design-system/organisms/AuthorRegisterNotice"
import { useLogout } from "@/hooks/use-logout"
import { useAuthStore } from "@/store/useAuthStore";
import { useForm } from "@/hooks/useForm";
import { useEffect } from "react";
import { useRouter } from "nextjs-toploader/app";

export default function PageClient({ }) {
    const router = useRouter();
    const handleLogout = useLogout();
    const { submit } = useForm({});
    const { auth } = useAuthStore();

    useEffect(() => {
        if (!auth?.access_token) return;
        submit("get", "/api/verified", {
            onSuccess: (res) => {
                if (res.data.data.verified) {
                    router.replace("/dashboard");
                }
            }
        }, {
            headers: {
                Authorization: `Bearer ${auth?.access_token}`
            },
            withCredentials:true
        });
    }, [auth?.access_token]);

    return <>
        {/* Header */}
        <Head>Manage Blog</Head>

        {/* Content */}
        <AuthorRegisterNotice onLogout={handleLogout} />
    </>
}



