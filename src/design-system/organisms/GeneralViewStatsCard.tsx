import { Card, CardHeader, CardFooter, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { PageViewStats } from "@/typdata/pageViewStats";

export default function GeneralViewStatsCard({ stats, title }: { stats: PageViewStats | undefined, title: string }) {
    return (
        <div className="px-4 lg:px-6">
            <Card className="@container/card">
                <CardHeader className="relative">
                    <CardDescription>{title}</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                        {stats?.current.toLocaleString()}
                    </CardTitle>
                    <div className="absolute right-4 top-4">
                        <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                            {stats?.trend === "down" ? <TrendingDownIcon className="size-3" /> : <TrendingUpIcon className="size-3" />}

                            {stats?.change}%
                        </Badge>
                    </div>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        {stats?.trend === "down" ? "Down" : "Up"} {Math.abs(stats?.change ?? 0)}% this period
                    </div>
                    <div className="text-muted-foreground">
                        Compared to previous 7 days
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
