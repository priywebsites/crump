import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FloatingBookButton() {
  const handleBooking = () => {
    alert('Booking system coming soon! Please call us at +1 (402) 359-1782 to schedule your appointment.');
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="floating-book-btn"
    >
      <Button
        onClick={handleBooking}
        className="bg-[var(--sky)] hover:bg-[var(--electric)] text-white px-6 py-4 rounded-full font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 animate-bounce-slow"
      >
        <i className="fas fa-calendar-alt mr-2"></i>
        Book Now
      </Button>
    </motion.div>
  );
}
