import { Reveal } from "@/components/motion/Reveal";
import { Award, CheckCircle, TrendingUp, Users } from "lucide-react";

export default function WhyChooseUsSection() {

    const features = [
        { icon: <CheckCircle />, title: "Expert Team", description: "Experienced developers and designers" },
        { icon: <TrendingUp />, title: "Scalable Solutions", description: "Built to grow with your business" },
        { icon: <Award />, title: "Quality Assured", description: "Rigorous testing and quality control" },
        { icon: <Users />, title: "Client-Focused", description: "Your success is our priority" },
    ];
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal direction="up">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BISADEV?</h2>
                        <p className="text-gray-400 max-w-2xl font-medium mx-auto">
                            We combine expertise, innovation, and dedication to deliver results that exceed expectations
                        </p>
                    </div>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <Reveal direction="up" key={index} delay={index * 0.1}>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#FFB700]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#FFB700]">
                                    {feature.icon}
                                </div>
                                <h3 className="font-semibold mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-400 font-medium">{feature.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}