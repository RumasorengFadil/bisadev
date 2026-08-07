import { APP_CONFIG } from "@/config/app-config";
import { absoluteUrl } from "@/utils/absolute-path.util";

export const organizationSchema = {
    "@context": "https://schema.org",
    "@id": `${absoluteUrl("/#organization")}`,
    "@type": "Organization",

    name: "Bisadev Indonesia",

    url: APP_CONFIG.url,

    logo: `${absoluteUrl(APP_CONFIG.logo)}`,

    image: `${absoluteUrl(APP_CONFIG.cover)}`,

    description: APP_CONFIG.description,

    email: APP_CONFIG.email,

    telephone: `+${APP_CONFIG.wa_number}`,

    foundingDate: "2025",

    sameAs: [
        "https://id.linkedin.com/company/bisadev-indonesia",
        "https://www.instagram.com/bisadev.id/",
        "https://www.tiktok.com/@bisadev.id",
        "https://www.threads.com/@bisadev.id"
    ],

    knowsAbout: [
        "Web Development",
        "Mobile Development",
        "UI UX Design",
        "SEO",
        "Digital Transformation",
        "IT Service",
        "IT Solution"
    ],

    areaServed: {
        "@type": "Country",
        "name": "Indonesia"
    },

    contactPoint: {
        "@type": "ContactPoint",
        telephone: `+${APP_CONFIG.wa_number}`,
        contactType: "customer service",
        "availableLanguage": [
            "English"
        ]
    },
};