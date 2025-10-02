// Portfolio.tsx

"use client";

import { useState, useEffect, useRef, useCallback, FC } from "react";
import { Button } from "@/components/ui/button"; 
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

// Path Gambar Asli
import residentialImage from "@/assets/project-residential-1.jpg";
import cafeImage from "@/assets/project-cafe-1.jpg";
import institutionalImage from "@/assets/project-institutional-1.jpg";
import industrialImage from "@/assets/project-institutional-1.jpg"; 

type Category = {
  id: string;
  name: string;
};

type Project = {
  id: number;
  title: string;
  category: string;
  image: StaticImageData;
  description: string;
  location: string;
};

const Portfolio: FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("residential");
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);

  const ITEMS_PER_PAGE = 3;
  const AUTOPLAY_INTERVAL = 5000;
  const THROTTLE_DELAY = 500;

  const autoplayInterval = useRef<NodeJS.Timeout | null>(null);
  const throttleTimeout = useRef<NodeJS.Timeout | null>(null);

  const categories: Category[] = [
    { id: "residential", name: "Residensial" },
    { id: "commercial", name: "Komersial" },
    { id: "institutional", name: "Institusi" },
    { id: "industrial", name: "Industrial" },
  ];

  // PERBAIKAN 1: Semua ID proyek dibuat unik untuk menghilangkan error key
  const projects: Project[] = [
    { id: 1, title: "Rumah Keluarga Modern", category: "residential", image: residentialImage, description: "Desain rumah kontemporer.", location: "Jakarta, Indonesia" },
    { id: 13, title: "Apartemen Urban", category: "residential", image: residentialImage, description: "Hunian vertikal modern.", location: "Jakarta, Indonesia" },
    { id: 14, title: "Townhouse Eksklusif", category: "residential", image: residentialImage, description: "Kompleks hunian privat.", location: "Jakarta, Indonesia" },
    { id: 15, title: "Townhouse Eksklusif", category: "residential", image: residentialImage, description: "Kompleks hunian privat.", location: "Jakarta, Indonesia" },
    { id: 2, title: "Coffee House Urban", category: "commercial", image: cafeImage, description: "Kafe industrial-chic modern.", location: "Bandung, Indonesia" },
    { id: 3, title: "Kompleks Kantor Korporat", category: "institutional", image: institutionalImage, description: "Ruang kerja profesional.", location: "Surabaya, Indonesia" },
    { id: 4, title: "Villa Tepi Pantai", category: "residential", image: residentialImage, description: "Hunian mewah pemandangan laut.", location: "Bali, Indonesia" },
    { id: 5, title: "Perpustakaan Umum", category: "institutional", image: institutionalImage, description: "Pusat pengetahuan modern.", location: "Yogyakarta, Indonesia" },
    { id: 6, title: "Restoran & Lounge", category: "commercial", image: cafeImage, description: "Tempat makan elegan.", location: "Medan, Indonesia" },
    { id: 11, title: "Retail Space Modern", category: "commercial", image: cafeImage, description: "Area perbelanjaan baru.", location: "Medan, Indonesia" },
    { id: 12, title: "Boutique Hotel", category: "commercial", image: cafeImage, description: "Akomodasi penuh gaya.", location: "Medan, Indonesia" },
    { id: 7, title: "Pabrik Manufaktur", category: "industrial", image: industrialImage, description: "Fasilitas produksi efisien.", location: "Semarang, Indonesia" },
    { id: 8, title: "Gudang Logistik", category: "industrial", image: industrialImage, description: "Pusat distribusi modern.", location: "Bekasi, Indonesia" },
    { id: 9, title: "Pusat Data Center", category: "industrial", image: industrialImage, description: "Infrastruktur data terpadu.", location: "Bekasi, Indonesia" },
    { id: 10, title: "Kawasan Industri", category: "industrial", image: industrialImage, description: "Area industri terintegrasi.", location: "Bekasi, Indonesia" },
  ];

  const filteredProjects = projects.filter((project) => project.category === activeCategory);
  const lastPossibleIndex = filteredProjects.length > ITEMS_PER_PAGE ? filteredProjects.length - ITEMS_PER_PAGE : 0;

  // PERBAIKAN 2: Logika `nextPage` dan `prevPage` disempurnakan agar tidak macet
  const nextPage = useCallback(() => {
    if (filteredProjects.length <= ITEMS_PER_PAGE) return;
    setCurrentItemIndex(prev => {
        const nextIndex = prev + ITEMS_PER_PAGE;
        // Jika lompatan berikutnya melebihi batas, pergi ke indeks terakhir yang mungkin
        if (nextIndex > lastPossibleIndex) {
            // Namun jika sudah di akhir, kembali ke awal
            return prev === lastPossibleIndex ? 0 : lastPossibleIndex;
        }
        return nextIndex;
    });
  }, [filteredProjects.length, lastPossibleIndex]);

  const prevPage = useCallback(() => {
    if (filteredProjects.length <= ITEMS_PER_PAGE) return;
    setCurrentItemIndex(prev => {
        const nextIndex = prev - ITEMS_PER_PAGE;
        // Jika lompatan mundur kurang dari 0, pergi ke awal
        if (nextIndex < 0) {
            // Namun jika sudah di awal, pergi ke akhir
            return prev === 0 ? lastPossibleIndex : 0;
        }
        return nextIndex;
    });
  }, [lastPossibleIndex]);

  // Fungsi geser 1 item (untuk hover), tidak berubah
  const slideNextItemOnHover = useCallback(() => {
    if (filteredProjects.length <= ITEMS_PER_PAGE) return;
    setCurrentItemIndex(prev => (prev >= lastPossibleIndex ? 0 : prev + 1));
  }, [filteredProjects.length, lastPossibleIndex]);


  const handleHover = useCallback(() => {
    if (throttleTimeout.current) return;
    throttleTimeout.current = setTimeout(() => {
        slideNextItemOnHover();
        throttleTimeout.current = null;
    }, THROTTLE_DELAY);
  }, [slideNextItemOnHover]);

  useEffect(() => {
    setCurrentItemIndex(0);
  }, [activeCategory]);
  
  // Auto-play sekarang memanggil `nextPage` yang sudah diperbaiki
  useEffect(() => {
    if (filteredProjects.length > ITEMS_PER_PAGE) {
      if (autoplayInterval.current) clearInterval(autoplayInterval.current);
      autoplayInterval.current = setInterval(nextPage, AUTOPLAY_INTERVAL);
    } else {
        if (autoplayInterval.current) clearInterval(autoplayInterval.current);
    }
    return () => {
      if (autoplayInterval.current) clearInterval(autoplayInterval.current);
    };
  }, [nextPage, filteredProjects.length]);

  const handleMouseEnter = () => {
    if (autoplayInterval.current) clearInterval(autoplayInterval.current);
    handleHover();
  };

  const handleMouseLeave = () => {
    if (filteredProjects.length > ITEMS_PER_PAGE) {
      if (autoplayInterval.current) clearInterval(autoplayInterval.current);
      autoplayInterval.current = setInterval(nextPage, AUTOPLAY_INTERVAL);
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };
  
  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
            <span className="text-brand-gold">Portfolio</span> Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Jelajahi koleksi beragam proyek arsitektur kami.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "premium" : "ghost"}
              onClick={() => handleCategoryChange(category.id)}
              className="transition-smooth"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div 
          className="relative max-w-7xl mx-auto" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          {filteredProjects.length > 0 ? (
            <>
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-700 ease-in-out" 
                  style={{ transform: `translateX(-${currentItemIndex * (100 / ITEMS_PER_PAGE)}%)` }}
                >
                  {filteredProjects.map((project) => (
                      <div key={project.id} className="flex-shrink-0" style={{ width: `${100 / ITEMS_PER_PAGE}%` }}>
                        <div className="p-1 md:p-4 h-full">
                           <div className="relative group overflow-hidden rounded-xl shadow-elegant h-full">
                            <Image src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-2 md:p-6 text-white">
                              <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">{project.title}</h3>
                              <p className="text-sm md:text-base mb-2 text-gray-200 hidden sm:block">{project.description}</p>
                              <p className="text-sm md:text-base text-brand-gold font-medium">{project.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {filteredProjects.length > ITEMS_PER_PAGE && (
                <>
                  {/* <button onClick={prevPage} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 md:p-3 transition-smooth z-10">
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </button>
                  <button onClick={nextPage} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 md:p-3 transition-smooth z-10">
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </button> */}
                </>
              )}
            </>
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">Tidak ada proyek untuk kategori ini.</p>
            </div>
          )}
        </div>

        <div className="text-center mt-16">
          <Button variant="premium" size="lg">Lihat Semua Proyek<ExternalLink className="ml-2 h-5 w-5" /></Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;