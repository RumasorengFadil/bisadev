import { Button } from "@/components/tailwind/ui/button";
import { Card } from "@/components/ui/card";
import { BlogResponse } from "@/features/dashboard/blog/types/index.type";
import { formatDate } from "@/utils/format-date.util";
import { ArrowRight, Award, Calendar, CheckCircle, Code, Monitor, ShoppingCart, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export function PageClient({ latestBlogs }: { latestBlogs: BlogResponse[] }) {
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

    const features = [
        { icon: <CheckCircle />, title: "Expert Team", description: "Experienced developers and designers" },
        { icon: <TrendingUp />, title: "Scalable Solutions", description: "Built to grow with your business" },
        { icon: <Award />, title: "Quality Assured", description: "Rigorous testing and quality control" },
        { icon: <Users />, title: "Client-Focused", description: "Your success is our priority" },
    ];

    const blogPosts = [
        {
            id: "1",
            title: "The Future of E-Commerce in 2026",
            excerpt: "Discover the latest trends shaping online retail and how to stay ahead of the curve.",
            date: "March 28, 2026",
            image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800",
        },
        {
            id: "2",
            title: "Why Your Business Needs a Custom Website",
            excerpt: "Learn how a tailored web presence can transform your brand and increase conversions.",
            date: "March 15, 2026",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        },
        {
            id: "3",
            title: "Modern POS Systems: A Complete Guide",
            excerpt: "Everything you need to know about choosing and implementing the right POS for your retail business.",
            date: "March 8, 2026",
            image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800",
        },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 md:py-32">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFB700]/10 via-transparent to-transparent" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Transform Your Business with
                            <span className="text-[#FFB700]"> Digital Innovation</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8">
                            We build custom IT solutions that drive growth, streamline operations, and deliver exceptional digital experiences.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild>
                                <Link href="/contact">
                                    Get Started <ArrowRight className="ml-2" size={20} />
                                </Link>
                            </Button>
                            <Button className="text-primary" variant="outline" asChild>
                                <Link href="services">
                                    View Services
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 dark:bg-[#111827]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Comprehensive IT solutions designed to meet your unique business requirements
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card className="p-8 bg-background" key={index}>
                                <div className="relative">
                                    {service.badge && (
                                        <span className="absolute top-0 right-0 text-xs bg-[#FFB700]/20 text-[#FFB700] px-3 py-1 rounded-full">
                                            {service.badge}
                                        </span>
                                    )}
                                    <div className="mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                    <p className="text-gray-400">{service.description}</p>
                                </div>
                            </Card>
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

            {/* Why Choose Us */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BISADEV?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We combine expertise, innovation, and dedication to deliver results that exceed expectations
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-[#FFB700]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#FFB700]">
                                    {feature.icon}
                                </div>
                                <h3 className="font-semibold mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Preview */}
            <section className="py-20 dark:bg-[#111827]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Products</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Exciting new products coming soon to revolutionize your business operations
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-gradient-to-br p-8 from-[#FFB700]/5 to-transparent">
                            <ShoppingCart className="w-12 h-12 text-[#FFB700] mb-4" />
                            <h3 className="text-2xl font-semibold mb-3">Digital Marketplace</h3>
                            <p className="text-gray-400 mb-4">
                                Launch your own multi-vendor marketplace with advanced features for sellers, buyers, and administrators. Built with scalability and security in mind.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-[#FFB700] mr-2" />
                                    Multi-vendor support
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-[#FFB700] mr-2" />
                                    Integrated payment gateway
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-[#FFB700] mr-2" />
                                    Advanced analytics
                                </li>
                            </ul>
                        </Card>
                        <Card className="bg-gradient-to-br p-8 from-[#FFB700]/5 to-transparent">
                            <Monitor className="w-12 h-12 text-[#FFB700] mb-4" />
                            <h3 className="text-2xl font-semibold mb-3">POS System</h3>
                            <p className="text-gray-400 mb-4">
                                Modernize your retail operations with an intuitive POS system that handles inventory, sales, and customer management seamlessly.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-[#FFB700] mr-2" />
                                    Real-time inventory tracking
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-[#FFB700] mr-2" />
                                    Customer loyalty programs
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="text-[#FFB700] mr-2" />
                                    Cloud-based reporting
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Blog Preview */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
                            <p className="text-gray-400">Stay updated with the latest trends and tips</p>
                        </div>
                        <Button variant="secondary" asChild>
                            <Link href="/blog">
                                View All
                            </Link>
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {latestBlogs.map((post) => (
                            <Link key={post.id} href={`/blog/${post.slug}/detail`} className="group">
                                <Card className="p-8 bg-background">
                                    <div className="aspect-video bg-gradient-to-br from-[#FFB700]/20 to-[#FFB700]/5 rounded-xl mb-4 overflow-hidden">
                                        <img src={post.thumbnail_url ?? "_"} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    </div>
                                    <div className="flex items-center text-sm text-gray-400 mb-2">
                                        <Calendar size={14} className="mr-2" />
                                        {formatDate({ value: post.created_at })}
                                    </div>
                                    <h3 className="font-semibold mb-2 group-hover:text-[#FFB700] transition-colors">{post.title}</h3>
                                    <p className="text-sm text-gray-400">{post.excerpt}</p>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#FFB700]/10 via-[#FFB700]/5 to-transparent">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Let's discuss how we can help you achieve your digital goals
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild>
                            <Link href="/contact">
                                Start Your Project <ArrowRight className="ml-2" size={20} />
                            </Link>
                        </Button>
                        <Button className="text-primary" variant="outline" asChild>
                            <Link href="/about">
                                Learn More About Us
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
