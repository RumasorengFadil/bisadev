"use client"
import Typewriter from "@/components/motion/TypeWriter";
import { Button } from "@/components/ui/button";
import { BlogResponse } from "@/features/dashboard/blog/types/index.type";
import BlogPreviewSection from "@/features/public/home/BlogPreviewSection";
import CTASection from "@/features/public/home/CTASection";
import PreviewPortofolioSection from "@/features/public/home/PreviewPortofolioSection";
import ProductPreviewSection from "@/features/public/home/ProductPreviewSection";
import ServiceSection from "@/features/public/home/ServiceSection";
import WhyChooseUsSection from "@/features/public/home/WhyChooseUsSection";
import { FadeIn } from "@/utils/FadeIn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PageClient({ latestBlogs }: { latestBlogs: BlogResponse[] }) {
    return (
        <div>
            {/* Hero Section */}
            <FadeIn>
                <section className="relative overflow-hidden py-20 md:py-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFB700]/10 via-transparent to-transparent" />
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <h1 className="text-xl md:text-6xl font-bold mb-6 leading-tight">
                                Transform Your Business with {" "}
                                <span className="text-primary">
                                    <Typewriter text="Digital Innovation" />
                                </span>
                            </h1>
                            <p className="text-xl font-medium text-gray-400 mb-8">
                                We build custom IT solutions that drive growth, streamline operations, and deliver exceptional digital experiences.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="font-medium" asChild>
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
            </FadeIn>

            {/* Services Section */}
            <ServiceSection />

            {/* Why Choose Us */}
            <WhyChooseUsSection />

            {/* Products Preview */}
            <ProductPreviewSection />

            {/* Portfolio Preview */}
            <PreviewPortofolioSection />

            {/* Blog Preview */}
            <BlogPreviewSection latestBlogs={latestBlogs} />

            {/* CTA Section */}
            <CTASection />
        </div>
    );
}
