"use client"

import { SiteHeader } from "@/components/site-header"
import Head from "next/head"
import ButtonLink from "@/design-system/components/ButtonLink"
import { PlusCircle } from "lucide-react"
import { Pagination } from "@/typdata/pagination"
import { useEffect, useState } from "react"
import axiosClient from "@/utils/axiosClient"
import { useSearchParams } from "next/navigation"
import ManageUsersTable from "@/design-system/organisms/ManageUserTable"
import { User } from "@/typdata/user"

export default function PageClient({ }) {
    const [pagination, setPagination] = useState<Pagination<User> | null>(null);
    const params = useSearchParams();

    useEffect(() => {
        axiosClient(`api/user${params ? `?${params.toString()}` : ""}`).then(res => {
            setPagination(res.data.data);
        });
    }, [params]);

    return <>
        {/* Header */}
        <Head>Manage Users</Head>

        <SiteHeader title="Manage Users" />

        {/* Content */}
        <ButtonLink
            href={"/blog/create"}
            icon={PlusCircle}
            title="Create Blog"
        />

        {!pagination ? (<div>Loading...</div>) :
            <ManageUsersTable
                searchDefValue={params.get("search")}
                pagination={pagination}
                onApprove={(user) => {
                    axiosClient.post(`/api/user/approve/${user.id}`).then((res) => {
                        setPagination({
                            ...pagination,
                            data: pagination.data.map(user => {
                                return user.id === res.data.data.id ? res.data.data : user
                            })
                        })
                    });
                }}
                onDelete={(user) => {
                    axiosClient.delete(`/api/user/destroy/${user.id}`).then(res => {
                        setPagination(res.data.pagination);
                    })
                }}
                onBulkDelete={(ids) => {
                    axiosClient.delete("/api/user/destroys", { data: { ids: ids } }).then(res => {
                        setPagination(res.data.pagination);
                    })
                }}
            />}
    </>
}



