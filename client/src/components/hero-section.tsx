import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Download, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@assets/WhatsApp Image 2025-07-19 at 12.09.19 AM_1752863796587.jpeg";
import { Typewriter } from 'react-simple-typewriter';

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Profile Image */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary shadow-xl"
          >
            <img 
              src={profilePhoto} 
              alt="Yash Bhushan - Software Developer" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            <span className="text-foreground">Yash Bhushan</span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium text-primary mb-6"
          >
            <Typewriter
              words={['Software Developer']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Building clean and scalable web applications with modern technologies.
            Passionate about AI/ML, cloud development, and creating innovative solutions.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button 
            onClick={scrollToProjects}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            <Code className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <Button 
            variant="outline"
            asChild
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-medium transition-all"
          >
            <a href="/Yash_Bhushan_Resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center space-x-6"
        >
          <a 
            href="https://github.com/YashB28" 
            className="text-muted-foreground hover:text-primary transition-colors text-2xl"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/yash-bhushan-3a43a3262" 
            className="text-muted-foreground hover:text-primary transition-colors text-2xl"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:ybhushan2002@gmail.com" 
            className="text-muted-foreground hover:text-primary transition-colors text-2xl"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
