import { Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Construction() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground px-4">

            {/* Icon */}
            <div className="mb-6 rounded-2xl bg-primary/10 p-6">
                <Wrench className="h-12 w-12 text-primary" />
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
                Halaman Sedang Dalam Perbaikan
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-center max-w-md mb-6">
                Kami sedang melakukan peningkatan sistem untuk memberikan pengalaman yang lebih baik.
                Silakan kembali beberapa saat lagi.
            </p>

            {/* Action */}
            <div className="flex gap-3">
                <Button onClick={() => window.location.reload()}>
                    Refresh
                </Button>

                <Button variant="outline" onClick={() => window.history.back()}>
                    Kembali
                </Button>
            </div>

            {/* Footer kecil */}
            <p className="text-xs text-muted-foreground mt-10">
                © {new Date().getFullYear()} bbyts
            </p>
        </div>
    )
}