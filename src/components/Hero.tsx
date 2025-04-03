
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in text-gray-800">
            Hello, I'm <span className="text-blue-600">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A passionate developer crafting beautiful and functional websites.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
      </div>

      <button 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        onClick={scrollToAbout}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="text-gray-600" />
      </button>
    </section>
  );
};

export default Hero;
