import ArticleStatsCard from "@/design-system/organisms/ArticleStatsCard";
import axiosServer from "@/utils/axiosServer";

export const ArticleStatsCardServer = async () => {
    const { data } = await axiosServer("api/dashboard/analytics/internal");

    return <ArticleStatsCard
        internalAnalytics={data.internal_analytics}
    />
}