import LatestArticlesTable from "@/design-system/organisms/LatestArticlesTable";
import axiosServer from "@/utils/axiosServer";

export const LatestArticlesTableServer = async () => {
    const { data } = await axiosServer("api/dashboard/blogs");

    return <LatestArticlesTable
        blogs={data.blogs}
    />
}