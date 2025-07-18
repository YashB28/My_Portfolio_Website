import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Laptop, GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      icon: Code,
      title: "Freelance Prompt Engineer",
      company: "Outlier.ai",
      period: "2024 - Present",
      color: "bg-primary",
      responsibilities: [
        "Working as a freelance Prompt Engineer contributing to AI model training and evaluation",
        "Specialized in designing and optimizing prompts for AI models to improve response quality",
        "Collaborated with cross-functional teams to implement AI solutions"
      ]
    },
    {
      icon: Laptop,
      title: "Machine Learning Intern",
      company: "CodTech IT Solutions",
      period: "2023 - 2024",
      color: "bg-[#06d6a0]",
      responsibilities: [
        "Completed a Machine Learning Internship focused on developing and implementing ML models",
        "Worked with data preprocessing, feature engineering, and model optimization",
        "Delivered actionable insights and automated solutions for various business applications"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey through various roles and the impact I've made along the way.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 timeline-line rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${isEven ? 'md:justify-start' : 'md:justify-end md:flex-row-reverse'}`}
                >
                  <div className={`flex items-center ${isEven ? 'md:w-5/12' : 'md:w-5/12'}`}>
                    <div className={`w-16 h-16 ${exp.color} text-white rounded-full flex items-center justify-center text-xl font-bold z-10 relative`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className={`ml-6 md:ml-0 ${isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-muted-foreground text-sm">{exp.period}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-2/12"></div>
                  
                  <div className={`${isEven ? 'md:w-5/12' : 'md:w-5/12'} mt-4 md:mt-0`}>
                    <Card className="bg-background shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <ul className="text-muted-foreground space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx}>• {responsibility}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
