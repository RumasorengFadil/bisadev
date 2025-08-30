import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function AuthorRegisterNotice({ onLogout }: { onLogout: (e: React.MouseEvent<HTMLDivElement>) => void }) {
    return (
        <CardContent className="space-y-4 max-w-md w-full text-center px-6">
            <h1 className="text-2xl font-semibold text-primary">Terima Kasih!</h1>
            <p className="text-muted-foreground">
                Pendaftaran Anda sebagai Author telah berhasil. Data Anda akan segera diproses oleh operator kami.
            </p>
            <p className="text-sm text-muted-foreground italic">
                Silakan cek email secara berkala untuk status akun Anda.
            </p>
            <Button asChild className="mt-4 block">
                <Link href="/">Kembali ke Beranda</Link>
            </Button>
            <div
                onClick={onLogout}
                className="underline cursor-pointer text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Log Out
            </div>
        </CardContent>
    );
}
