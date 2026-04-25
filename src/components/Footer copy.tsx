import { APP_CONFIG } from "@/config/app-config";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const whatsappNumber = "6281234567890";
  const whatsappUrl = `https://wa.me/${APP_CONFIG.wa_number}`;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#FF0000] mb-4">TITAN</h3>
            <p className="text-gray-300 mb-4">
              Strong Materials for Stronger Builds. Your trusted supplier for
              quality construction materials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#FF0000] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[#FF0000] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-[#FF0000] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-[#FF0000] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#FF0000] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-[#FF0000] transition-colors"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li>PVC Board</li>
              <li>Polyform</li>
              <li>Impraboard</li>
              <li>Construction Materials</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Jakarta, Indonesia</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>info@titan.com</span>
              </li>
            </ul>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center px-6 py-2.5 bg-[#FF0000] text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <MessageCircle size={18} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Titan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
