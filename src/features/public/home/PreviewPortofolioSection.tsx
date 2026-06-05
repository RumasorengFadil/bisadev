import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects.data";
import PortofolioCard from "@/design-system/organisms/PortofolioCard";
import Link from "next/link";

export default function PreviewPortofolioSection() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-gray-400">Discover our latest successful projects and client success stories</p>
                    </div>
                    <Button variant="secondary" asChild>
                        <Link href="/portfolio">
                            Lihat Semua Portofolio
                        </Link>
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        project.featured &&
                        <PortofolioCard key={idx} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}