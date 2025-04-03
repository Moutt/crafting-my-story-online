
import { Card, CardContent } from "@/components/ui/card";
import { User, Globe, Clock } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Get to know me a little better
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Who am I?</h3>
              <p className="text-gray-600">
                I'm a passionate developer with a love for creating clean, 
                functional, and user-friendly websites. With a background in 
                [Your Background], I bring a unique perspective to my work.
              </p>
              <p className="text-gray-600">
                When I'm not coding, you might find me [Your Hobbies/Interests]. 
                I believe that these diverse interests help me approach problems 
                from different angles and bring creativity to my technical work.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <Card className="border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 flex items-start">
                    <User className="text-blue-500 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Personal</h4>
                      <p className="text-gray-600 text-sm">
                        Name: Your Name<br />
                        Location: Your Location<br />
                        Email: your.email@example.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 flex items-start">
                    <Globe className="text-blue-500 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Experience</h4>
                      <p className="text-gray-600 text-sm">
                        I've worked with clients across various industries, helping them 
                        achieve their digital goals through thoughtful design and development.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 flex items-start">
                    <Clock className="text-blue-500 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Fun Facts</h4>
                      <p className="text-gray-600 text-sm">
                        • [Fun Fact 1 about yourself]<br />
                        • [Fun Fact 2 about yourself]<br />
                        • [Fun Fact 3 about yourself]
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
