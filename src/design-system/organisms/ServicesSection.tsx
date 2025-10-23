// components/ServicesSection.tsx
import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "../components/ExternalLink"

// const services = [
//   {
//     name: "Paket Basic",
//     price: "Mulai dari Rp 1 Juta",
//     highlight: "Cocok untuk UMKM & Personal Brand",
//     features: [
//       "Landing page profesional",
//       "Responsive design (mobile friendly)",
//       "Custom domain & email",
//       "Form kontak & galeri",
//       "SEO dasar",
//     ],
//   },
//   {
//     name: "Paket Profesional",
//     price: "Mulai dari Rp 3 Juta",
//     highlight: "Solusi untuk bisnis berkembang",
//     features: [
//       "Multi-page website",
//       "Desain full custom",
//       "Dashboard admin",
//       "Integrasi API (payment, WA, dll)",
//       "Optimasi performa & SEO",
//     ],
//   },
//   {
//     name: "Paket Custom",
//     price: "Harga Sesuai Fitur",
//     highlight: "Untuk perusahaan & kebutuhan khusus",
//     features: [
//       "Sistem berbasis role (admin, user, dll)",
//       "Integrasi backend Laravel",
//       "Manajemen data & autentikasi",
//       "Skalabilitas tinggi",
//       "Maintenance & support khusus",
//     ],
//   },
// ]
const services = [
    {
        name: "Basic Package",
        price: "Starting from Rp 1 Million",
        highlight: "Suitable for MSME & Personal Brand",
        features: [
            "Professional landing page",
            "Responsive design (mobile friendly)",
            "Custom domain & email",
            "Contact form & gallery",
            "Basic SEO",
        ],
    },
    {
        name: "Professional Package",
        price: "Starting from Rp 3 Million",
        highlight: "Solution for growing businesses",
        features: [
            "Multi-page website",
            "Full custom design",
            "Admin dashboard",
            "API integration (payment, WA, etc)",
            "Performance & SEO optimization",
        ],
    },
    {
        name: "Custom Package",
        price: "Price Based on Features",
        highlights: "For companies & special needs",
        features: [
            "Role-based system (admin, user, etc)",
            "Laravel backend integration",
            "Data management & authentication",
            "High scalability",
            "Dedicated maintenance & support",
        ],
    },
]
export function ServicesSection() {
    return (
        <section id="services" className="py-16 min-h-screen px-4 bg-primary-light">
            <div className="max-w-6xl mx-auto space-y-10 text-center">
                <h2 className="text-3xl font-bold text-gray-900">Paket Layanan Pengembangan Website</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Kami menawarkan layanan pengembangan website berbasis Laravel & React yang disesuaikan dengan kebutuhan personal, bisnis, hingga korporasi.
                </p>

                <div className="grid md:grid-cols-3 gap-6 items-stretch">
                    {services.map((plan, index) => (
                        <Card key={index} className="flex flex-col justify-between h-full shadow hover:shadow-lg transition-shadow">
                            <CardContent className="p-6 flex flex-col h-full justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                                    <p className="text-green-600 font-bold mb-2">{plan.price}</p>
                                    <p className="text-sm text-muted-foreground mb-4">{plan.highlight}</p>

                                    <ul className="space-y-2 text-sm text-left text-gray-700">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <CheckCircle size={16} className="text-green-500 mt-1" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6">
                                    {/* <Button className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">Lihat Detail</Button> */}
                                    <ExternalLink href="https://wa.me/6285178137881?text=" className="block mt-2 text-sm text-blue-600 hover:underline">
                                        Konsultasi Gratis
                                    </ExternalLink>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
