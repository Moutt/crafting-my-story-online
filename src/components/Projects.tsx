
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A modern web application with a clean user interface and intuitive functionality. Built with React and Node.js.",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Project+1",
      tags: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Project 2",
      description: "An e-commerce platform with user authentication, product filtering, and a seamless checkout process.",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Project+2",
      tags: ["Next.js", "Tailwind CSS", "Stripe"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Project 3",
      description: "A data visualization dashboard that presents complex information in an easily digestible format.",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Project+3",
      tags: ["D3.js", "Express", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Project 4",
      description: "A mobile-first web application that helps users track and manage their daily tasks and goals.",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Project+4",
      tags: ["React", "Firebase", "Material UI"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges and 
            learning opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="overflow-hidden h-48 md:h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github size={16} />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
