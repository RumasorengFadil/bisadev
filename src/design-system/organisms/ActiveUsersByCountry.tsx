import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CountryUser } from "@/typdata/countryUser";


export default function ActiveUsersByCountry({ data }: { data: Array<CountryUser> | undefined | null }) {
    // Urutkan data secara descending dan ambil hanya 10 teratas
    const topCountries = data && [...data]
        .sort((a: CountryUser, b: CountryUser) => b.activeUsers - a.activeUsers)
        .slice(0, 10);

    // Cari nilai maksimum untuk normalisasi bar
    const maxUsers = topCountries && Math.max(...topCountries.map((c) => c.activeUsers));

    return (
        <div className="px-4 lg:px-6">
            <Card>
                <CardHeader>
                    <CardTitle>🌍 Aktifitas Berdasarkan Negara (Top 10)</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {topCountries?.map((item, index) => {
                            const barWidth = (item.activeUsers / (maxUsers || 0)) * 100;

                            return (
                                <div key={index}>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium basis-1/2">
                                            {item.country}
                                            <div className="h-1 bg-blue-500 rounded mt-1" style={{ width: `${barWidth}%` }} />
                                        </span>
                                        <span className="text-muted-foreground">{item.activeUsers}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}
