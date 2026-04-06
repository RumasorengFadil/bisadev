import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/services", label: "Services" },
        { path: "/blog", label: "Blog" },
        { path: "/contact", label: "Contact" },
    ];

    const isActive = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(path);
    };

    return (
        <nav className="sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-sm border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-[#FFB700] rounded-lg flex items-center justify-center">
                            <span className="font-bold text-[#0F172A]">B</span>
                        </div>
                        <span className="text-background text-xl font-bold">BISADEV</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`transition-colors ${isActive(link.path)
                                        ? "text-[#FFB700] hover:text-white"
                                        : "text-gray-300 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-white/10"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-white/10">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block py-2 px-4 rounded-lg mb-1 transition-colors ${isActive(link.path)
                                        ? "bg-[#FFB700]/10 text-[#FFB700]"
                                        : "text-gray-300 hover:bg-white/5"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
