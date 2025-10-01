import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import ProjectCategories from "@/components/ProjectCategories";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer"

export default function Home() {
    return <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <ProjectCategories />
      <Blog />
      <Footer />
    </div>
}