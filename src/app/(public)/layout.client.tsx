import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import WhatsappWidget from "@/components/WhatsappWidget";
import { ChatPromptForm } from "@/design-system/organisms/ChatPromptForm";
import { ReactNode } from "react";

export default function LayoutClient({ children }: { children: ReactNode }) {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Content */}
            {children}

            {/* Chat Prompt Form */}
            <ChatPromptForm />

            {/* Whatsapp Widget */}
            <WhatsappWidget />

            {/* Footer */}
            <Footer />
        </div>
    )
}