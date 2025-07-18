import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Heart, Target } from "lucide-react";

export default function AboutSection() {
  const aboutCards = [
    {
      icon: MapPin,
      title: "Location",
      content: "Bangalore, Karnataka, India",
    },
    {
      icon: GraduationCap,
      title: "Education",
      content: "BE Electronics & Communication, BMS College of Engineering",
    },
    {
      icon: Heart,
      title: "Interests",
      content: "Full-Stack Development, AI/ML, Photography, Travel",
    },
    {
      icon: Target,
      title: "Focus",
      content: "Full-Stack Development",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my background, interests, and what drives my passion for development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a recent Electronics and Communication Engineering graduate from BMS College of Engineering with a strong interest in AI, 
              cloud, and full-stack development. I completed a Machine Learning Internship at CodTech IT Solutions and worked as a freelance 
              Prompt Engineer at Outlier.ai, contributing to AI model training and evaluation. I enjoy solving real-world problems through 
              intelligent and scalable tech solutions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Outside of tech, I pursue freelance photography, blending creativity with precision. I'm always eager to explore new 
              technologies, collaborate on impactful projects, and grow as a developer and innovator.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {aboutCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-background shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-primary mb-2 flex items-center">
                          <Icon className="mr-2 h-4 w-4" />
                          {card.title}
                        </h3>
                        <p className="text-muted-foreground">{card.content}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
