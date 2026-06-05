import { categories } from "@/data/categories.data";
import { Calendar, ExternalLink, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";

const PortofolioCard = ({ project }: { project: any }) => {

    return (
        <Card key={project.id} className="flex flex-col justify-between p-8 h-full">
            <div>
                <div className="relative aspect-video bg-gradient-to-br border border-gray-100 from-[#FFB700]/20 to-[#FFB700]/5 rounded-xl mb-4 overflow-hidden group">
                    <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        fill
                    />
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-3 gap-4">
                    <div className="flex items-center gap-1 font-medium">
                        <Calendar size={14} />
                        {project.year}
                    </div>
                    <div className="flex items-center gap-1 font-medium">
                        <Tag size={14} />
                        {categories.find(c => c.id === project.category)?.label}
                    </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed font-medium">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech: string, index: number) => (
                        <span
                            key={index}
                            className="text-xs bg-[#FFB700]/10 text-[#FFB700] px-3 py-1 rounded-full font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex items-center hover:text-[#e6a500] transition-colors font-medium text-sm">
                <Link className="flex items-center" href={project.url} target="_blank">
                    View Demo
                    <ExternalLink size={14} className="ml-1" />
                </Link>
            </div>
        </Card>
    );
};

export default PortofolioCard;
