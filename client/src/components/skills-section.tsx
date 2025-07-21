import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Cloud,
  Settings,
  Heart,
  Users,
  Wrench
} from "lucide-react";
import { 
  SiCplusplus,
  SiJavascript, 
  SiPython,
  SiHtml5, 
  SiCss3, 
  SiMysql,
  SiMongodb,
  SiApachecassandra,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiGit
} from "react-icons/si";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: [
        { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "Python", icon: SiPython, color: "text-blue-500" },
      ]
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: [
        { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS", icon: SiCss3, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "Cassandra", icon: SiApachecassandra, color: "text-cyan-500" },
      ]
    },
    {
      title: "Cloud",
      icon: Cloud,
      skills: [
        { name: "Docker", icon: SiDocker, color: "text-blue-500" },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
        { name: "CI/CD Pipeline", icon: SiGit, color: "text-orange-600" },
        { name: "AWS", icon: SiAmazon, color: "text-orange-500" },
      ]
    },
    {
      title: "Coursework",
      icon: Settings,
      skills: [
        { name: "OOPs in C++", icon: SiCplusplus, color: "text-blue-600" },
        { name: "Operating Systems", icon: Settings, color: "text-gray-600" },
        { name: "Data Structures & Algorithms", icon: Code, color: "text-purple-600" },
        { name: "DBMS", icon: Database, color: "text-green-600" },
      ]
    },
    {
      title: "Areas of Interest",
      icon: Heart,
      skills: [
        { name: "Problem-Solving", icon: Code, color: "text-red-500" },
        { name: "Cloud", icon: Cloud, color: "text-blue-500" },
        { name: "Web Development", icon: Code, color: "text-green-500" },
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Leadership", icon: Users, color: "text-purple-600" },
        { name: "Time Management", icon: Settings, color: "text-blue-600" },
        { name: "Communication Skills", icon: Users, color: "text-green-600" },
        { name: "Adaptability", icon: Settings, color: "text-orange-600" },
        { name: "Teamwork", icon: Users, color: "text-cyan-600" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-background shadow-sm transition-shadow hover:shadow-md h-full">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-bold mb-4 text-center flex items-center justify-center">
                      <CategoryIcon className="text-primary mr-2 h-5 w-5" />
                      {category.title}
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {category.skills.map((skill, skillIndex) => {
                        const SkillIcon = skill.icon;
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-center p-3 bg-muted rounded-lg skill-icon cursor-pointer transition-transform transition-shadow hover:scale-105 hover:shadow-lg"
                          >
                            <SkillIcon className={`text-xl mr-3 ${skill.color}`} />
                            <span className="font-medium text-sm">{skill.name}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
