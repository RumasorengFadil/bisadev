"use client"
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories.data";
import { projects } from "@/data/projects.data";
import PortofolioCard from "@/design-system/organisms/PortofolioCard";
import Link from "next/link";
import { useState } from "react";

export function PageClient() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredProjects = selectedCategory === "all"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <div>
            {/* Hero Section */}
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Our <span className="text-[#FFB700]">Portfolio</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-medium">
                            Explore our collection of successful projects. From e-commerce platforms to corporate websites,
                            we've helped businesses transform their digital presence.
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-2 rounded-full transition-all font-medium ${selectedCategory === category.id
                                    ? "bg-[#FFB700] text-[#0F172A]"
                                    : "bg-gray-100 text-gray-500 hover:bg-white/20"
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <PortofolioCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Let's create something amazing together. Contact us to discuss your next website project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild>
                            <Link href="/contact">
                                Start Your Project
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href={"/services"}>
                                View Our Services
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
