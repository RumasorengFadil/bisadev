import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Monitor, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function ServiceSection() {
    const services = [
        {
            icon: <Code className="w-8 h-8 text-[#FFB700]" />,
            title: "Website Development",
            description: "Custom-built websites tailored to your business needs with modern technologies and best practices.",
        },
        {
            icon: <ShoppingCart className="w-8 h-8 text-[#FFB700]" />,
            title: "Digital Marketplace",
            description: "Connect buyers and sellers on a powerful e-commerce platform designed for scalability.",
            badge: "Coming Soon",
        },
        {
            icon: <Monitor className="w-8 h-8 text-[#FFB700]" />,
            title: "POS System",
            description: "Streamline your retail operations with our intelligent Point of Sale solution.",
            badge: "Coming Soon",
        },
    ];

    return (
        <section className="py-20 dark:bg-[#111827]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal direction="up">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                        <p className="text-gray-400 max-w-2xl font-medium mx-auto">
                            Comprehensive IT solutions designed to meet your unique business requirements
                        </p>
                    </div>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Reveal key={index} direction="up" delay={index * 0.1}>
                            <Card className="p-8 bg-background h-full">
                                <div className="relative">
                                    {service.badge && (
                                        <span className="absolute top-0 right-0 text-xs bg-[#FFB700]/20 text-[#FFB700] px-3 py-1 rounded-full">
                                            {service.badge}
                                        </span>
                                    )}
                                    <div className="mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                    <p className="text-gray-400 font-medium">{service.description}</p>
                                </div>
                            </Card>
                        </Reveal>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button variant="default" asChild>
                        <Link href="/services">
                            Explore All Services <ArrowRight className="ml-2" size={20} />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}