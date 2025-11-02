import { Service } from "@/typdata/service";

export const services: Service[] = [
  {
    id:"landpageServices",
    heading: {
      title: "Jasa Pembuatan Website Landing Page",
      desc: "Tingkatkan kepercayaan dan penjualan bisnis Anda dengan Landing Page yang murah, profesional, dan SEO friendly. Dirancang dengan tampilan modern, copywriting yang meyakinkan, serta struktur SEO yang kuat agar mudah ditemukan di Google dan mampu menghasilkan konversi lebih tinggi.",
    },
    serviceSpecs: [
      {
        name: "Pembuatan Halaman Website",
        description: "Jumlah halaman website yang akan dibuat.",
        basic: "1 Halaman",
        pro: "1 Halaman",
        business: "1 Halaman",
      },
      {
        name: "Waktu Pengerjaan",
        description: "Estimasi lama proses pembuatan website.",
        basic: "5 - 10 Hari Kerja",
        pro: "5 - 10 Hari Kerja",
        business: "5 - 10 Hari Kerja",
      },
      {
        name: "Gratis Domain",
        description: "Domain gratis untuk tahun pertama.",
        basic: "Gratis Domain .my.id",
        pro: true,
        business: true,
      },
      {
        name: "Gratis Email Bisnis",
        description: "Email profesional dengan nama domain Anda.",
        basic: false,
        pro: false,
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
        basic: "Rp. 100.000 / Halaman",
        pro: "Rp. 100.000 / Halaman",
        business: "Rp. 100.000 / Halaman",
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
    ],
    pricingPlans: [
      {
        package: "Basic",
        price: "590.000",
      },
      {
        package: "Pro",
        price: "990.000",
      },
      {
        package: "Bussiness",
        price: "1.290.000",
      },
    ],
  },
  {
    id:"comproServices",
    heading: {
      title: "Jasa Pembuatan Website Company Profile",
      desc: "Bangun citra perusahaan yang lebih terpercaya dengan Website Company Profile yang murah, profesional, dan SEO friendly. Kami merancang tampilan yang modern, informatif, dan sesuai identitas brand, lengkap dengan struktur SEO agar perusahaan Anda lebih mudah ditemukan di Google. Cocok untuk meningkatkan kredibilitas, memperkuat branding, dan memperluas jangkauan bisnis Anda secara online.",
    },
    serviceSpecs: [
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
    ],
    pricingPlans: [
      {
        package: "Basic",
        price: "1.190.000",
      },
      {
        package: "Pro",
        price: "1.790.000",
      },
      {
        package: "Bussiness",
        price: "2.190.000",
      },
    ],
  },
];
