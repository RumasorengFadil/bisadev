"use client"

import { SiteHeader } from "@/components/site-header"
import Head from "next/head"
import { useEffect, useState } from "react"
import axiosClient from "@/utils/axiosClient"
import { SettingsTabs } from "@/design-system/organisms/SettingsTabs"
import { useImagePreview } from "@/hooks/useImagePreview"
import { Settings } from "@/typdata/settings"


export default function PageClient({ }) {
    const [form, setForm] = useState<Settings>({
        title: "",
        description: "",
        metaTitle: "",
        metaDescription: "",
        commentsEnabled:false,
        theme: "",
        logo: "",
        logoUrl: "",
        ogImage: "",
        ogImageUrl: "",
    });

    useEffect(() => {
        axiosClient.get("/api/settings").then(res => {
            setForm({
                ...form,
                title: res.data.data.title || "",
                description: res.data.data.description || "",
                metaTitle: res.data.data.metaTitle || "",
                metaDescription: res.data.data.metaDescription || "",
                commentsEnabled: res.data.data.commentsEnabled || false,
                theme: res.data.data.theme || "",
                logoUrl: res.data.logo || "",
                ogImageUrl: res.data.ogImage || "", 
                logo: "",
                ogImage: "", 
            });

            console.log(res);
        });
    }, [form]);


    const { handleFileChange } = useImagePreview();

    return <>
        {/* Header */}
        <Head>Settings</Head>

        <SiteHeader title="Settings" />

        {/* Content */}
        {!form ? <div>Loading...</div> : <SettingsTabs
            form={form}
            handleChange={(key: string, value: string | boolean) => {
                setForm({ ...form, [key]: value });
            }}
            handleFileChange={(e, key) => {
                handleFileChange(e, (file) => {
                    setForm({ ...form, [key]: file });

                })
            }}
            onSubmit={() => {
                axiosClient.post("/api/settings/store", form, { headers: { "Content-Type": "multipart/form-data" } }).then(res => {
                    console.log(res);
                    // setSettings(res.data.data);
                });
            }}

        />}

    </>
}



