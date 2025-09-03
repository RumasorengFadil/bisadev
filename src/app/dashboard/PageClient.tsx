"use client"

import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { SiteHeader } from "@/components/site-header"
import Head from "next/head"
import GeneralViewStatsCard from "@/design-system/organisms/GeneralViewStatsCard"
import ArticleStatsCard from "@/design-system/organisms/ArticleStatsCard"
import LatestArticlesTable from "@/design-system/organisms/LatestArticlesTable"
import ActiveUsersByCountry from "@/design-system/organisms/ActiveUsersByCountry"
import { Blog } from "@/typdata/blog"
import { InternalAnalytics } from "@/typdata/internalAnalytics"
import { useEffect, useState } from "react"
import axiosClient from "@/utils/axiosClient"
import { PageViewStats } from "@/typdata/pageViewStats"
import { CountryUser } from "@/typdata/countryUser"
import { VisitorDeviceChartData } from "@/typdata/visitorDeviceChartData "
import { useAuthStore } from "@/store/useAuthStore"

export default function PageClient({ }) {
    const [internalAnalytics, setInternalAnalytics] = useState<InternalAnalytics | null>(null);
    const [blogs, setInternalBlogs] = useState<Blog[] | null>(null);
    const { auth } = useAuthStore();

    const [gaStats, setGaStats] = useState<{
        activeUsersStats: PageViewStats,
        pageViewStats: PageViewStats,
        countryActiveUsers: CountryUser[],
        visitorDeviceChartData: VisitorDeviceChartData[],
    } | null>(null);

    useEffect(() => {
        axiosClient("api/dashboard/analytics/internal").then(res => {
            setInternalAnalytics(res.data.internal_analytics);
        });
        axiosClient("api/dashboard/blogs").then(res => {
            setInternalBlogs(res.data.blogs);
        });
    }, []);

    useEffect(() => {
        if (auth?.user?.role === "admin") {
            axiosClient("api/dashboard/analytics/google").then(res => {
                setGaStats(res.data.google_analytics);
            });
        }
    }, [auth?.user])

    return <>
        {/* Header */}
        <Head>Dashboard</Head>

        <SiteHeader title="Dashboard" />

        {/* Content */}
        {!internalAnalytics ? (<div>Loading...</div>) :
            <ArticleStatsCard internalAnalytics={internalAnalytics} />
        }
        {!blogs ? (<div>Loading...</div>) :
            <LatestArticlesTable blogs={blogs} />
        }
        {auth?.user?.role === "admin" ? !gaStats ? (<div>Loading...</div>) :
            <>
                <div className="px-4 lg:px-6">
                    <ChartAreaInteractive chartData={(gaStats?.visitorDeviceChartData)} />
                </div>

                <GeneralViewStatsCard title="Active Users" stats={gaStats?.activeUsersStats} />

                <GeneralViewStatsCard title="Page Views" stats={gaStats?.pageViewStats} />

                <ActiveUsersByCountry data={gaStats?.countryActiveUsers} />

            </> : ""
        }

    </>
}



