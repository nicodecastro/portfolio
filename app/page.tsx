import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import CallToAction from "@/components/CallToAction";

const Home = () => {
  return (
    <main className="mx-auto max-w-7xl px-8 lg:px-20">
        <Hero />
        <FeaturedProjects />
        <CallToAction />
    </main>
  )
}

export default Home;