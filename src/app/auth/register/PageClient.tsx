"use client"

import Head from "next/head"
import { FormEventHandler } from "react"
import { useForm } from "@/hooks/useForm"
import { useRouter } from "nextjs-toploader/app"
import { useAuthStore } from "@/store/useAuthStore"
import { RegisterForm } from "@/design-system/organisms/RegisterForm"
import { RegisterForm as RegisterTypeForm } from "@/typdata/registerForm";

export default function PageClient({ }) {
    const { setAuth } = useAuthStore();

    const router = useRouter();
    const { data, setData, submit, loading, reset } = useForm<RegisterTypeForm>({
        name: "",
        email: "",
        password: "",
        linkedin: "",
        confirmPassword: "",
        image: "",
    });

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        submit("post", "api/register", {
            onSuccess: (res) => {
                setAuth(res.data.data);
                router.replace("/dashboard");
                reset();
            },
            onError: () => {
                reset("password", "confirmPassword");
            }
        }, { withCredentials: true });
    };

    return <>
        {/* Header */}
        <Head>Manage Blog</Head>

        {/* Content */}
        <RegisterForm form={data} onSubmit={onSubmit} loading={loading} setData={setData} />
    </>
}



