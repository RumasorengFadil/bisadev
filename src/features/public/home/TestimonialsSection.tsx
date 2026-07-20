import { Star } from "lucide-react";

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Naj*** *****",
            role: "Owner UMKM",
            avatar: "AS",
            rating: 5,
            quote: "Awalnya cuma mau bikin website company profile aja, tapi ternyata dikasih banyak masukan juga soal performa sama tampilannya. Hasil akhirnya bener2 sesuai yg saya mau. Mantap sih.",
        },
        {
            name: "Hen*** *****",
            role: "IT Supervisor",
            avatar: "BP",
            rating: 5,
            quote: "Udah beberapa kali pake jasa mereka buat maintenance server sama web kantor. Kalau ada kendala responnya cepet, jadi ga bikin kerjaan ketahan. Recommended.",
        },
        {
            name: "Cit*** ****",
            role: "Owner Online Shop",
            avatar: "CA",
            rating: 5,
            quote: "Suka sama cara kerjanya, komunikasinya enak dan ga ribet. Dari awal dijelasin pelan2 sampe project selesai. Websitenya juga lebih cepet dibanding yg lama.",
        },
    ];

    return (
        <section id="testimoni" className="py-20">
            <div className="max-w-7xl mx-auto px-5 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
                    <p className="text-gray-400">Discover our latest successful projects and client success stories</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white flex flex-col space-y-4 border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                            <div className='flex gap-1'>
                                {Array.from({ length: 5 }).map((_, index) => <Star stroke="#fde047" fill="#fde047" key={index} />)}
                            </div>
                            <p className="font-medium text-foreground/75 leading-relaxed my-5">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div className="flex items-center gap-3 pt-4 border-t border-border">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="text-lg font-semibold">{t.name}</div>
                                    <div className="text-sm font-medium text-muted-foreground">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}