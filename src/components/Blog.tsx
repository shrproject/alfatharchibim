import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "5 Tren Arsitektur Modern yang Membentuk 2024",
      excerpt: "Temukan tren arsitektur terbaru yang merevolusi desain bangunan modern dan praktik konstruksi berkelanjutan.",
      author: "Tim Alfath",
      date: "15 Maret 2024",
      readTime: "5 menit baca",
      category: "Tren Desain"
    },
    {
      id: 2,
      title: "Panduan Lengkap BIM dalam Konstruksi",
      excerpt: "Pelajari bagaimana Building Information Modeling mengubah industri konstruksi dan meningkatkan efisiensi proyek.",
      author: "Tim Alfath",
      date: "10 Maret 2024",
      readTime: "8 menit baca",
      category: "Teknologi"
    },
    {
      id: 3,
      title: "Arsitektur Berkelanjutan: Membangun untuk Masa Depan",
      excerpt: "Jelajahi prinsip desain ramah lingkungan dan material yang membuat bangunan lebih bertanggung jawab terhadap lingkungan.",
      author: "Tim Alfath",
      date: "5 Maret 2024",
      readTime: "6 menit baca",
      category: "Keberlanjutan"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
            <span className="text-brand-gold">Wawasan</span> Terbaru
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tetap update dengan tren terbaru, tips, dan wawasan dari 
            dunia arsitektur dan konstruksi.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <article
              key={article.id}
              className="card-gradient rounded-xl shadow-elegant hover:shadow-gold transition-smooth overflow-hidden group cursor-pointer"
            >
              {/* Article Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-gold transition-smooth line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Article Footer */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  
                  <ArrowRight className="h-5 w-5 text-brand-gold transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button variant="premium" size="lg">
            Lihat Semua Artikel
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;