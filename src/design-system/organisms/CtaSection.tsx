// components/CtaSection.tsx
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CtaSection() {
  return (
    <section className="py-32 px-4 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Ilustrasi */}
        <div className="relative w-full h-64 md:h-[300px]">
          <Image
            src="/images/common/cta-illustration.webp" // ganti dengan ilustrasimu sendiri
            alt="Konsultasi Website"
            className="object-contain w-full"
            priority
            fill
          />
        </div>

        {/* Konten */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-3xl font-bold">
            Siap Bangun Website Profesional untuk Bisnis Anda?
          </h2>
          <p className="text-lg">
            Konsultasikan kebutuhan Anda dengan tim <strong>bbyts</strong>. Kami siap membantu membangun solusi digital yang cepat, aman, dan sesuai dengan tujuan bisnis Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="text-black transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Konsultasi Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-foreground hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
