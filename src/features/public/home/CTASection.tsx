import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-20 bg-primary/10 bg-gradient-to-r from-[#FFB700]/10 via-[#FFB700]/5 to-transparent">
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
                    <Button variant="outline" asChild>
                        <Link href="/about">
                            Learn More About Us
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}