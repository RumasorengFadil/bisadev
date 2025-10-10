"use client"

import { SiteHeader } from "@/components/site-header"
import Head from "next/head"
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor"
import { useEffect, useState } from "react"
import { Category } from "@/typdata/category"
import axiosClient from "@/utils/axiosClient"

export default function PageClient({ }) {

    const [categories, setCategories] = useState<Category[]>();

    useEffect(() => {
        axiosClient.get("api/blog/create").then(res => setCategories(res.data.data));
    }, []);

    return <>
        {/* Header */}
        <Head>Create Blog</Head>

        <SiteHeader title="Create Blog" />

        {/* Content */}
        <div className="mx-auto">
            <SimpleEditor apiEndpoint="/api/blog/store" categories={categories} />
        </div>
    </>
}



