"use client"
import { BlogResponse } from "@/features/dashboard/blog/types/index.type";
import BlogPreviewSection from "@/features/public/home/BlogPreviewSection";
import CTASection from "@/features/public/home/CTASection";
import HeroSection from "@/features/public/home/HeroSection";
import PreviewPortofolioSection from "@/features/public/home/PreviewPortofolioSection";
import ProductPreviewSection from "@/features/public/home/ProductPreviewSection";
import ServiceSection from "@/features/public/home/ServiceSection";
import WhyChooseUsSection from "@/features/public/home/WhyChooseUsSection";

export function PageClient({ latestBlogs }: { latestBlogs: BlogResponse[] }) {
    return (
        <div>
            {/* Hero Section */}
            <HeroSection />

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
