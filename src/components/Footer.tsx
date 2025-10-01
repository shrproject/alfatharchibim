'use client'
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import alfathLogo from "@/assets/alfath-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Kontak", href: "#contact" }
  ];

  const services = [
    { name: "Desain Arsitektur", href: "#" },
    { name: "Pemodelan BIM", href: "#" },
    { name: "Manajemen Konstruksi", href: "#" },
    { name: "Desain Interior", href: "#" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src={alfathLogo}
                alt="Alfath Archibim"
                className="h-10 w-auto filter brightness-0 invert"
              />
              <span className="text-xl font-bold">Alfath Archibim</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Layanan desain arsitektur dan konstruksi profesional yang memberikan 
              solusi inovatif untuk proyek residensial, komersial, dan institusi.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-white/10 hover:bg-brand-gold/20 p-2 rounded-lg transition-smooth"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-gold">
              Tautan Cepat
            </h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-brand-gold transition-smooth"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-gold">
              Layanan Kami
            </h3>
            <nav className="space-y-3">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="block text-gray-300 hover:text-brand-gold transition-smooth"
                >
                  {service.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-gold">
              Info Kontak
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-gold mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Jl. Contoh Alamat No. 123<br />
                  Jakarta, Indonesia 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-gold flex-shrink-0" />
                <a
                  href="tel:+6281234567890"
                  className="text-gray-300 hover:text-brand-gold transition-smooth"
                >
                  +62 812-3456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-gold flex-shrink-0" />
                <a
                  href="mailto:info@alfatharchibim.com"
                  className="text-gray-300 hover:text-brand-gold transition-smooth"
                >
                  info@alfatharchibim.com
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-6">
              <button
                onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-smooth w-full"
              >
                Chat di WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Alfath Archibim. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-brand-gold transition-smooth text-sm"
              >
                Kebijakan Privasi
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-brand-gold transition-smooth text-sm"
              >
                Syarat Layanan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;