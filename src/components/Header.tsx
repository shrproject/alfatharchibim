// Header.tsx (Versi Baru dengan react-scroll)

'use client'
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import alfathLogo from "@/assets/alfath-logo.png";
import Image from "next/image";
import { Link } from "react-scroll"; // <-- 1. Import Link dari react-scroll

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   const navItems = [
    { name: "Beranda", href: "home" },
    { name: "Profile", href: "about" },
    { name: "Portfolio", href: "portfolio" },
    { name: "Produk Kami", href: "templates" },
    { name: "Blog", href: "blog" },
    { name: "Kontak", href: "footer" },
  ];

  // Fungsi handleNavClick sudah tidak diperlukan lagi

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-elegant"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src={alfathLogo}
              alt="Alfath Archibim"
              className="h-12 w-auto"
            />
            <span className={`text-xl font-bold transition-smooth ${
              isScrolled ? "text-brand-dark" : "text-white"
            }`}>
              Alfath Archibim
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              // <-- 3. Ganti <a> dengan <Link>
              <Link
                key={item.name}
                to={item.href} // 'to' bukan 'href'
                spy={true} // Untuk menandai link yang aktif
                smooth={true} // Efek smooth scroll
                offset={0} // Jarak offset dari atas (agar tidak tertutup header)
                duration={800} // <-- KUNCI UTAMA: Durasi animasi (ms), buat lebih lambat
                onClick={() => setIsMenuOpen(false)} // Tutup menu jika di mobile
                className={`font-bold transition-smooth hover:text-brand-gold cursor-pointer ${
                  isScrolled ? "text-brand-dark" : "text-white"
                }`}
                activeClass="text-brand-gold" // Kelas CSS saat link aktif
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-brand-dark" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-brand-dark" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200/20">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                // <-- 4. Ganti <a> dengan <Link> di sini juga
                <Link
                  key={item.name}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)} // Tutup menu setelah klik
                  className={`font-bold transition-smooth hover:text-brand-gold cursor-pointer ${
                     isScrolled ? "text-brand-dark" : "text-gray-800"
                  }`}
                  activeClass="text-brand-gold"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;