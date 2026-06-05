"use client"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Code, Database, Gauge, Lock, Monitor, Palette, Search, ShoppingCart, Smartphone } from "lucide-react";
import Link from "next/link";

export function PageClient() {
    const mainService = {
        icon: <Code className="w-12 h-12 text-[#FFB700]" />,
        title: "Custom Website Development",
        description: "We create stunning, high-performance websites tailored to your brand and business objectives. From simple landing pages to complex web applications, we deliver solutions that drive results.",
        features: [
            { icon: <Palette />, title: "Custom Design", description: "Unique designs that reflect your brand identity" },
            { icon: <Smartphone />, title: "Responsive", description: "Perfect experience across all devices" },
            { icon: <Search />, title: "SEO Optimized", description: "Built for search engine visibility" },
            { icon: <Gauge />, title: "Performance", description: "Lightning-fast load times" },
            { icon: <Database />, title: "Scalable", description: "Grows with your business needs" },
            { icon: <Lock />, title: "Secure", description: "Industry-standard security practices" },
        ],
        process: [
            "Discovery & Planning",
            "Design & Prototyping",
            "Development & Testing",
            "Launch & Support",
        ],
    };

    const comingSoon = [
        {
            icon: <ShoppingCart className="w-12 h-12 text-[#FFB700]" />,
            title: "Digital Marketplace",
            description: "A powerful multi-vendor e-commerce platform that connects buyers and sellers. Launch your own marketplace with advanced features for inventory management, payments, and analytics.",
            features: [
                "Multi-vendor support",
                "Integrated payment processing",
                "Advanced search & filtering",
                "Seller dashboards",
                "Real-time analytics",
                "Customer reviews & ratings",
            ],
        },
        {
            icon: <Monitor className="w-12 h-12 text-[#FFB700]" />,
            title: "POS System",
            description: "Modernize your retail operations with our intelligent Point of Sale system. Manage sales, inventory, and customers from one intuitive platform, with cloud-based access anywhere.",
            features: [
                "Real-time inventory tracking",
                "Customer loyalty programs",
                "Multi-location support",
                "Cloud-based reporting",
                "Offline mode",
                "Integration with accounting software",
            ],
        },
    ];

    const benefits = [
        { title: "Expert Development Team", description: "Skilled professionals with years of experience" },
        { title: "Agile Methodology", description: "Flexible, iterative approach to development" },
        { title: "Transparent Communication", description: "Regular updates and clear reporting" },
        { title: "Post-Launch Support", description: "Ongoing maintenance and technical assistance" },
    ];

    return (
        <div>
            {/* Hero */}
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-[#FFB700]">Solutions</span> That Drive Success
                        </h1>
                        <p className="text-xl text-gray-400 font-medium">
                            Comprehensive IT services designed to transform your business and accelerate growth
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Service: Website Development */}
            <section className="py-20 bg-primary/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <div className="mb-6">{mainService.icon}</div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{mainService.title}</h2>
                            <p className="text-gray-400 text-lg mb-6 font-medium">{mainService.description}</p>
                            <Button asChild>
                                <Link href="/contact">
                                    Start Your Project <ArrowRight className="ml-2" size={20} />
                                </Link>
                            </Button>
                        </div>
                        <div className="aspect-video bg-gradient-to-br from-[#FFB700]/20 to-transparent rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800"
                                alt="Website Development"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {mainService.features.map((feature, index) => (
                            <Card className="p-8 bg-background" key={index}>
                                <div className="w-12 h-12 bg-[#FFB700]/10 rounded-xl flex items-center justify-center mb-4 text-[#FFB700]">
                                    {feature.icon}
                                </div>
                                <h3 className="font-semibold mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-400 font-medium">{feature.description}</p>
                            </Card>
                        ))}
                    </div>

                    {/* Process */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-center">Our Development Process</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {mainService.process.map((step, index) => (
                                <div className="text-center" key={index}>
                                    <div className="w-12 h-12 bg-[#FFB700] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0F172A] font-bold">
                                        {index + 1}
                                    </div>
                                    <p className="font-medium">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Coming Soon Products */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Coming Soon
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto font-medium">
                            Exciting new products in development to expand our service offerings
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {comingSoon.map((product, index) => (
                            <Card className="bg-gradient-to-br from-[#FFB700]/5 to-transparent p-8">
                                <div className="flex items-start justify-between mb-4">
                                    {product.icon}
                                    <span className="text-xs font-medium bg-[#FFB700]/20 text-[#FFB700] px-3 py-1 rounded-full">
                                        Coming Soon
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                                <p className="text-gray-400 mb-6 font-medium">{product.description}</p>
                                <div className="space-y-2">
                                    {product.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center text-sm text-gray-400 font-medium">
                                            <CheckCircle size={16} className="text-[#FFB700] mr-2 flex-shrink-0" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <p className="text-gray-400 mb-6 font-medium">
                            Interested in early access or want to learn more about these products?
                        </p>
                        <Button variant="outline" asChild>
                            <Link href="/contact">
                                Contact Us for Details
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-primary/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Work With Us?
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto font-medium">
                            The BISADEV advantage
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <div className="text-center" key={index}>
                                <div className="w-12 h-12 bg-[#FFB700] rounded-xl flex items-center justify-center mx-auto mb-4 text-[#0F172A]">
                                    <CheckCircle size={24} />
                                </div>
                                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-400 font-medium">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 font-medium">
                        Let's discuss your project and find the perfect solution for your needs
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild>
                            <Link href="/contact">
                                Request a Quote
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link className="text-primary" href="/about">
                                Learn More About Us
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
