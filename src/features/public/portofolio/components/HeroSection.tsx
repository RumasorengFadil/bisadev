import { categories } from "@/data/categories.data";
import { useState } from "react";

export default function HeroSection() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    return (
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
    )
}