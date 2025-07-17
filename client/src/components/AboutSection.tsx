import { motion } from "framer-motion";

export default function AboutSection() {
  const openingHours = [
    { days: "Tuesday - Wednesday", hours: "9:00 AM - 6:30 PM", isOpen: true },
    { days: "Thursday - Saturday", hours: "9:00 AM - 6:30 PM", isOpen: true },
    { days: "Sunday - Monday", hours: "Closed", isOpen: false }
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-[var(--midnight)] to-[var(--navy)] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-10 w-32 h-32 bg-[var(--sky)] rounded-full opacity-10 blur-xl"
        />
        <motion.div
          animate={{ 
            y: [10, -30, 10],
            rotate: [360, 180, 0],
            scale: [1.2, 0.8, 1.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 -right-20 w-40 h-40 bg-[var(--electric)] rounded-full opacity-15 blur-2xl"
        />
        <motion.div
          animate={{ 
            y: [-15, 25, -15],
            x: [-10, 10, -10],
            rotate: [0, 270, 360]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-10 w-24 h-24 bg-[var(--gold)] rounded-full opacity-20 blur-lg"
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Crump Cut's</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Established with a passion for excellence, we provide premium barbering services in the heart of Omaha.
          </p>
        </motion.div>
        
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6 relative z-10"
            data-aos="fade-right"
          >
            <motion.div 
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)" 
              }}
              transition={{ duration: 0.3 }}
              className="glass-morphism p-8 rounded-3xl relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                animate={{ 
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(14, 165, 233, 0.1))",
                    "linear-gradient(45deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.1))",
                    "linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-3xl"
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-[var(--sky)] mb-4">Our Story</h3>
                <p className="text-gray-300 leading-relaxed">
                  At Crump Cut's, we believe that a great haircut is more than just a trim - it's an experience. 
                  Our skilled barbers combine traditional techniques with modern styling to create looks that are 
                  both timeless and contemporary.
                </p>
              </div>
            </motion.div>
            
            {/* Opening Hours */}
            <motion.div 
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 25px 50px rgba(251, 191, 36, 0.2)" 
              }}
              transition={{ duration: 0.3 }}
              className="glass-morphism p-8 rounded-3xl relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                animate={{ 
                  background: [
                    "linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(59, 130, 246, 0.1))",
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(14, 165, 233, 0.1))",
                    "linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(251, 191, 36, 0.1))"
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute inset-0 rounded-3xl"
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-[var(--sky)] mb-6">Opening Hours</h3>
                <div className="space-y-4">
                  {openingHours.map((schedule, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20, scale: 0.9 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex justify-between items-center py-3 px-4 rounded-xl bg-black/20 border border-gray-600/30 hover:border-[var(--sky)]/50 transition-all duration-300"
                    >
                      <span className="text-white font-medium">{schedule.days}</span>
                      <span className={schedule.isOpen ? "text-gray-300" : "text-red-400"}>
                        {schedule.hours}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6 relative z-10"
            data-aos="fade-left"
          >
            <motion.div 
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 25px 50px rgba(14, 165, 233, 0.2)" 
              }}
              transition={{ duration: 0.3 }}
              className="glass-morphism p-8 rounded-3xl relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                animate={{ 
                  background: [
                    "linear-gradient(225deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.1))",
                    "linear-gradient(225deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))",
                    "linear-gradient(225deg, rgba(59, 130, 246, 0.1), rgba(14, 165, 233, 0.1))"
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute inset-0 rounded-3xl"
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-[var(--sky)] mb-6">Find Us</h3>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center p-4 rounded-xl bg-black/20 border border-gray-600/30 hover:border-[var(--electric)]/50 transition-all duration-300"
                  >
                    <motion.i 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="fas fa-map-marker-alt text-[var(--sky)] text-xl mr-4"
                    />
                    <div>
                      <p className="text-white font-medium">4965 NW Radial Hwy</p>
                      <p className="text-gray-300">Omaha, NE 68104, United States</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center p-4 rounded-xl bg-black/20 border border-gray-600/30 hover:border-[var(--electric)]/50 transition-all duration-300"
                  >
                    <motion.i 
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                      className="fas fa-phone text-[var(--sky)] text-xl mr-4"
                    />
                    <div>
                      <p className="text-white font-medium">+1 (402) 359-1782</p>
                      <p className="text-gray-300">Call to book your appointment</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 25px 50px rgba(6, 182, 212, 0.3)" 
              }}
              className="glass-morphism p-4 rounded-3xl relative overflow-hidden"
            >
              {/* Animated border gradient */}
              <motion.div
                animate={{ 
                  background: [
                    "linear-gradient(90deg, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.3))",
                    "linear-gradient(180deg, rgba(59, 130, 246, 0.3), rgba(14, 165, 233, 0.3))",
                    "linear-gradient(270deg, rgba(14, 165, 233, 0.3), rgba(6, 182, 212, 0.3))",
                    "linear-gradient(360deg, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.3))"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-3xl opacity-50"
              />
              <div className="relative z-10">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.8234567890123!2d-95.9898998!3d41.2814168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938d40cefecce7%3A0xb0304227477dcd8b!2sCrump%20Cut's%20barber%20shop!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Crump Cut's Barber Shop Location"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
