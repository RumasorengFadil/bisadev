import { MessageCircle, Sparkles, Code, ShoppingCart, Calendar, BookOpen, Users, MapPin, Video, DollarSign, Boxes } from "lucide-react";
import { useState } from "react";

interface CustomFeature {
  icon: React.ReactNode;
  label: string;
  color: string;
}

const customFeatures: CustomFeature[] = [
  { icon: <BookOpen className="w-4 h-4" />, label: "LMS/Online Class", color: "from-purple-500 to-purple-600" },
//   { icon: <DollarSign className="w-4 h-4" />, label: "Donation Website", color: "from-green-500 to-green-600" },
  { icon: <MapPin className="w-4 h-4" />, label: "Maps Listing", color: "from-red-500 to-red-600" },
  { icon: <Calendar className="w-4 h-4" />, label: "Hotel Booking + Payment", color: "from-blue-500 to-blue-600" },
  { icon: <Users className="w-4 h-4" />, label: "Job Listing + Profile Builder", color: "from-orange-500 to-orange-600" },
  { icon: <BookOpen className="w-4 h-4" />, label: "Bookstore Website", color: "from-amber-500 to-amber-600" },
  { icon: <Calendar className="w-4 h-4" />, label: "Medical Appointment", color: "from-teal-500 to-teal-600" },
  { icon: <Video className="w-4 h-4" />, label: "Video Listing Website", color: "from-pink-500 to-pink-600" },
  { icon: <ShoppingCart className="w-4 h-4" />, label: "E-commerce Custom", color: "from-indigo-500 to-indigo-600" },
  { icon: <Code className="w-4 h-4" />, label: "Custom Dashboard", color: "from-cyan-500 to-cyan-600" },
  { icon: <Boxes className="w-4 h-4" />, label: "Lainnya...", color: "from-cyan-500 to-cyan-600" },
];

function FloatingShape({ delay = 0, duration = 20 }: { delay?: number; duration?: number }) {
  return (
    <div
      className="absolute w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
}

export function CustomServiceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="customServices" className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-secondary to-slate-900 overflow-hidden scroll-m-20">
      {/* Floating Background Shapes */}
      <FloatingShape delay={0} duration={20} />
      <FloatingShape delay={5} duration={25} />
      <FloatingShape delay={10} duration={30} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Icon Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span className="text-blue-200 text-sm">Custom Solutions</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl">
            Ingin Fitur Custom?
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-blue-400 to-blue-400 rounded-full"></div>
            <Code className="w-5 h-5 text-blue-400" />
            <div className="w-12 h-1 bg-gradient-to-l from-transparent via-blue-400 to-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-blue-100/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          Kami siap membangun website sesuai kebutuhan bisnis Anda dengan fitur-fitur khusus yang disesuaikan. 
          Tidak ada batasan kreativitas, diskusikan ide Anda dan kami wujudkan!
        </p>

        {/* Feature Tags - Animated Grid */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {customFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`
                    relative px-5 py-3 rounded-xl backdrop-blur-md
                    bg-white/10 border border-white/20
                    hover:bg-white/15 hover:border-white/30
                    transition-all duration-300 cursor-pointer
                    ${hoveredIndex === index ? 'scale-110 shadow-2xl' : 'scale-100'}
                  `}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Gradient Glow Effect */}
                  {hoveredIndex === index && (
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.color} opacity-20 blur-xl -z-10`}></div>
                  )}
                  
                  <div className="flex items-center gap-2 text-white">
                    <div className={`p-1.5 rounded-lg bg-gradient-to-br ${feature.color} shadow-lg`}>
                      {feature.icon}
                    </div>
                    <span className="text-sm whitespace-nowrap">{feature.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Box */}
        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            {/* Gradient Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <p className="text-white mb-2">
                    Siap untuk memulai?
                  </p>
                  <p className="text-blue-200/80 text-sm">
                    Chat dengan kami dan diskusikan kebutuhan bisnis web Anda
                  </p>
                </div>
                
                <button className="group/btn relative px-8 py-4 bg-gradient-to-r from-primary to-primary-dark hover:from-primary hover:to-secondary text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 whitespace-nowrap">
                  <MessageCircle className="w-5 h-5 group-hover/btn:animate-bounce" />
                  <span>Chat Sekarang Juga</span>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-blue-200/60 text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Konsultasi gratis untuk proyek custom Anda
            </span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
