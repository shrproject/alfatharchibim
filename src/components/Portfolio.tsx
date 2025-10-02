

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
  // 3. Tampilan awal diubah ke kategori pertama
  const [activeCategory, setActiveCategory] = useState<string>("residential");
  const [currentPage, setCurrentPage] = useState<number>(0);

  // --- Konfigurasi ---
  const ITEMS_PER_PAGE = 3;
  const AUTOPLAY_INTERVAL = 5000;
  const THROTTLE_DELAY = 500;

  // --- Ref dengan Tipe ---
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null);
  const throttleTimeout = useRef<NodeJS.Timeout | null>(null);

  // 1. Kategori "all" dihapus
  // 2. Kategori "industrial" ditambahkan
  const categories: Category[] = [
    { id: "residential", name: "Residensial" },
    { id: "commercial", name: "Komersial" },
    { id: "institutional", name: "Institusi" },
    { id: "industrial", name: "Industrial" },
  ];

  const projects: Project[] = [
    { id: 1, title: "Rumah Keluarga Modern", category: "residential", image: residentialImage, description: "Desain rumah kontemporer.", location: "Jakarta, Indonesia" },
    { id: 13, title: "Rumah Keluarga Modern", category: "residential", image: residentialImage, description: "Desain rumah kontemporer.", location: "Jakarta, Indonesia" },
    { id: 4, title: "Rumah Keluarga Modern", category: "residential", image: residentialImage, description: "Desain rumah kontemporer.", location: "Jakarta, Indonesia" },
    { id: 2, title: "Coffee House Urban", category: "commercial", image: cafeImage, description: "Kafe industrial-chic modern.", location: "Bandung, Indonesia" },
    { id: 3, title: "Kompleks Kantor Korporat", category: "institutional", image: institutionalImage, description: "Ruang kerja profesional.", location: "Surabaya, Indonesia" },
    { id: 4, title: "Villa Tepi Pantai", category: "residential", image: residentialImage, description: "Hunian mewah pemandangan laut.", location: "Bali, Indonesia" },
    { id: 5, title: "Perpustakaan Umum", category: "institutional", image: institutionalImage, description: "Pusat pengetahuan modern.", location: "Yogyakarta, Indonesia" },
    { id: 6, title: "Restoran & Lounge", category: "commercial", image: cafeImage, description: "Tempat makan elegan.", location: "Medan, Indonesia" },
    { id: 11, title: "Restoran & Lounge", category: "commercial", image: cafeImage, description: "Tempat makan elegan.", location: "Medan, Indonesia" },
    { id: 12, title: "Restoran & Lounge", category: "commercial", image: cafeImage, description: "Tempat makan elegan.", location: "Medan, Indonesia" },
    // 2. Contoh proyek industrial ditambahkan
    { id: 7, title: "Pabrik Manufaktur", category: "industrial", image: industrialImage, description: "Fasilitas produksi efisien.", location: "Semarang, Indonesia" },
    { id: 8, title: "Gudang Logistik", category: "industrial", image: industrialImage, description: "Pusat distribusi modern.", location: "Bekasi, Indonesia" },
    { id: 9, title: "Gudang Logistik", category: "industrial", image: industrialImage, description: "Pusat distribusi modern.", location: "Bekasi, Indonesia" },
    { id: 10, title: "Gudang Logistik", category: "industrial", image: industrialImage, description: "Pusat distribusi modern.", location: "Bekasi, Indonesia" },
  ];

  // Logika filter disederhanakan karena tidak ada "all"
  const filteredProjects = projects.filter((project) => project.category === activeCategory);
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const nextPage = useCallback(() => {
    if (totalPages > 1) {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }
  }, [totalPages]);

  const prevPage = () => {
    if (totalPages > 1) {
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    }
  };

  const handleHoverNextPage = useCallback(() => {
    if (throttleTimeout.current) return;
    nextPage();
    throttleTimeout.current = setTimeout(() => {
      throttleTimeout.current = null;
    }, THROTTLE_DELAY);
  }, [nextPage]);

  useEffect(() => {
    // Reset halaman saat filter berubah untuk menghindari bug tampilan kosong
    setCurrentPage(0);
    
    if (totalPages > 1) {
      // Hapus interval lama sebelum set yang baru
      if (autoplayInterval.current) clearInterval(autoplayInterval.current);
      autoplayInterval.current = setInterval(nextPage, AUTOPLAY_INTERVAL);
    } else {
       // Hentikan interval jika hanya ada satu halaman atau kurang
       if (autoplayInterval.current) clearInterval(autoplayInterval.current);
    }
  
    return () => {
      if (autoplayInterval.current) clearInterval(autoplayInterval.current);
    };
  }, [nextPage, totalPages, activeCategory]);

  const handleMouseEnter = () => {
    if (autoplayInterval.current) clearInterval(autoplayInterval.current);
    handleHoverNextPage();
  };

  const handleMouseLeave = () => {
    if (totalPages > 1) {
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

        <div className="relative max-w-7xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {filteredProjects.length > 0 ? (
            <>
              <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
                  {Array.from({ length: totalPages }).map((_, pageIndex) => (
                    <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-3 gap-2 md:gap-8">
                      {filteredProjects
                        .slice(pageIndex * ITEMS_PER_PAGE, pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE)
                        .map((project) => (
                          <div key={project.id} className="relative group overflow-hidden rounded-xl shadow-elegant">
                            <Image src={project.image} alt={project.title} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-2 md:p-6 text-white">
                              <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">{project.title}</h3>
                              <p className="text-sm md:text-base mb-2 text-gray-200 hidden sm:block">{project.description}</p>
                              <p className="text-sm md:text-base text-brand-gold font-medium">{project.location}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>

              {totalPages > 1 && (
                <>
                  <button onClick={prevPage} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 md:p-3 transition-smooth z-10">
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </button>
                  <button onClick={nextPage} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 md:p-3 transition-smooth z-10">
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </button>
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