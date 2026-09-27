import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content" className="portfolio">
      <Hero />
      <div className="reading-column">
        <About />
        <Experience />
        <FeaturedProjects />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
