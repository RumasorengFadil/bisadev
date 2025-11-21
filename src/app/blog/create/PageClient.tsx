"use client"

import { SiteHeader } from "@/components/site-header"
import Head from "next/head"
import { useEffect, useState } from "react"
import { Category } from "@/typdata/category"
import axiosClient from "@/utils/axiosClient"
import TailwindAdvancedEditor from "@/components/tailwind/advanced-editor"
import { useRouter } from "nextjs-toploader/app"
import { useForm } from "@/hooks/useForm"
import { AxiosResponse } from "axios"
import { BlogForm } from "@/typdata/blogForm"
import { useUnsavedChanges } from "@/hooks/use-unsaved-changes"

export default function PageClient({ }) {

    const router = useRouter();
    const [categories, setCategories] = useState<Category[]>();
    const { unsaved, setUnsaved } = useUnsavedChanges();

    useEffect(() => {
        axiosClient.get("api/blog/create").then(res => setCategories(res.data.data));
    }, [])

    const { submit, setData, data } = useForm<BlogForm>({
        id: "",
        title: "",
        tags: [],
        status: "draft",
        content: "",
        contentJSON: "",
        thumbnail: "",
        categoryId: "",
        image_url: ""
    })

    const handleChange = <K extends keyof BlogForm>(key: K, value: BlogForm[K]) => {
        setUnsaved(true);
        setData(key, value);
    }

    const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        submit("post", "api/blog/store", {
            onSuccess: (res: AxiosResponse) => {
                router.replace(`/blog/edit/${res.data.data.id}`);
                setUnsaved(false);
            }
        }, { headers: { "Content-Type": "multipart/form-data" } });

    }

    return <>
        {/* Header */}
        <Head>Create Blog</Head>

        <SiteHeader title="Create Blog" />

        {/* Content */}
        <TailwindAdvancedEditor
            onChange={handleChange}
            data={data}
            categories={categories}
            onSave={handleSave}
            unsaved={unsaved}
        />
    </>
}



