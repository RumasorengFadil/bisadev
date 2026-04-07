"use client"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function PageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-[#FFB700]" />,
      title: "Email",
      content: "contact@bisadev.com",
      link: "mailto:contact@bisadev.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-[#FFB700]" />,
      title: "Phone",
      content: "+62 851 7813 7881",
      link: "https://wa.me/6285178137881",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#FFB700]" />,
      title: "Office",
      content: "Jakarta, Indonesia",
      link: null,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-[#FFB700]">Connect</span>
            </h1>
            <p className="text-xl text-gray-400">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card className="p-8 bg-background" key={index} >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFB700]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-400 hover:text-[#FFB700] transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.content}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFB700]/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFB700]/50"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFB700]/50"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFB700]/50 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
              <div className="aspect-square bg-gradient-to-br from-[#FFB700]/20 to-[#FFB700]/5 rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
                  alt="Office location"
                  className="w-full h-full object-cover"
                />
              </div>
              <Card className="bg-background p-8">
                <h3 className="font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prefer a Quick Chat?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Schedule a free 30-minute consultation with our team
          </p>
          <Button className="text-primary" variant="outline">
            Schedule a Call
          </Button>
        </div>
      </section>
    </div>
  );
}
