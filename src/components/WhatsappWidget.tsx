"use client";

import { APP_CONFIG } from "@/config/app-config";
import { CustomerService } from "@/types/customer-service.type";
import { ChevronLeft, MessageCircle, SendHorizonal } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";


interface WhatsappWidgetProps {
    agents: CustomerService[];
}

export default function WhatsappWidget() {
    const agents: CustomerService[] = [
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

    const [open, setOpen] = useState(false);
    const [selectedAgent, setSelectedAgent] = useState<CustomerService | null>(null);
    const [message, setMessage] = useState("");

    const handleSelectAgent = (agent: CustomerService) => {
        setSelectedAgent(agent);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {open && (
                !selectedAgent ?
                    <div className="mb-4 w-[350px] overflow-hidden rounded-2xl bg-white shadow-2xl">
                        <div className="bg-green-500 text-white p-5">
                            <div
                                onClick={() => setOpen(false)}
                                className="mb-2 cursor-pointer w-max hover:bg-white/10 transition-all p-1 rounded-md"
                            >
                                <ChevronLeft />
                            </div>

                            <p className="text-center text-lg font-semibold">
                                Kami siap membantu Anda
                            </p>
                        </div>

                        <div>
                            {agents.map((agent) => (
                                <button
                                    key={agent.id}
                                    onClick={() => handleSelectAgent(agent)}
                                    className="flex w-full cursor-pointer items-center gap-4 border-b p-4 text-left hover:bg-gray-50"
                                >
                                    <Avatar className="w-16 h-16">
                                        <AvatarImage src={agent.avatar} />
                                        <AvatarFallback>{agent.name.slice(0, 2)}</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">
                                            Account Executive
                                        </p>

                                        <p className="font-bold">
                                            {agent.name} - {agent.role}
                                        </p>

                                        <div className="mt-1 flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-green-500" />
                                            <span className="text-sm text-gray-500 font-medium">
                                                Online
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    : <ChatPreview
                        message={message}
                        selectedAgent={selectedAgent}
                        setMessage={setMessage}
                        setSelectedAgent={setSelectedAgent}
                    />
            )}

            <button
                onClick={() => setOpen(!open)}
                className="flex cursor-pointer items-center gap-3 rounded-full bg-green-500 px-6 py-4 text-lg font-semibold text-white shadow-lg"
            >
                <span className="hidden lg:inline">Butuh Bantuan? Klik di Sini</span>

                <MessageCircle />
            </button>
        </div>
    );
}

function ChatPreview({ message, selectedAgent, setMessage, setSelectedAgent }: { setSelectedAgent: (agent: CustomerService | null) => void, selectedAgent: CustomerService | null, setMessage: (message: string) => void, message: string }) {
    const sendToWhatsapp = () => {
        if (!selectedAgent) return;

        const text =
            message ||
            "Halo, saya ingin bertanya.";

        const url =
            `https://wa.me/${selectedAgent.phone}` +
            `?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");
    };

    return (
        <div className="flex flex-col h-[500px] rounded-2xl bg-white">
            <div className="bg-green-500 rounded-t-2xl p-6 text-white">
                <button
                    onClick={() => setSelectedAgent(null)}
                    className="mb-2 cursor-pointer w-max hover:bg-white/10 transition-all p-1 rounded-md"
                >
                    <ChevronLeft />
                </button>

                <Avatar className="w-20 h-20 text-black">
                    <AvatarImage src={selectedAgent?.avatar ?? "_"} />
                    <AvatarFallback className="bg-gray-200 font-medium">{selectedAgent?.name.slice(0, 2)}</AvatarFallback>
                </Avatar>

                <h3 className="font-medium">
                    {selectedAgent?.name}
                </h3>

                <p className="font-medium">
                    Sampaikan Kebutuhan Anda di Sini
                </p>
            </div>

            <div className="flex-1 p-6">
                <div className="bg-green-100 rounded-xl p-4">
                    Hallo, Ada yang bisa saya bantu ?
                </div>
            </div>

            <div className="border-t p-4 flex gap-2 items-center">
                <Input
                    value={message}
                    onChange={(e) =>
                        setMessage(e.target.value)
                    }
                    placeholder={`Reply to ${selectedAgent?.name}`}
                    className="flex-1 font-medium"
                />

                <button
                    onClick={sendToWhatsapp}
                    className="cursor-pointer bg-green-500 p-1.5 shrink-0 rounded-full"
                >
                    <SendHorizonal className="text-white" />
                </button>
            </div>
        </div>
    )
}