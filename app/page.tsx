import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <main>
        <Hero />
        <div className="bg-[#F7F7F7] dark:bg-[#0E0E0E]">
          <TechStack />
          <FeaturedProjects />
        </div>
        <Experience />
        <Contact />
    </main>
  )
}

export default Home;