import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, Globe, Heart, Shield, Target, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function PageClient() {
  const values = [
    { icon: <Zap />, title: "Innovation", description: "We embrace cutting-edge technologies and creative solutions" },
    { icon: <Shield />, title: "Integrity", description: "Honest, transparent, and ethical in everything we do" },
    { icon: <Heart />, title: "Excellence", description: "Committed to delivering the highest quality work" },
    { icon: <Globe />, title: "Collaboration", description: "We work together with clients as true partners" },
  ];

  const team = [
    { name: "Tolkhah Muzzaqqi Arrasyi", role: "Design Lead", image: "/images/teams/tolkhah-mozaqqi-arrasyi.jpeg" },
    { name: "Fadil Hijayat Rumasoreng", role: "Tech Lead", image: "/images/teams/fadil-hijayat-rumasoreng.jpg" },
    { name: "Zarif Afzal Ramadhan", role: "Marketing Lead", image: "/images/teams/zarif-afzal-ramadhan.jpeg" },
    { name: "Dhafa Khalish Munawar", role: "Bussiness Dev Lead", image: "/images/teams/dhafa-khalish-munawar.png" },
  ];

  const stats = [
    { number: "5+", label: "Projects Completed" },
    { number: "3+", label: "Happy Clients" },
    { number: "1+", label: "Years Experience" },
    { number: "5+", label: "Team Members" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building the Future of <span className="text-[#FFB700]">Digital Business</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium">
              BISADEV is a digital IT consulting company dedicated to transforming businesses through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div className="text-center" key={index}>
                <div className="text-4xl md:text-5xl font-bold text-[#FFB700] mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-400">
                <p className="font-medium">
                  Founded in 2025, BISADEV began with a simple vision: to help businesses harness the power of technology to achieve their goals and grow sustainably.
                </p>
                <p className="font-medium">
                  What started as a small team of passionate developers has grown into a full-service digital consulting firm. We've helped dozens of clients across various industries build their digital presence and streamline their operations.
                </p>
                <p className="font-medium">
                  Today, we're expanding our offerings to include innovative products like our Digital Marketplace and POS System, designed to empower businesses of all sizes.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#FFB700]/20 to-transparent rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-background p-8">
              <div className="w-16 h-16 bg-[#FFB700]/10 rounded-2xl flex items-center justify-center mb-6 text-[#FFB700]">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-400 font-medium">
                To be the leading digital transformation partner in Southeast Asia, empowering businesses with innovative technology solutions that drive growth and create lasting value.
              </p>
            </Card>
            <Card className="bg-background p-8">
              <div className="w-16 h-16 bg-[#FFB700]/10 rounded-2xl flex items-center justify-center mb-6 text-[#FFB700]">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400 font-medium">
                To deliver exceptional, custom-built digital solutions that exceed our clients' expectations. We strive to build long-term partnerships based on trust, quality, and measurable results.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-medium">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card className="p-8 bg-background h-full" key={index}>
                <div className="w-12 h-12 bg-[#FFB700]/10 rounded-xl flex items-center justify-center mb-4 text-[#FFB700]">
                  {value.icon}
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm font-medium text-gray-400">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-medium">
              The talented people behind BISADEV
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card className="p-8 bg-background" key={index}>
                <div className="relative aspect-square bg-gradient-to-br from-[#FFB700]/20 to-transparent rounded-xl mb-4 overflow-hidden">
                  <Image src={member.image} alt={member.name} className="w-full h-full object-center" fill />
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-[#FFB700] font-medium">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-gray-400 mb-8 font-medium">
            We're always looking for talented individuals who share our passion for innovation
          </p>
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
