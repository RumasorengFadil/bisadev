"use client"

import AboutUsSection from "@/design-system/organisms/AboutUsSection"
import { ContactUs } from "@/design-system/organisms/ContactUs"
import { CtaSection } from "@/design-system/organisms/CtaSection"
import { FeaturedProducts } from "@/design-system/organisms/FeaturedProducts"
import { FooterFindUs } from "@/design-system/organisms/FooterFindUs"
import { FooterProducts } from "@/design-system/organisms/FooterProducts"
import { FooterService } from "@/design-system/organisms/FooterService"
import HeroSection from "@/design-system/organisms/HeroSectionV2"
import NavbarSection from "@/design-system/organisms/NavbarSectionV3"
import { ServicesSection } from "@/design-system/organisms/ServicesSection"
import { TestimonialsSection } from "@/design-system/organisms/TesmonialsSection"
import PublicLayout from "@/Layouts/PublicLayout"
import { FadeIn } from "@/utils/FadeIn"

export default function PageClient({ }) {

    const header = (
        <>
            <NavbarSection />
            <FadeIn direction="down">
                <HeroSection />
            </FadeIn>
        </>
    )

    const content = (
        <>

            <FadeIn>
                <AboutUsSection />
            </FadeIn>

            <FadeIn>
                <ServicesSection />
            </FadeIn>

            <FadeIn>
                <TestimonialsSection />
            </FadeIn>

            <FadeIn>
                <CtaSection />
            </FadeIn>

            <FadeIn>
                <FeaturedProducts />
            </FadeIn>
        </>
    )

    const footer = (
        <>
            <ContactUs />

            <FooterProducts />

            <FooterService />

            <FooterFindUs />
        </>
    )
    return <>
        <PublicLayout header={header} content={content} footer={{ content: footer, copyright: "" }} />
    </>
}



