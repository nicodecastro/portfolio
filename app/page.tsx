import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import CallToAction from "@/components/CallToAction";

const Home = () => {
  return (
    <main className="">
        <Hero />
        <div className="bg-[#F7F7F7] dark:bg-[#0E0E0E]">
          <FeaturedProjects />
          <CallToAction />
        </div>
    </main>
  )
}

export default Home;