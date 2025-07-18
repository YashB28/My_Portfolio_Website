import { motion } from "framer-motion";
import photo1 from "@assets/Screenshot_2025-06-26-01-25-04-06_40deb401b9ffe8e1df2f1cc5ba480b12_1752863796588.jpg";
import photo2 from "@assets/Screenshot_2025-06-26-01-25-42-78_40deb401b9ffe8e1df2f1cc5ba480b12_1752863796590.jpg";
import photo3 from "@assets/Screenshot_2025-06-26-01-26-43-94_40deb401b9ffe8e1df2f1cc5ba480b12_1752863796589.jpg";

export default function PhotographySection() {
  const photos = [
    {
      src: photo1,
      alt: "Performance photography - Singer with microphone",
      title: "Live Performance",
      description: "Capturing the energy of live music"
    },
    {
      src: photo2,
      alt: "Performance photography - Singer with microphone close-up",
      title: "Musical Moment",
      description: "Intimate performance capture"
    },
    {
      src: photo3,
      alt: "Performance photography - Artist in concert setting",
      title: "Concert Photography",
      description: "Professional event photography"
    }
  ];

  return (
    <section id="photography" className="py-20 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Photography</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Capturing moments and exploring the world through my lens. Here are some of my favorite shots.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg card-hover cursor-pointer"
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">{photo.title}</h3>
                  <p className="text-sm opacity-90">{photo.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
