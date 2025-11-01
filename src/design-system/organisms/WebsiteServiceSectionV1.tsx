import Image from "next/image"
import Link from "next/link"

export const WebsiteServiceSection = () => {
    return (
        <div className="flex flex-col justify-center min-h-screen py-20 space-y-16 border-b px-6 md:px-16">
            <div className="flex flex-col gap-4">
                <h2 className="text-center font-bold leading-[120%] text-3xl sm:text-4xl lg:text-5xl">Jasa Pembuatan Website</h2>
                <p className="text-center max-w-[800px] leading-relaxed mx-auto">Transformasikan bisnis Anda dengan layanan pembuatan website profesional kami. Mulai dari halaman arahan yang menawan hingga profil perusahaan yang komprehensif, kami menciptakan pengalaman digital yang menghasilkan hasil.</p>
            </div>

            <div>
                <div className="flex gap-8 flex-col lg:flex-row justify-center">
                    <div className="flex flex-col items-center shadow-lg px-8 py-10 gap-6 rounded-2xl justify-between">
                        <div className="flex justify-center items-center w-16 h-16 bg-gradient-to-tl rounded-2xl from-[#F093FB] to-[#F5576C]/40">
                            <Image width={32} height={32} src="/images/common/landing-page.png" alt="" />
                        </div>
                        <h3 className="font-bold text-2xl">Landing Page</h3>
                        <p className="leading-relaxed max-w-80 text-center text-muted-foreground">Layanan jasa pembuatan website landing page. Dapatkan dengan harga murah, prefesional, dan SEO Friendly.</p>

                        <p className="text-muted-foreground">Mulai dari</p>
                        <p className="font-bold line-through">Rp 999.000</p>
                        <p className="text-3xl font-bold">Rp 590.000</p>

                        <Link href="#landpageServices" className="w-full py-4 bg-primary text-center rounded-xl cursor-pointer transition-all hover:bg-primary-dark" >Selengkapnya</Link>
                    </div>
                    <div className="flex flex-col items-center shadow-lg px-8 py-10 gap-6 rounded-2xl justify-between">
                        <div className="flex justify-center items-center w-16 h-16 bg-gradient-to-tl rounded-2xl from-[#4FACFE] to-[#00F2FE]/40">
                            <Image width={32} height={32} src="/images/common/company-profile.png" alt="" />
                        </div>
                        <h3 className="font-bold text-2xl">Company Profile</h3>
                        <p className="leading-relaxed max-w-80 text-center text-muted-foreground">Layanan jasa pembuatan website company profile. Dapatkan dengan harga murah, prefesional, dan SEO Friendly.</p>

                        <p className="text-muted-foreground">Mulai dari</p>
                        <p className="font-bold line-through">Rp 1.999.000</p>
                        <p className="text-3xl font-bold">Rp 1.190.000</p>

                        <Link href="#comproServices" className="w-full py-4 bg-primary text-center rounded-xl cursor-pointer transition-all hover:bg-primary-dark" >Selengkapnya</Link>
                    </div>
                    <div className="flex flex-col items-center shadow-lg px-8 py-10 gap-6 rounded-2xl justify-between">
                        <div className="flex justify-center items-center w-16 h-16 bg-gradient-to-tl rounded-2xl from-[#A8EDEA] to-[#FED6E3]/40">
                            <Image width={32} height={32} src="/images/common/custom-website.png" alt="" />
                        </div>
                        <h3 className="font-bold text-2xl">Custom Website</h3>
                        <p className="leading-relaxed max-w-80 text-center text-muted-foreground">Layanan jasa pembuatan website custom. Yang disesuaikan secara khusus untuk kebutuhan bisnis unik Anda.</p>

                        <p className="text-muted-foreground">Mulai dari</p>
                        <p className="font-bold line-through">Rp 2.999.000</p>
                        <p className="text-3xl font-bold">Rp 2.090.000</p>

                        <Link href="#customServices" className="w-full py-4 bg-primary text-center rounded-xl cursor-pointer transition-all hover:bg-primary-dark" >Selengkapnya</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}