
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </MainLayout>
  );
};

export default Index;
