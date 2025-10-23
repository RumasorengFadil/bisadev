// components/TestimonialsSlider.tsx
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Nadia, Freelancer Desain",
    quote: "Dengan Blio, saya bisa tampil lebih profesional di mata calon klien. Platform-nya simple, fleksibel, dan support-nya ramah.",
  },
  {
    name: "Andre, CEO Startup EduTech",
    quote: "Tim bbyts sangat profesional dalam membangun platform edukasi kami. Teknologinya scalable dan tampilannya modern.",
  },
  {
    name: "Sinta, Digital Marketer",
    quote: "Landing page yang dibuat oleh bbyts sangat mendukung kampanye digital kami. Proses cepat dan hasilnya sangat rapi.",
  },
]

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000) // auto slide tiap 5 detik
    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <section className="py-32 px-4 min-h-screen bg-secondary-light">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-full px-6 md:px-12"
              >
                <Card className="shadow-md">
                  <CardContent className="p-6 space-y-4">
                    <p className="text-muted-foreground italic">{item.quote}</p>
                    <p className="text-sm font-medium text-gray-900 text-right">— {item.name}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
