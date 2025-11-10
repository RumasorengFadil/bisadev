import { siteConfig } from "@/config/site";
import { ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
    id: string;
    clientName: string;
    projectTitle: string;
    thumbnail: string;
    techStack: string[];
    projectUrl?: string;
    description: string;
}

const projects: Project[] = [
    {
        id: "1",
        clientName: "PT. Edusio Indonesia",
        projectTitle: "Company Profile Website",
        thumbnail: "/images/portofolio/edusio-indonesia.webp",
        techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
        projectUrl: "https://www.edusio.id/",
        description: "Modern and responsive company profile with smooth animations",
    },
    {
        id: "2",
        clientName: "UMKM Wadon Firly",
        projectTitle: "Point of Sale and Accounting Website",
        thumbnail: "/images/portofolio/wadonfirly.webp",
        techStack: ["Laravel", "Vue.js", "MySQL"],
        projectUrl: "https://wadonfirly.my.id/",
        description: "Full-featured online store with payment gateway integration",
    },
    {
        id: "3",
        clientName: "PT. Rotapro Teknikal",
        projectTitle: "Company Profile Website",
        thumbnail: "/images/portofolio/rotapro-technical.webp",
        techStack: ["React", "Node.js", "PostgreSQL"],
        projectUrl: "https://www.rotanademi.co.id/",
        description: "Interactive LMS platform with video streaming and quiz system",
    },
    {
        id: "6",
        clientName: "PT. Brajatama",
        projectTitle: "Company Profile Website",
        thumbnail: "/images/portofolio/brajatama-logistics.webp",
        techStack: ["Vue.js", "Laravel", "Chart.js"],
        projectUrl: "https://brajatama.com/",
        description: "Advanced financial reporting and analytics dashboard",
    },
    {
        id: "4",
        clientName: "Taqqiyah Alimah Munafah",
        projectTitle: "Personal Portofolio Website",
        thumbnail: "/images/portofolio/taqqiah-portofolio.webp",
        techStack: ["Next.js", "TypeScript", "Supabase"],
        projectUrl: "https://www.taqiyyahalimahmunaf.my.id/",
        description: "Comprehensive healthcare management system with real-time updates",
    },
    {
        id: "5",
        clientName: "Rumasoreng",
        projectTitle: "Personal Portofolio Website",
        thumbnail: "/images/portofolio/fadil-rumasoreng.webp",
        techStack: ["React Native", "Firebase", "Redux"],
        projectUrl: "https://www.rumasoreng.com/",
        description: "Cross-platform mobile app with real-time order tracking",
    },
];

const techStackColors: { [key: string]: string } = {
    "Next.js": "bg-slate-100 text-slate-700 border-slate-300",
    "Tailwind CSS": "bg-cyan-50 text-cyan-700 border-cyan-300",
    "Framer Motion": "bg-purple-50 text-purple-700 border-purple-300",
    "Laravel": "bg-red-50 text-red-700 border-red-300",
    "Vue.js": "bg-green-50 text-green-700 border-green-300",
    "MySQL": "bg-blue-50 text-blue-700 border-blue-300",
    "React": "bg-sky-50 text-sky-700 border-sky-300",
    "Node.js": "bg-lime-50 text-lime-700 border-lime-300",
    "PostgreSQL": "bg-indigo-50 text-indigo-700 border-indigo-300",
    "TypeScript": "bg-blue-50 text-blue-700 border-blue-300",
    "Supabase": "bg-emerald-50 text-emerald-700 border-emerald-300",
    "React Native": "bg-cyan-50 text-cyan-700 border-cyan-300",
    "Firebase": "bg-amber-50 text-amber-700 border-amber-300",
    "Redux": "bg-violet-50 text-violet-700 border-violet-300",
    "Chart.js": "bg-pink-50 text-pink-700 border-pink-300",
};

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Thumbnail */}
            <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <div className="relative w-full h-full">
                    <Image
                        src={project.thumbnail}
                        alt={`${project.clientName} - ${project.projectTitle}`}
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm leading-relaxed">{project.description}</p>
                    </div>
                </div>

                {/* Code icon badge */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <Code2 className="w-5 h-5 text-slate-700" />
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Client Name */}
                <p className="text-slate-500 text-sm mb-2">
                    {project.clientName}
                </p>

                {/* Project Title */}
                <h3 className="text-slate-900 mb-4 group-hover:text-primary transition-colors">
                    {project.projectTitle}
                </h3>

                {/* Tech Stack */}
                {/* <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.map((tech, index) => (
                        <span
                            key={index}
                            className={`inline-block px-2.5 py-1 rounded-md text-xs border ${techStackColors[tech] || "bg-slate-100 text-slate-700 border-slate-300"
                                }`}
                        >
                            {tech}
                        </span>
                    ))}
                </div> */}

                {/* View Project Button */}
                {project.projectUrl && (
                    <Link href={project.projectUrl} target="_blank" >
                        <button className="w-full flex bg-primary items-center justify-center gap-2 py-2.5 px-4 border border-slate-300 rounded-lg text-slate-700 hover:bg-primary-dark hover:border-slate-400 transition-all duration-200 group/btn">
                            <span className="text-sm">Lihat Proyek</span>
                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export function PortofolioSection() {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col gap-4 mb-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900">
                        Apa yang Telah Kami Bangun
                    </h2>

                    {/* <h2 className="text-slate-900 text-center mb-4 tracking-tight">
                        Projects We've Built for Our Clients
                    </h2> */}

                    <p className="text-slate-600 text-center mx-auto text-lg max-w-3xl leading-relaxed">
                        Sekumpulan situs web dan sistem yang telah kami kembangkan untuk membantu bisnis berkembang.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-16 text-center">
                    <p className="text-slate-600 mb-6">
                        Tertarik untuk bekerja sama?
                    </p>
                    <Link href={`https://wa.me/${siteConfig.whatsapp}`}>
                        <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary rounded-xl hover:bg-primary-dark transition-all duration-200 shadow-sm hover:shadow-md">
                            <span>Mulai proyek Anda</span>
                            <ExternalLink className="w-4 h-4" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
