"use client"
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import WhatsappWidget from "@/components/WhatsappWidget";
import { APP_CONFIG } from "@/config/app-config";
import { ChatPromptForm } from "@/design-system/organisms/ChatPromptForm";
import { useChat } from "@/hooks/use-chat";
import { CustomerService } from "@/types/customer-service.type";
import { ReactNode } from "react";

export default function LayoutClient({ children }: { children: ReactNode }) {
    const { handleChat, streamMessage, messages, streamDone, clearChat } = useChat();
    const customerServices: CustomerService[] = [
        {
            id: "1",
            name: "Bisadev",
            role: "General Admin",
            avatar: "/images/app/og-image.png",
            phone: APP_CONFIG.wa_number,
            online: true,
        },
        {
            id: "2",
            name: "Fadil",
            role: "Technical",
            avatar: "/images/teams/fadil-hijayat-rumasoreng.jpg",
            phone: "6285244682780",
            online: true,
        },
        {
            id: "3",
            name: "Zaki",
            role: "Support 1",
            avatar: "/images/teams/tolkhah-mozaqqi-arrasyi.jpeg",
            phone: "6281316965887",
            online: true,
        },
        {
            id: "4",
            name: "Zarif",
            role: "Support 2",
            avatar: "/images/teams/zarif-afzal-ramadhan.jpeg",
            phone: "6287874385891",
            online: true,
        },
    ];

    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Content */}
            {children}

            {/* Chat Prompt Form */}
            <ChatPromptForm streamDone={streamDone} messages={messages} streamMessage={streamMessage} onChat={handleChat} clearChat={clearChat} />

            {/* Whatsapp Widget */}
            <WhatsappWidget agents={customerServices} />

            {/* Footer */}
            <Footer />
        </div>
    )
}