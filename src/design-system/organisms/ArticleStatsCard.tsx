import { Card, CardContent } from "@/components/ui/card";
import { InternalAnalytics } from "@/typdata/internalAnalytics";
import { CalendarDays, FileText, FileClock, CheckCircle2 } from "lucide-react";

export default function ArticleStatsCard({
  internalAnalytics
}: { internalAnalytics: InternalAnalytics | null }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-6">
      <Card>
        <CardContent className="flex items-center gap-4 py-6">
          <FileText className="w-8 h-8 text-chart-1" />
          <div>
            <p className="text-sm text-muted-foreground">Total Artikel</p>
            <p className="text-2xl font-bold">{internalAnalytics?.total}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center gap-4 py-6">
          <FileClock className="w-8 h-8 text-chart-2" />
          <div>
            <p className="text-sm text-muted-foreground">Jumlah Draft</p>
            <p className="text-2xl font-bold">{internalAnalytics?.draft}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center gap-4 py-6">
          <CheckCircle2 className="w-8 h-8 text-chart-3" />
          <div>
            <p className="text-sm text-muted-foreground">Artikel Terbit</p>
            <p className="text-2xl font-bold">{internalAnalytics?.published}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center gap-4 py-6">
          <CalendarDays className="w-8 h-8 text-chart-4" />
          <div>
            <p className="text-sm text-muted-foreground">Terakhir Update</p>
            <p className="text-lg font-medium">
              {internalAnalytics?.last_update ? new Date(internalAnalytics?.last_update ?? "").toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }) : "-"}

            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
