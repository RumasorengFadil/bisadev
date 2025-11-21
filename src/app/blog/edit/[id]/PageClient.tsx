"use client"

import { SiteHeader } from "@/components/site-header"
import Head from "next/head"
import { Blog } from "@/typdata/blog"
import { Category } from "@/typdata/category"
import { useEffect, useState } from "react"
import axiosClient from "@/utils/axiosClient"
import { useParams, useRouter } from "next/navigation"
import TailwindAdvancedEditor from "@/components/tailwind/advanced-editor"
import { AxiosResponse } from "axios"
import { BlogForm } from "@/typdata/blogForm"
import { BlogTag } from "@/typdata/blogTag"
import { useUnsavedChanges } from "@/hooks/use-unsaved-changes"
import { useForm } from "@/hooks/useForm"

export default function PageClient() {
    const router = useRouter();
    const [categories, setCategories] = useState<Category[]>();
    const { unsaved, setUnsaved } = useUnsavedChanges();
    const { id } = useParams();


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

        submit("post", `/api/blog/update/${id}`, {
            onSuccess: (res: AxiosResponse) => {
                router.replace(`/blog/edit/${res.data.data.id}`);
                setUnsaved(false);
            }
        }, { headers: { "Content-Type": "multipart/form-data" } });

    }

    const handleDelete = (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (confirm("Are you sure you want to delete selected blogs?")) {
            submit("delete", `/api/blog/destroy/${id}`, {
                onSuccess: () => {
                    router.replace(`/admin/manage-blog`);
                }
            });
        }
    }
    const handlePreview = (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        router.push(`/admin/manage-blog/preview/${id}`);
    }
    useEffect(() => {
        axiosClient(`api/blog/edit/${id}`).then(res => {
            const blog = res.data.data.blog as Blog;
            const categories = res.data.data.categories;

            setData("id", blog.id);
            setData("title", blog.title);
            setData("tags", blog?.tags.map((tag: BlogTag) => tag.tag.name) || []);
            setData("status", blog.status);
            setData("content", blog.content);
            setData("contentJSON", blog.contentJSON);
            setData("categoryId", blog.category_id);
            setData("image_url", blog?.image_url ? `${process.env.NEXT_PUBLIC_API_URL}${blog?.image_url}` : "");
            setCategories(categories);
        });
    }, [id])

    return <>
        {/* Header */}
        <Head>Edit Blog</Head>
{console.log(data)}

        <SiteHeader title="Edit Blog" />

        {/* Content */}
        {data.content && <TailwindAdvancedEditor
            onChange={handleChange}
            data={data}
            categories={categories}
            onSave={handleSave}
            unsaved={unsaved}
            onDelete={handleDelete}
            onPreview={handlePreview}
        />}
    </>
}



