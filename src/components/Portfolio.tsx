'use client'
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import residentialImage from "@/assets/project-residential-1.jpg";
import cafeImage from "@/assets/project-cafe-1.jpg";
import institutionalImage from "@/assets/project-institutional-1.jpg";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentProject, setCurrentProject] = useState(0);

  const categories = [
    { id: "residential", name: "Residential" },
    { id: "commercial ", name: "Commercial" },
    { id: "institutional ", name: "Institutional" },
    { id: "industrial ", name: "Industrial" }
  ];

  const projects = [
    {
      id: 1,
      title: "Rumah Keluarga Modern",
      category: "residential",
      image: residentialImage,
      description: "Desain rumah kontemporer dengan fitur berkelanjutan",
      location: "Jakarta, Indonesia"
    },
    {
      id: 2,
      title: "Coffee House Urban",
      category: "commercial",
      image: cafeImage,
      description: "Kafe industrial-chic dengan fasilitas modern",
      location: "Bandung, Indonesia"
    },
    {
      id: 3,
      title: "Kompleks Kantor Korporat",
      category: "institutional",
      image: institutionalImage,
      description: "Ruang kerja profesional dengan desain inovatif",
      location: "Surabaya, Indonesia"
    }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const nextProject = () => {
    setCurrentProject((prev) => 
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProject((prev) => 
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
            <span className="text-brand-gold">Portfolio</span> Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Jelajahi koleksi beragam proyek arsitektur kami, dari 
            rumah hunian hingga ruang komersial dan bangunan institusi.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "premium" : "ghost"}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentProject(0);
              }}
              className="transition-smooth"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Project Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-xl shadow-elegant">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {filteredProjects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-96 md:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="max-w-2xl">
                        <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                        <p className="text-lg mb-2 text-gray-200">{project.description}</p>
                        <p className="text-brand-gold font-medium">{project.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {filteredProjects.length > 1 && (
              <>
                <button
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-smooth"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-smooth"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </>
            )}
          </div>

          {/* Project Indicators */}
          {filteredProjects.length > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === currentProject
                      ? "bg-brand-gold"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="premium" size="lg">
            Lihat Semua Proyek
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;