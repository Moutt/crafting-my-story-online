
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, PaintBucket, Server, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6 text-blue-500" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6 text-green-500" />,
      skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6 text-purple-500" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"]
    },
    {
      title: "UI/UX Design",
      icon: <PaintBucket className="h-6 w-6 text-orange-500" />,
      skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Responsive Design"]
    },
    {
      title: "DevOps & Tools",
      icon: <Settings className="h-6 w-6 text-gray-500" />,
      skills: ["Git", "Docker", "CI/CD", "AWS", "Vercel", "Netlify", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Skills & Knowledge</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My technical toolkit and areas of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  {category.icon}
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="bg-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
