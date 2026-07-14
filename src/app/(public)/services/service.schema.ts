import { absoluteUrl } from "@/utils/absolute-path.util";

export const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",

    "@id": absoluteUrl("/service#services"),

    "name": "Layanan Bisa Dev - Jasa Pembuatan Website Custom & Solusi Digital",

    "description": "Layanan Bisa Dev mencakup pembuatan website custom yang profesional, cepat, dan SEO friendly. Kami juga mengembangkan solusi digital seperti marketplace produk digital dan sistem POS.",

    "url": absoluteUrl("/services"),

    "provider": {
        "@id": absoluteUrl("/#organization")
    }
}