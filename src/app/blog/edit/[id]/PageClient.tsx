"use client"

import { SiteHeader } from "@/components/site-header"
import Head from "next/head"
import { Blog } from "@/typdata/blog"
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor"
import { Category } from "@/typdata/category"
import { useEffect, useState } from "react"
import axiosClient from "@/utils/axiosClient"
import { useParams } from "next/navigation"

export default function PageClient() {
    const {id} = useParams();

    const [data, setData] = useState<{
        categories: Category[],
        blog: Blog
    }>();

    useEffect(() => {
        axiosClient(`api/blog/edit/${id}`).then(res => {
            setData(res.data.data);
        });
    }, [id])

    return <>
        {/* Header */}
        <Head>Edit Blog</Head>

        <SiteHeader title="Edit Blog" />
        {/* Content */}
        <div className="mx-auto">
                <SimpleEditor key={data?.blog?.id ?? "empty"} apiEndpoint={`/api/blog/update/${id}`} categories={data?.categories} blog={data?.blog} />
        </div>
    </>
}



