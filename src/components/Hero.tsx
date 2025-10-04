'use client'
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/6281234567890", "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/hero-architecture.jpg')` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white py-30 lg:py-[unset]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Wujudkan Impian Anda Bersama{" "}
            <span className="text-brand-gold">Arsitek Profesional</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed">
            Layanan desain arsitektur, pemodelan BIM, dan konstruksi terpercaya
            untuk proyek hunian, komersial, dan institusi
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              variant="whatsapp"
              size="lg"
              onClick={openWhatsApp}
              className="group"
            >
              <MessageCircle className="mr-2 h-4 w-4 hidden md:flex" />
              Konsultasi Gratis via WhatsApp
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform hidden md:flex" />
            </Button>
            
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToPortfolio}
              className="group"
            >
              Lihat Portfolio
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-gold mb-1">50+</div>
              <div className="text-sm text-gray-200">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-gold mb-1">5+</div>
              <div className="text-sm text-gray-200">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-gold mb-1">100%</div>
              <div className="text-sm text-gray-200">Kepuasan Klien</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;