import { motion } from "framer-motion";

export default function ContactSection() {

  const contactInfo = [
    {
      icon: "fas fa-phone",
      title: "Phone",
      info: "+1 (402) 359-1782",
      color: "var(--sky)"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Address",
      info: "4965 NW Radial Hwy, Omaha, NE 68104",
      color: "var(--electric)"
    },
    {
      icon: "fas fa-clock",
      title: "Hours",
      info: "Tue-Wed, Thu-Sat: 9AM-6:30PM",
      color: "var(--gold)"
    }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "https://www.facebook.com/100063650002152/videos/5287827804673659", label: "Facebook" },
    { icon: "fab fa-instagram", href: "https://www.facebook.com/100063650002152/videos/5287827804673659", label: "Instagram" },
    { icon: "fab fa-google", href: "https://www.facebook.com/100063650002152/videos/5287827804673659", label: "Google" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[var(--navy)] to-[var(--midnight)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready for your next cut? Contact us today to schedule your appointment.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
            data-aos="fade-right"
          >
            <div className="glass-morphism p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-[var(--sky)] mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-center"
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                      style={{ backgroundColor: info.color }}
                    >
                      <i className={`${info.icon} text-white`}></i>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <p className="text-gray-300">{info.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Social Media */}
            <div className="glass-morphism p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-[var(--sky)] mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-to-br from-[var(--sky)] to-[var(--electric)] rounded-full flex items-center justify-center text-white transition-transform duration-300"
                    aria-label={social.label}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Google Maps Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-morphism p-8 rounded-3xl"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-semibold text-[var(--sky)] mb-6">Find Us on the Map</h3>
            <div className="space-y-6">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.8234567890123!2d-95.9898998!3d41.2814168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938d40cefecce7%3A0xb0304227477dcd8b!2sCrump%20Cut's%20barber%20shop!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Crump Cut's Barber Shop Location"
                  className="rounded-2xl"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center"
              >
                <h4 className="text-lg font-semibold text-white mb-2">Visit Our Shop</h4>
                <p className="text-gray-300 mb-4">
                  Come experience the best barbershop services in Omaha at our convenient location on NW Radial Highway.
                </p>
                <div className="flex items-center justify-center text-[var(--sky)]">
                  <i className="fas fa-directions mr-2"></i>
                  <span>Get Directions</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
