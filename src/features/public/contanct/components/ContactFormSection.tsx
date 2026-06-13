"use client"
import { APP_CONFIG } from "@/config/app-config";
import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactFormSection() {
    const whatsappUrl = `https://wa.me/${APP_CONFIG.wa_number}`;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0A%0AMessage:%0A${formData.message}`;
        window.open(`${whatsappUrl}?text=${message}`, "_blank");
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 font-medium border-2 border-gray-300 rounded-lg focus:bg-primary focus:outline-none transition-colors"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 font-medium border-2 border-gray-300 rounded-lg focus:bg-primary focus:outline-none transition-colors"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 font-medium border-2 border-gray-300 rounded-lg focus:bg-primary focus:outline-none transition-colors"
                            placeholder="+62 812 3456 7890"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                            Subject *
                        </label>
                        <select
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 font-medium border-2 border-gray-300 rounded-lg focus:bg-primary focus:outline-none transition-colors"
                        >
                            <option value="">Select a subject</option>
                            <option value="product-inquiry">Product Inquiry</option>
                            <option value="price-quote">Price Quote</option>
                            <option value="order-status">Order Status</option>
                            <option value="general-question">General Question</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                            Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-4 py-3 font-medium border-2 border-gray-300 rounded-lg focus:bg-primary focus:outline-none transition-colors resize-none"
                            placeholder="Tell us more about your requirements..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full inline-flex items-center font-medium justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-lg"
                    >
                        <Send size={20} className="mr-2" />
                        Send Message via WhatsApp
                    </button>
                </form>
            </div>
        </div>
    )
}