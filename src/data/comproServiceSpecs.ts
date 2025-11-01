interface ServiceSpec {
    name: string;
    description: string;
    basic: boolean | string | number;
    pro: boolean | string | number;
    business: boolean | string | number;
}

export const comproServiceSpecs: ServiceSpec[] = [
    {
        name: "Pembuatan Halaman Website",
        description: "Jumlah halaman website yang akan dibuat.",
        basic: "5 Halaman",
        pro: "10 Halaman",
        business: "15 Halaman",
    },
    {
        name: "Waktu Pengerjaan",
        description: "Estimasi lama proses pembuatan website.",
        basic: "10 - 20 Hari Kerja",
        pro: "10 - 20 Hari Kerja",
        business: "10 - 20 Hari Kerja",
    },
    {
        name: "Gratis Domain",
        description: "Domain gratis untuk tahun pertama.",
        basic: true,
        pro: true,
        business: true,
    },
    {
        name: "Gratis Hosting",
        description: "Hosting gratis untuk tahun pertama.",
        basic: false,
        pro: true,
        business: true,
    },
    {
        name: "Gratis Email Bisnis",
        description: "Email profesional dengan nama domain Anda.",
        basic: true,
        pro: true,
        business: true,
    },
    {
        name: "Gratis SSL",
        description: "Keamanan HTTPS untuk melindungi website.",
        basic: true,
        pro: true,
        business: true,
    },
    {
        name: "Halaman Tambahan",
        description: "Biaya untuk penambahan halaman baru.",
        basic: "Rp. 150.000 / Halaman",
        pro: "Rp. 150.000 / Halaman",
        business: "Rp. 150.000 / Halaman",
    },
    {
        name: "SEO Basic",
        description: "Optimasi dasar agar website mudah ditemukan di Google.",
        basic: true,
        pro: true,
        business: true,
    },
    {
        name: "Admin Panel",
        description: "Kelola konten website sendiri melalui dashboard.",
        basic: false,
        pro: true,
        business: true,
    },
    {
        name: "Website Builder",
        description: "Edit konten website tanpa perlu coding.",
        basic: false,
        pro: true,
        business: true,
    },
    {
        name: "24/7 Support",
        description: "Bantuan teknis untuk kendala terkait website.",
        basic: "Chat",
        pro: "Chat",
        business: "Chat",
    },
];