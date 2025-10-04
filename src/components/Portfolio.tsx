// Portfolio.tsx

"use client";

import { useState, useCallback, FC, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// --- Path Gambar ---
// import residentialImage1 from "@/assets/Residence/1.jpg";
// import residentialImage2 from "@/assets/Residence/3.jpg";
// import residentialImage3 from "@/assets/Residence/4.jpg";
// import residentialImage4 from "@/assets/Residence/6.jpg";
// import residentialImage5 from "@/assets/Residence/9.1.jpg";
// import residentialImage6 from "@/assets/Residence/10.jpg";
// import residentialImage8 from "@/assets/Residence/BC/6.jpg";
// import residentialImage9 from "@/assets/Residence/BC/BC HOUSE 1 - 1.jpg";
// import residentialImage10 from "@/assets/Residence/BC/BC HOUSE 1 - 3.jpg";
// import residentialImage11 from "@/assets/Residence/BC/BC HOUSE 1 - 4.jpg";
// import residentialImage12 from "@/assets/Residence/BC/BC HOUSE 1 - 5.jpg";
// import residentialImage13 from "@/assets/Residence/BC/BC HOUSE 1 - 6.jpg";
// import residentialImage14 from "@/assets/Residence/BC/1.jpg";
// import residentialImage15 from "@/assets/Residence/BC/4.jpg";
// import residentialImage16 from "@/assets/Residence/BC/5.jpg";
// import residentialImage17 from "@/assets/Residence/Kos_Bayu/1 (1).jpg";
// import residentialImage18 from "@/assets/Residence/Kos_Bayu/2.jpg";
// import residentialImage19 from "@/assets/Residence/Kos_Bayu/3.1.jpg";
// import residentialImage20 from "@/assets/Residence/Kos_Bayu/3.jpg";
// import residentialImage21 from "@/assets/Residence/Kos_Bayu/4.1.jpg";
// import residentialImage22 from "@/assets/Residence/Kos_Bayu/4.jpg";
// import residentialImage23 from "@/assets/Residence/Kos_Bayu/5.jpg";
// import residentialImage24 from "@/assets/Residence/Kos_Bayu/6.jpg";
// import residentialImage7 from "@/assets/Residence/11.1.jpg";
import commercialImage1 from "@/assets/project-cafe-1.jpg";
import institutionalImage1 from "@/assets/project-institutional-1.jpg";
import industrialImage1 from "@/assets/project-institutional-1.jpg";
const residentialImage7 = "https://i.ibb.co.com/JFGX9xyX/1.jpg";
const residentialImage1 = "https://i.ibb.co.com/TD0Qn5fh/11-1.jpg";
const residentialImage2 = "https://i.ibb.co.com/7dzzNdp3/3.jpg";
const residentialImage3 = "https://i.ibb.co.com/gQ9D9RN/4.jpg";
const residentialImage4 = "https://i.ibb.co.com/nsVYVvzJ/6.jpg";
const residentialImage5 = "https://i.ibb.co.com/gb8Mw0gz/10.jpg";
const residentialImage6 = "https://i.ibb.co.com/k2h9FHsH/9-1.jpg";
const residentialImage8 = "https://i.ibb.co.com/k2h9FHsH/9-1.jpg";

// --- Definisi Tipe Data ---
type Project = {
  id: number;
  title: string;
  image:  string;
  lokasi: string;
};

type SubCategoryData = {
  [subCategoryName: string]: Project[];
};

type PortfolioData = {
  [categoryName: string]: SubCategoryData;
};

type ModalState = {
  subCategoryName: string;
  selectedIndex: number;
} | null;


// --- Struktur Data ---
const portfolioData: PortfolioData = {
  "residential": {
    "Dev House": [
      { id: 101, title: "Desain rumah kontemporer", image: residentialImage1, lokasi: "Jakarta, Indonesia" },
      { id: 102, title: "Rumah Tropis Minimalis", image: residentialImage2, lokasi: "Bandung, Indonesia" },
      { id: 103, title: "Rumah Tropis Minimalis", image: residentialImage3, lokasi: "Bandung, Indonesia" },
      { id: 104, title: "Rumah Tropis Minimalis", image: residentialImage4, lokasi: "Bandung, Indonesia" },
      { id: 105, title: "Rumah Tropis Minimalis", image: residentialImage5, lokasi: "Bandung, Indonesia" },
      { id: 106, title: "Rumah Tropis Minimalis", image: residentialImage6, lokasi: "Bandung, Indonesia" },
      { id: 107, title: "Rumah Tropis Minimalis", image: residentialImage7, lokasi: "Bandung, Indonesia" },
    ],
    "BC HOUSE": [
      { id: 201, title: "Gambar Perencanaan Rumah Tinggal Bayu Caroko", image: "https://i.ibb.co.com/hQtQ7D3/1.jpg", lokasi: "Perumahan The Orchard Town House , Ambon Maluku" },
      { id: 202, title: "Green Valley Residence", image: "https://i.ibb.co.com/MDDWvKMK/4.jpg", lokasi: "Perumahan The Orchard Town House , Ambon Maluku" },
      { id: 204, title: "Citra Garden", image: "https://i.ibb.co.com/WvMSTgrz/5.jpg", lokasi: "Perumahan The Orchard Town House , Ambon Maluku" },
      { id: 205, title: "Citra Garden", image: "https://i.ibb.co.com/LDBkGNf9/BC-HOUSE-1-1.jpg", lokasi: "Perumahan The Orchard Town House , Ambon Maluku" },
      { id: 206, title: "Citra Garden", image: "https://i.ibb.co.com/3y5dH3MS/BC-HOUSE-1-4.jpg", lokasi: "Perumahan The Orchard Town House , Ambon Maluku" },
      { id: 207, title: "Citra Garden", image: "https://i.ibb.co.com/TBznZy5r/BC-HOUSE-1-3.jpg", lokasi: "Perumahan The Orchard Town House , Ambon Maluku" },
      { id: 208, title: "Citra Garden", image: "https://i.ibb.co.com/0jJPCcj5/BC-HOUSE-1-6.jpg", lokasi: "Perumahan The Orchard Town House , Ambon Maluku" },
      { id: 209, title: "Citra Garden", image:"https://i.ibb.co.com/8nT7ndjN/BC-HOUSE-1-5.jpg", lokasi: "Perumahan The Orchard Town House , Ambon Maluku" },
      // { id: 2010, title: "Citra Garden", image: residentialImage16, lokasi: "Perumahan The Orchard Town House , Ambon Maluku" },
    ],
   
    "Kadu Little Garden": [
      { id: 401, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/cKLqM9Cd/1.jpg", lokasi: "Cikupa, Kec. Cikupa, Kab. Tangerang, Banten" },
      { id: 402, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/5hsz9QK6/3.jpg", lokasi: "Cikupa, Kec. Cikupa, Kab. Tangerang, Banten" },
      { id: 403, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/G4QNhqyH/2.jpg", lokasi: "Cikupa, Kec. Cikupa, Kab. Tangerang, Banten" },
      { id: 404, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/kY211tW/4.jpg", lokasi: "Cikupa, Kec. Cikupa, Kab. Tangerang, Banten" },
      { id: 405, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/LdqxhVNv/7.jpg", lokasi: "Cikupa, Kec. Cikupa, Kab. Tangerang, Banten" },    
      { id: 406, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/Z1T6VFkY/Denah-lantai-1.jpg", lokasi: "Cikupa, Kec. Cikupa, Kab. Tangerang, Banten" },    
      { id: 407, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/7tYsb6mW/Potongan-S02.jpg", lokasi: "Cikupa, Kec. Cikupa, Kab. Tangerang, Banten" },    
      { id: 408, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/SDFwM53W/Denah-lantai-2.jpg", lokasi: "Cikupa, Kec. Cikupa, Kab. Tangerang, Banten" },    
    ],
    "HF House": [
      { id: 801, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/nMVzzqN3/1-1.jpg", lokasi: "Bali, Indonesia" },
      { id: 802, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/wrZD7fHY/2.jpg", lokasi: "Bali, Indonesia" },
      { id: 803, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/Pv7Tthdy/4-1.jpg", lokasi: "Bali, Indonesia" },
    ],
    "ON House": [
      { id: 901, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/zhN8t3v4/INTERIOR-2-Photo.jpg", lokasi: "Bali, Indonesia" },
      { id: 902, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/js2hCXd/INTERIOR-4-Photo.jpg", lokasi: "Bali, Indonesia" },
      { id: 903, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/3yChRdt2/3.jpg", lokasi: "Bali, Indonesia" },
      { id: 904, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/gKLMv9g/INTERIOR-6-Photo.jpg", lokasi: "Bali, Indonesia" },
      { id: 905, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/r2j3sh7H/1.jpg", lokasi: "Bali, Indonesia" },
      { id: 905, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/zVYfrt1z/2.jpg", lokasi: "Bali, Indonesia" },
      { id: 906, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/N61xh6Xd/INTERIOR-1-Photo.jpg", lokasi: "Bali, Indonesia" },
    ],
    "YT House": [
      { id: 901, title: "Design Renovasi Rumah", image: "https://i.ibb.co.com/zW9JLGBQ/8.png", lokasi: "Perumahan Griya Sakinah , Temanggung" },
      { id: 902, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/8F0wHCY/1.png", lokasi: "Bali, Indonesia" },
      { id: 903, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/gLqm9Q0M/5.png", lokasi: "Bali, Indonesia" },
      { id: 904, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/TM3H2p3j/4.png", lokasi: "Bali, Indonesia" },
      { id: 905, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/svzYpKKW/3.png", lokasi: "Bali, Indonesia" },
      { id: 905, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/5XyLhNHM/2.png", lokasi: "Bali, Indonesia" },
      { id: 906, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/DPTWnS2q/7.png", lokasi: "Bali, Indonesia" },
      { id: 907, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/hRLVvfV5/6.png", lokasi: "Bali, Indonesia" },
      { id: 908, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/8nRc7DjN/9.png", lokasi: "Bali, Indonesia" },
    ],
    "Omah Bagus": [
      { id: 901, title: "Design Kantor", image: "https://i.ibb.co.com/TMMpVzrN/1.jpg", lokasi: "Yogyakarta" },
      { id: 902, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/vCJY9wnD/Exterior-1.jpg", lokasi: "Bali, Indonesia" },
      { id: 903, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/mF9QwGxf/Dapur-1.jpg", lokasi: "Bali, Indonesia" },
      { id: 904, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/NdgWp429/EXTERIOR-3.jpg", lokasi: "Bali, Indonesia" },
      { id: 905, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/tpM1ydMj/Exterior-2.jpg", lokasi: "Bali, Indonesia" },
      { id: 905, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/99R5rsnM/Mushollah.jpg", lokasi: "Bali, Indonesia" },
      { id: 906, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/nq46bDCW/R-Belakang.jpg", lokasi: "Bali, Indonesia" },
      { id: 907, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/gL98J0mv/Taman.jpg", lokasi: "Bali, Indonesia" },
      { id: 908, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/Ldfk9gkz/R-Keluarga.jpg", lokasi: "Bali, Indonesia" },
      { id: 909, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/qLJL4sVp/Toko.jpg", lokasi: "Bali, Indonesia" },
      { id: 910, title: "Villa Tepi Pantai", image: "https://i.ibb.co.com/gbLM7nmX/Toko-1.jpg", lokasi: "Bali, Indonesia" },
    ],
  },
  "commercial": {
    // "Ruko": [{ id: 401, title: "Ruko Business Park", image: commercialImage1, lokasi: "Jakarta, Indonesia" }],
    "Small Caffe": [
      { id: 501, title: "Design Caffe Modern", image: "https://i.ibb.co.com/MyRZFJ9m/1.jpg", lokasi: "Sukoharjo" },
      { id: 502, title: "Creative Hub Space", image: "https://i.ibb.co.com/CK841rnM/3.jpg", lokasi: "Jakarta, Indonesia" },
      { id: 502, title: "Creative Hub Space", image: "https://i.ibb.co.com/pjW08Hcn/4-0.jpg", lokasi: "Jakarta, Indonesia" },
      { id: 502, title: "Creative Hub Space", image: "https://i.ibb.co.com/Nnd0v5Mf/5.jpg", lokasi: "Jakarta, Indonesia" },
      { id: 502, title: "Creative Hub Space", image: "https://i.ibb.co.com/7dvqJ6Kj/BAR-1.jpg", lokasi: "Jakarta, Indonesia" },
      { id: 502, title: "Creative Hub Space", image:"https://i.ibb.co.com/BKBDn3vP/BAR.jpg", lokasi: "Jakarta, Indonesia" },
      { id: 502, title: "Creative Hub Space", image:"https://i.ibb.co.com/TqKRB1Wz/MEJA-KURSI-1.jpg", lokasi: "Jakarta, Indonesia" },
      { id: 502, title: "Creative Hub Space", image:"https://i.ibb.co.com/TqJqBxD4/IMG-20201219-WA0025.jpg", lokasi: "Jakarta, Indonesia" },
    ],
     "Kos Pak Bayu ": [
      { id: 301, title: "Design Hunian Kos ", image: "https://i.ibb.co.com/RpgMWzfM/5.jpg", lokasi: "Sukoharjo" },
      { id: 302, title: "The Peak Apartment", image: "https://i.ibb.co.com/60dtCzBC/6.jpg", lokasi: "Jakarta, Indonesia" },
      // { id: 303, title: "The Peak Apartment", image: residentialImage19, lokasi: "Jakarta, Indonesia" },
      // { id: 304, title: "The Peak Apartment", image: residentialImage20, lokasi: "Jakarta, Indonesia" },
      { id: 305, title: "The Peak Apartment", image: "https://i.ibb.co.com/nNyPttP9/1-1.jpg", lokasi: "Jakarta, Indonesia" },
      // { id: 306, title: "The Peak Apartment", image: residentialImage22, lokasi: "Jakarta, Indonesia" },
      { id: 307, title: "The Peak Apartment", image: "https://i.ibb.co.com/CNyhV6F/2.jpg", lokasi: "Jakarta, Indonesia" },
      { id: 308, title: "The Peak Apartment", image: "https://i.ibb.co.com/fV7m0zrF/4.jpg", lokasi: "Jakarta, Indonesia" },
    ],
  },
  "BIM": {
    "Sekolah": [{ id: 701, title: "Sekolah Harapan Bangsa", image:"https://i.ibb.co.com/fV7m0zrF/4.jpg", lokasi: "Jakarta, Indonesia" }],
    "Rumah Sakit": [{ id: 801, title: "RS Mitra Keluarga", image: "https://i.ibb.co.com/fV7m0zrF/4.jpg", lokasi: "Jakarta, Indonesia" }],
  },
  // "industrial": {
  //   "Gudang": [{ id: 901, title: "Gudang Logistik Sentral", image: industrialImage1, lokasi: "Jakarta, Indonesia" }],
  //   "Pabrik": [{ id: 1001, title: "Pabrik Manufaktur Jaya", image: industrialImage1, lokasi: "Jakarta, Indonesia" }],
  // }
};


const Portfolio: FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("residential");

  const [subCategoryIndexes, setSubCategoryIndexes] = useState(() => {
    const initialState: { [key: string]: number } = {};
    Object.values(portfolioData).forEach(subCategories => {
      Object.keys(subCategories).forEach(subCategoryName => {
        initialState[subCategoryName] = 0;
      });
    });
    return initialState;
  });

  const [modalState, setModalState] = useState<ModalState>(null);
  const [mainCarouselIndex, setMainCarouselIndex] = useState<number>(0);
  
  // --- AWAL PERUBAHAN ---
  // State untuk menyimpan jumlah item per halaman secara dinamis
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth < 768) { // Mobile
            setItemsPerPage(1);
        } else if (window.innerWidth < 1024) { // Tablet
            setItemsPerPage(2);
        } else { // Desktop
            setItemsPerPage(3);
        }
    };

    // Panggil sekali saat komponen dimuat
    handleResize();

    // Tambahkan event listener untuk memantau perubahan ukuran window
    window.addEventListener('resize', handleResize);

    // Hapus event listener saat komponen dibongkar untuk mencegah memory leak
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // --- AKHIR PERUBAHAN ---

  const handleImageChange = useCallback((subCategoryName: string, direction: 'next' | 'prev') => {
    const projects = portfolioData[activeCategory as keyof typeof portfolioData][subCategoryName];
    if (!projects || projects.length <= 1) return;
    setSubCategoryIndexes(prevIndexes => {
      const currentIndex = prevIndexes[subCategoryName];
      const lastIndex = projects.length - 1;
      let newIndex = (direction === 'next')
        ? (currentIndex >= lastIndex ? 0 : currentIndex + 1)
        : (currentIndex <= 0 ? lastIndex : currentIndex - 1);
      return { ...prevIndexes, [subCategoryName]: newIndex };
    });
  }, [activeCategory]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setMainCarouselIndex(0);
  };

  const openModal = (subCategoryName: string, selectedIndex: number) => {
    setModalState({ subCategoryName, selectedIndex });
  };

  const closeModal = () => setModalState(null);

  const handleModalNav = (direction: 'next' | 'prev') => {
    if (!modalState) return;
    const { subCategoryName } = modalState;
    const projects = portfolioData[activeCategory as keyof typeof portfolioData][subCategoryName];
    const lastIndex = projects.length - 1;
    setModalState(current => {
      if (!current) return null;
      let newIndex = (direction === 'next')
        ? (current.selectedIndex >= lastIndex ? 0 : current.selectedIndex + 1)
        : (current.selectedIndex <= 0 ? lastIndex : current.selectedIndex - 1);
      return { ...current, selectedIndex: newIndex };
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!modalState) return;
      if (event.key === 'ArrowRight') handleModalNav('next');
      else if (event.key === 'ArrowLeft') handleModalNav('prev');
      else if (event.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalState, activeCategory]);

  const subCategoriesToShow = Object.entries(portfolioData[activeCategory as keyof typeof portfolioData]);

  // --- PERUBAHAN: Menggunakan state 'itemsPerPage' ---
  const lastPossibleMainIndex = subCategoriesToShow.length > itemsPerPage ? subCategoriesToShow.length - itemsPerPage : 0;

  const nextMainItem = () => {
    setMainCarouselIndex(p => p >= lastPossibleMainIndex ? 0 : p + 1);
  };
  const prevMainItem = () => {
    setMainCarouselIndex(p => p <= 0 ? lastPossibleMainIndex : p - 1);
  };

  const currentModalProject = modalState ? portfolioData[activeCategory as keyof typeof portfolioData][modalState.subCategoryName][modalState.selectedIndex] : null;

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark">
            <span className="text-brand-gold">Portfolio</span> Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Jelajahi koleksi beragam proyek arsitektur kami.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-5">
          {Object.keys(portfolioData).map((categoryName) => (
            <Button
              key={categoryName}
              variant={activeCategory === categoryName ? "premium" : "ghost"}
              onClick={() => handleCategoryChange(categoryName)}
              className="transition-smooth capitalize"
            >
              {categoryName}
            </Button>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              // --- PERUBAHAN: Menggunakan state 'itemsPerPage' ---
              style={{ transform: `translateX(-${mainCarouselIndex * (100 / itemsPerPage)}%)` }}
            >
              {subCategoriesToShow.map(([subCategoryName, projects]) => {
                const currentIndex = subCategoryIndexes[subCategoryName];
                const currentProject = projects[currentIndex];

                return (
                  // --- PERUBAHAN: Menggunakan state 'itemsPerPage' ---
                  <div key={subCategoryName} className="flex-shrink-0" style={{ width: `${100 / itemsPerPage}%` }}>
                    <div className="p-1 md:p-4 h-full">
                      <div
                        className="relative w-full h-96 rounded-xl shadow-elegant overflow-hidden group cursor-pointer"
                        onClick={() => openModal(subCategoryName, currentIndex)}
                      >
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentProject.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 w-full h-full"
                          >
                           <Image
                              src={currentProject.image}
                              alt={currentProject.title}
                              fill // Menggunakan 'fill' untuk mengisi container parent (div "relative w-full h-96...")
                              style={{ objectFit: 'cover' }} // Ganti className="w-full h-full object-cover" dengan style={{ objectFit: 'cover' }}
                              unoptimized
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              loading="lazy"

                            // Menghapus width, height, unoptimized, dan loading="lazy" yang tidak diperlukan lagi
                            />  
                         <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />                       </motion.div>
                        </AnimatePresence>
                        <div className="absolute bottom-0 text-start left-0 right-0 p-6 text-white flex flex-col gap-2">
                          <h3 className="text-2xl font-bold text-white">{subCategoryName}</h3>
                          <div className="flex flex-col">
                            <p className="text-gray-200">{currentProject.title}</p>
                            <p className="text-yellow-500 font-semibold">{currentProject.lokasi}</p>
                          </div>
                          <div className="justify-center items-center group-hover:bg-brand-gold/30 bg-white/20 backdrop-blur-sm px-6 hover:bg-white/30 rounded-full p-2 transition-all z-10"> View More</div>
                        </div>

                        {projects.length > 1 && (
                          <>
                            {/* <button 
                                onClick={(e) => { e.stopPropagation(); handleImageChange(subCategoryName, 'prev'); }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-all z-10"
                            >
                                <ChevronLeft className="h-6 w-6 text-white" />
                            </button>
                            <button 
                                onClick={(e) => { e.stopPropagation(); handleImageChange(subCategoryName, 'next'); }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-all z-10"
                            >
                                <ChevronRight className="h-6 w-6 text-white" />
                            </button> */}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- PERBAIKAN: Posisi tombol diubah agar terlihat di mobile --- */}
          {/* --- PERUBAHAN: Menggunakan state 'itemsPerPage' --- */}
          {subCategoriesToShow.length > itemsPerPage && (
            <>
              <button onClick={prevMainItem} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-smooth z-20">
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button onClick={nextMainItem} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-smooth z-20">
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </>
          )}
        </div>
      </div>

      <AnimatePresence>
        {modalState && currentModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <button
              onClick={(e) => { e.stopPropagation(); handleModalNav('prev'); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 z-50"
            >
              <ChevronLeft className="h-8 w-8 text-white" />
            </button>

            <motion.div
              className="relative w-[90vw] h-[90vh] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
              layout
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentModalProject.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <Image
                     src={currentModalProject.image}
                    alt={currentModalProject.title}
                    fill // Menggunakan 'fill' untuk mengisi container parent (div "relative w-[90vw] h-[90vh]...")
                    style={{ objectFit: 'contain' }} // Ganti className="w-full h-full object-contain" dengan style={{ objectFit: 'contain' }}
                   unoptimized
                   loading="lazy"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); handleModalNav('next'); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 z-50"
            >
              <ChevronRight className="h-8 w-8 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); closeModal(); }}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-3 z-50"
            >
              <X className="h-7 w-7 text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;