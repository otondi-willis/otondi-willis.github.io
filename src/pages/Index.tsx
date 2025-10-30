import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import LabChallenges from "@/components/LabChallenges";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <LabChallenges />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
