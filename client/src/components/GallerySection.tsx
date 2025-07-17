import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import haircut1 from "@assets/Screen Shot 2025-07-17 at 3.15.44 PM_1752783526866.png";
import haircut2 from "@assets/Screen Shot 2025-07-17 at 3.16.34 PM_1752783528565.png";
import haircut3 from "@assets/Screen Shot 2025-07-17 at 3.19.08 PM_1752783573149.png";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: haircut1,
      alt: "Premium beard styling and cut",
      title: "Beard Mastery",
      description: "Expert beard sculpting with precision"
    },
    {
      src: haircut2,
      alt: "Modern textured cut with fade",
      title: "Textured Styling",
      description: "Contemporary cut with classic elements"
    },
    {
      src: haircut3,
      alt: "Perfect skin fade technique",
      title: "Skin Fade Perfection",
      description: "Clean lines and flawless blending"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-[var(--midnight)] to-[var(--navy)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the artistry and craftsmanship that goes into every cut, style, and shave.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <h4 className="text-lg font-semibold">{image.title}</h4>
                <p className="text-sm">{image.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-3xl z-10 hover:text-[var(--sky)] transition-colors duration-300"
              >
                <i className="fas fa-times"></i>
              </button>
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
