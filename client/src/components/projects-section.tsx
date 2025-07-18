import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Lock } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Virtual Canvas",
      description: "Developed a virtual canvas using hand gesture recognition and computer vision techniques. Implemented real-time hand gesture recognition to allow drawing and object manipulation on a virtual canvas.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&w=400&h=250&fit=crop",
      technologies: ["OpenCV", "MediaPipe", "Python"],
      githubUrl: "https://github.com/YashB28/virtual-canvas",
      liveUrl: null
    },
    {
      title: "IoT-based Food Spoilage Detection",
      description: "Detection of spoilt food using IoT technology, applicable in stores, warehouses, and grocery stores. Implemented using Arduino and Node MCU with Blynk IoT platform for monitoring.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&w=400&h=250&fit=crop",
      technologies: ["Arduino IDE", "Arduino UNO", "Node MCU", "Blynk IoT"],
      githubUrl: null,
      liveUrl: null
    },
    {
      title: "Shop It: An Ecommerce Website",
      description: "A platform to digitalize offline sellers. Provides an e-commerce platform with authentication, admin dashboard, add to cart, order history, and checkout functionality.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&w=400&h=250&fit=crop",
      technologies: ["React", "Firebase", "JavaScript", "Redux"],
      githubUrl: null,
      liveUrl: null
    }
  ];

  const techColors: Record<string, string> = {
    "React": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    "Node.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    "MongoDB": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    "Vue.js": "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200",
    "Firebase": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
    "Tailwind": "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200",
    "JavaScript": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
    "API": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
    "Charts.js": "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200",
    "D3.js": "bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200",
    "Python": "bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200",
    "React Native": "bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200",
    "Expo": "bg-lime-100 dark:bg-lime-900 text-lime-800 dark:text-lime-200",
    "Redux": "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200",
    "Next.js": "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
    "TypeScript": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    "Prisma": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects that demonstrate my skills and passion for development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background shadow-sm overflow-hidden card-hover h-full flex flex-col">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className={techColors[tech] || "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.githubUrl ? (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    ) : (
                      <Button variant="ghost" size="sm" disabled>
                        <Lock className="mr-2 h-4 w-4" />
                        Private
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl">
            <a href="https://github.com/YashB28" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
