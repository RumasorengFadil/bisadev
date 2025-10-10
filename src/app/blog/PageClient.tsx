"use client"

import { SiteHeader } from "@/components/site-header"
import Head from "next/head"
import { Blog } from "@/typdata/blog"
import ButtonLink from "@/design-system/components/ButtonLink"
import BlogTableUI from "@/design-system/organisms/BlogTable"
import { PlusCircle } from "lucide-react"
import { Pagination } from "@/typdata/pagination"
import { useEffect, useState } from "react"
import axiosClient from "@/utils/axiosClient"
import { useSearchParams } from "next/navigation"
import { AxiosResponse } from "axios"

export default function PageClient({ }) {
    const [pagination, setPagination] = useState<Pagination<Blog> | null>(null);
    const params = useSearchParams();

    useEffect(() => {
        axiosClient(`api/blog${params ? `?${params.toString()}` : ""}`).then(res => {
            setPagination(res.data.data);
        });
    }, [params]);

    return <>
        {/* Header */}
        <Head>Manage Blog</Head>

        <SiteHeader title="Manage Blog" />

        {/* Content */}
        <ButtonLink
            href={"/blog/create"}
            icon={PlusCircle}
            title="Create Blog"
        />

        {!pagination ? (<div>Loading...</div>) :
            <BlogTableUI
                onDelete={(res) => {
                    const axRes = res as AxiosResponse;
                    setPagination(axRes.data.pagination);
                }}
                pagination={pagination}
                searchDefValue={params.get("search")}
            />
        }
    </>
}



