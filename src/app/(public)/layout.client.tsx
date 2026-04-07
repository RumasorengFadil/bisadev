"use client"
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ChatPromptForm } from "@/design-system/organisms/ChatPromptForm";
import { useChat } from "@/hooks/use-chat";
import { ReactNode } from "react";

export default function LayoutClient({ children }: { children: ReactNode }) {
    const { handleChat, streamMessage, messages, streamDone, clearChat } = useChat();

    return (
        <div>
            <Navbar />
            {children}

            {/* Chat Prompt Form */}
            <ChatPromptForm streamDone={streamDone} messages={messages} streamMessage={streamMessage} onChat={handleChat} clearChat={clearChat} />

            <Footer />
        </div>
    )
}