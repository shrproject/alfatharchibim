'use client'
import { Home, Building2, Coffee, GraduationCap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string[];
}

const ProjectCategories = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const categories: Category[] = [
    {
      id: "residential",
      title: "Residensial",
      description: "Rumah tinggal, perumahan, apartemen, villa.",
      icon: Home,
      image: ['/project-residential-1.jpg', '/project-residential-1.jpg'],
    },
    {
      id: "commercial",
      title: "Commercial",
      description: "Ruko, kantor, café, restoran, hotel.",
      icon: Building2,
      image: ['/project-residential-1.jpg', '/project-residential-1.jpg'],
    },
    {
      id: "institutional",
      title: "Institutional",
      description: "sekolah, rumah sakit, instansi.",
      icon: Coffee,
      image: ['/project-cafe-1.jpg', '/project-cafe-1.jpg'],
    },
    {
      id: "industrial",
      title: "Industrial",
      description: "Gudang, pabrik.",
      icon: GraduationCap,
      image: ['/project-institutional-1.jpg', '/project-institutional-1.jpg'],
    }
  ];

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setOpen(true);
  };

  const waLink = (title: string) => `https://wa.me/6285800275950?text=${encodeURIComponent("halo mas apa kabar, aku tertarik sama design " + title)}`;

  return (
    <>
      <section id="templates" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
              <span className="text-brand-gold">Kategori</span> Proyek
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kami mengkhususkan diri dalam beragam proyek arsitektur, masing-masing 
              disesuaikan untuk memenuhi kebutuhan dan persyaratan spesifik di berbagai sektor.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-gold transition-smooth cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                {/* Background Image - Gunakan gambar pertama */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image[0]})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 h-80 flex flex-col justify-between text-white text-start">
                  <div className="flex gap-2 items-center">
                    <div className="bg-brand-gold/20 backdrop-blur-sm rounded-lg p-3 w-fit mb-4">
                      <category.icon className="h-8 w-8 text-brand-gold" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  </div>

                  <div>
                    <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                      {category.description.split(', ').map((line, index) => (
                        <span key={index} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                    <Link 
                      href={waLink(category.title)}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-full py-2 pl-6 pr-4 group-hover:bg-brand-gold/30"
                    >
                      <span>Hubungi Kami</span>
                      <div className="w-8 h-8 flex items-center justify-center transition-smooth">
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Punya proyek spesifik dalam pikiran? Mari diskusikan kebutuhan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-smooth shadow-lg hover:shadow-xl"
              >
                Dapatkan Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dialog for Full Image View */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] p-0">
          <DialogHeader className="p-6 border-b">
            <DialogTitle>{selectedCategory?.title}</DialogTitle>
            <DialogDescription>
              Lihat detail gambar proyek {selectedCategory?.title.toLowerCase()}
            </DialogDescription>
          </DialogHeader>
          <div className="p-6 flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedCategory?.image.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`${selectedCategory.title} ${index + 1}`} 
                  className="w-full h-auto max-h-[60vh] object-cover rounded-lg" 
                />
              ))}
            </div>
            <Link 
              href={waLink(selectedCategory?.title ?? "")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-center transition-smooth shadow-lg hover:shadow-xl"
            >
              Hubungi Kami
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCategories;