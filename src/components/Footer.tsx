import { APP_CONFIG } from "@/config/app-config";
import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";

export function Footer() {
    return (
        <footer className=" border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Link href="/" className="space-x-2">
                                <div className="relative w-32 h-10">
                                    <Image
                                        src={"/images/app/bisadev-logo.png"}
                                        className=""
                                        alt="bisadev-logo"
                                        fill
                                    />
                                </div>
                            </Link>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Your trusted partner for custom IT solutions and digital innovation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-[#FFB700] transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-[#FFB700] transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-400 hover:text-[#FFB700] transition-colors text-sm">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-[#FFB700] transition-colors text-sm">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/login" className="text-gray-400 hover:text-[#FFB700] transition-colors text-sm">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400 text-sm">Website Development</li>
                            <li className="text-gray-400 text-sm">Digital Marketplace</li>
                            <li className="text-gray-400 text-sm">POS System</li>
                            <li className="text-gray-400 text-sm">IT Consulting</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-2 text-gray-400 text-sm">
                                <Mail size={16} className="mt-1 flex-shrink-0" />
                                <span>{APP_CONFIG.email}</span>
                            </li>
                            <li className="flex items-start space-x-2 text-gray-400 text-sm">
                                <Phone size={16} className="mt-1 flex-shrink-0" />
                                <span>+{APP_CONFIG.wa_number}</span>
                            </li>
                            <li className="flex items-start space-x-2 text-gray-400 text-sm">
                                <MapPin size={16} className="mt-1 flex-shrink-0" />
                                <span>{APP_CONFIG.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social & Copyright */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-gray-400 text-sm">
                        {APP_CONFIG.copyright}. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://www.tiktok.com/@bisadev.id?is_from_webapp=1&sender_device=pc" className="text-gray-400 hover:text-[#FFB700] transition-colors">
                            <FaTiktok size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-[#FFB700] transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="https://www.linkedin.com/company/abhiparaya-mahardika" className="text-gray-400 hover:text-[#FFB700] transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://www.instagram.com/bisadevid/" className="text-gray-400 hover:text-[#FFB700] transition-colors">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
