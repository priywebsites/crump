import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      title: "Classic Haircut",
      description: "Clean, sharp cuts for all hair types — fade or traditional styling.",
      icon: "fas fa-cut",
      color: "var(--sky)"
    },
    {
      title: "Skin Fade",
      description: "Precision high, mid, or low skin fades with razor detailing.",
      icon: "fas fa-prescription-bottle",
      color: "var(--electric)"
    },
    {
      title: "Beard Trim & Line-Up",
      description: "Detailed beard sculpting and razor-sharp lines.",
      icon: "fas fa-user",
      color: "var(--gold)"
    },
    {
      title: "Hot Towel Shave",
      description: "Traditional straight-razor shave with hot towel treatment.",
      icon: "fas fa-fire",
      color: "var(--sky)"
    },
    {
      title: "Kids Cuts",
      description: "Gentle, stylish cuts for children. Fun & friendly experience.",
      icon: "fas fa-child",
      color: "var(--electric)"
    },
    {
      title: "Custom Hair Designs",
      description: "Artistic linework and hair tattoos. Unique, personalized art.",
      icon: "fas fa-star",
      color: "var(--gold)"
    }
  ];

  const handleBookService = (serviceName: string) => {
    alert(`Booking ${serviceName} - Please call us at +1 (402) 359-1782 to schedule your appointment.`);
  };

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-[var(--navy)] to-[var(--midnight)] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [-30, 30, -30],
            rotate: [0, 360, 720],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-48 h-48 bg-[var(--sky)] rounded-full opacity-5 blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [20, -40, 20],
            rotate: [720, 360, 0],
            scale: [1.1, 0.7, 1.1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-20 left-20 w-56 h-56 bg-[var(--electric)] rounded-full opacity-8 blur-2xl"
        />
        <motion.div
          animate={{ 
            y: [-25, 35, -25],
            x: [-20, 20, -20],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          className="absolute top-1/3 left-1/3 w-32 h-32 bg-[var(--gold)] rounded-full opacity-10 blur-xl"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Premium grooming services tailored to your unique style and personality.
          </p>
        </motion.div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.15, 
                duration: 1, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 35px 70px rgba(59, 130, 246, 0.4)",
                transition: { duration: 0.3 }
              }}
              className="service-card glass-morphism p-8 rounded-3xl cursor-pointer group relative overflow-hidden z-10"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                animate={{ 
                  background: [
                    `linear-gradient(45deg, ${service.color}20, ${service.color}10)`,
                    `linear-gradient(135deg, ${service.color}10, ${service.color}30)`,
                    `linear-gradient(225deg, ${service.color}30, ${service.color}10)`,
                    `linear-gradient(315deg, ${service.color}10, ${service.color}20)`
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                className="absolute inset-0 rounded-3xl opacity-70"
              />
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ 
                    y: [-5, 8, -5],
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: index * 0.3,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 15,
                    y: -10
                  }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative"
                  style={{ backgroundColor: service.color }}
                >
                  {/* Icon glow effect */}
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        `0 0 20px ${service.color}40`,
                        `0 0 30px ${service.color}60`,
                        `0 0 20px ${service.color}40`
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="absolute inset-0 rounded-full"
                  />
                  <motion.i 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
                    className={`${service.icon} text-white text-2xl relative z-10`}
                  />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[var(--sky)] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <Button
                  onClick={() => handleBookService(service.title)}
                  className="bg-white text-[var(--navy)] px-6 py-3 rounded-full font-semibold hover:bg-[var(--sky)] hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Book This
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
