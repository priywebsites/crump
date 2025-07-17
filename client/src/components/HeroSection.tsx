import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleBooking = () => {
    alert('Booking system coming soon! Please call us at +1 (402) 359-1782 to schedule your appointment.');
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-parallax">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-20 left-10 w-20 h-20 bg-[var(--sky)] rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [-5, 15, -5] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute top-40 right-20 w-12 h-12 bg-[var(--electric)] rounded-full opacity-30"
        />
        <motion.div
          animate={{ y: [-8, 12, -8] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
          className="absolute bottom-40 left-20 w-16 h-16 bg-[var(--gold)] rounded-full opacity-25"
        />
        <motion.div
          animate={{ y: [-6, 8, -6] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-20 right-10 w-8 h-8 bg-[var(--sky)] rounded-full opacity-20"
        />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="block text-white"
              >
                Premium
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="block text-[var(--sky)]"
              >
                Barbershop
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="block text-[var(--electric)]"
              >
                Experience
              </motion.span>
            </motion.h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Where traditional craftsmanship meets modern style. Experience the finest cuts and grooming services in Omaha.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleBooking}
              className="bg-[var(--sky)] hover:bg-[var(--electric)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse-glow"
            >
              <i className="fas fa-calendar-alt mr-2"></i>
              Book Appointment
            </Button>
            <Button
              onClick={scrollToServices}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--navy)] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-play mr-2"></i>
              View Services
            </Button>
          </motion.div>
        </div>
      </div>
      

    </section>
  );
}
