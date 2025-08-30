import axiosServer from "@/utils/axiosServer";
import { ChartAreaInteractive } from "../chart-area-interactive";
import GeneralViewStatsCard from "@/design-system/organisms/GeneralViewStatsCard";
import ActiveUsersByCountry from "@/design-system/organisms/ActiveUsersByCountry";

export const GaStatsServer = async () => {
    const { data } = await axiosServer("api/dashboard/analytics/google");

    return <>
        <div className="px-4 lg:px-6">
            <ChartAreaInteractive chartData={data.google_analytics.visitorDeviceChartData} />
        </div>

        <GeneralViewStatsCard title="Active Users" stats={data.google_analytics.activeUsersStats} />

        <GeneralViewStatsCard title="Page Views" stats={data.google_analytics.pageViewStats} />

        <ActiveUsersByCountry data={data.google_analytics.countryActiveUsers} />

    </>
}