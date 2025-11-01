"use client"

import { comproPricingPlans } from "@/data/comproPricingPlan"
import { comproServiceSpecs } from "@/data/comproServiceSpecs"
import { landpagePricingPlans } from "@/data/landpagePricingPlan"
import { landpageServiceSpecs } from "@/data/landpageServiceSpecs"
import AboutUsSection from "@/design-system/organisms/AboutUsSection"
import { ChatPromptForm } from "@/design-system/organisms/ChatPromptForm"
import { ContactUs } from "@/design-system/organisms/ContactUs"
import { CtaSection } from "@/design-system/organisms/CtaSection"
import { FeaturedProducts } from "@/design-system/organisms/FeaturedProducts"
import { FooterFindUs } from "@/design-system/organisms/FooterFindUs"
import { FooterProducts } from "@/design-system/organisms/FooterProducts"
import { FooterService } from "@/design-system/organisms/FooterService"
import HeroSection from "@/design-system/organisms/HeroSectionV2"
import NavbarSection from "@/design-system/organisms/NavbarSectionV3"
import { ServiceSection } from "@/design-system/organisms/ServiceSectionV1"
import { TestimonialsSection } from "@/design-system/organisms/TesmonialsSection"
import { WebsiteServiceSection } from "@/design-system/organisms/WebsiteServiceSectionV1"
import { useChat } from "@/hooks/use-chat"
import PublicLayout from "@/Layouts/PublicLayout"
import { FadeIn } from "@/utils/FadeIn"

export default function PageClient({ }) {
    const { handleChat, streamMessage, messages, streamDone, clearChat } = useChat();

    const header = (
        <>
            <NavbarSection />
            <FadeIn direction="down">
                <HeroSection />
            </FadeIn>

            {/* Chat Prompt Form */}
            <ChatPromptForm streamDone={streamDone} messages={messages} streamMessage={streamMessage} onChat={handleChat} clearChat={clearChat} />
        </>
    )

    const content = (
        <>
            <FadeIn>
                <AboutUsSection />
            </FadeIn>

            <FadeIn>
                <WebsiteServiceSection />
            </FadeIn>

            <FadeIn>
                <ServiceSection serviceSpecs={landpageServiceSpecs} pricingplans={landpagePricingPlans} />
            </FadeIn>

            <FadeIn>
                <ServiceSection serviceSpecs={comproServiceSpecs} pricingplans={comproPricingPlans} />
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



