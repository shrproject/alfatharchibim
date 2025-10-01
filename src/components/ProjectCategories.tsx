'use client'
import { Home, Building2, Coffee, GraduationCap } from "lucide-react";

const ProjectCategories = () => {
  const categories = [
    {
      id: "residential",
      title: "Residensial",
      subtitle: "Rumah Impian",
      description: "Desain residensial kustom dari minimalis modern hingga estate mewah",
      icon: Home,
      image: '/project-residential-1.jpg',
      projects: "25+ Proyek"
    },
    {
      id: "housing",
      title: "Pengembangan Perumahan",
      subtitle: "Hunian Komunitas",
      description: "Pengembangan residensial skala besar dan perencanaan komunitas",
      icon: Building2,
      image: '/project-residential-1.jpg',
      projects: "8 Pengembangan"
    },
    {
      id: "commercial",
      title: "Kafe & Restoran",
      subtitle: "Ruang Kuliner",
      description: "Ruang komersial inovatif yang meningkatkan pengalaman pelanggan",
      icon: Coffee,
      image: '/project-cafe-1.jpg',
      projects: "15+ Outlet"
    },
    {
      id: "institutional",
      title: "Institusi",
      subtitle: "Bangunan Publik",
      description: "Desain fasilitas pendidikan, kesehatan, dan pemerintahan",
      icon: GraduationCap,
      image: '/project-institutional-1.jpg',
      projects: "12+ Bangunan"
    }
  ];

  return (
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
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-80 flex flex-col justify-between text-white">
                <div>
                  <div className="bg-brand-gold/20 backdrop-blur-sm rounded-lg p-3 w-fit mb-4">
                    <category.icon className="h-8 w-8 text-brand-gold" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-brand-gold font-medium mb-3">{category.subtitle}</p>
                </div>

                <div>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-gold font-semibold text-sm">
                      {category.projects}
                    </span>
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-brand-gold/30 transition-smooth">
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
                  </div>
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
  );
};

export default ProjectCategories;