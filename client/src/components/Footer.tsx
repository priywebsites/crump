import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "https://www.facebook.com/100063650002152/videos/5287827804673659", label: "Facebook" },
    { icon: "fab fa-instagram", href: "https://www.facebook.com/100063650002152/videos/5287827804673659", label: "Instagram" },
    { icon: "fab fa-google", href: "https://www.facebook.com/100063650002152/videos/5287827804673659", label: "Google" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--navy)] py-12 border-t border-[var(--midnight)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-[var(--sky)]">Crump</span> Cut's
            </h3>
            <p className="text-gray-300 mb-4">
              Premium barbershop experience in the heart of Omaha. Where tradition meets modern style.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-[var(--sky)] transition-colors duration-300"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-[var(--sky)] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="text-xl font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-gray-300">4965 NW Radial Hwy</p>
              <p className="text-gray-300">Omaha, NE 68104</p>
              <p className="text-gray-300">+1 (402) 359-1782</p>
              <p className="text-gray-300">Tue-Wed, Thu-Sat: 9AM-6:30PM</p>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-[var(--midnight)] mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Crump Cut's Barber Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
