import { motion } from "framer-motion";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Marcus Johnson",
      rating: 5,
      review: "Best barbershop in Omaha! The attention to detail is incredible. Been coming here for 2 years and never disappointed.",
      service: "Classic Haircut & Beard Trim",
      date: "2 weeks ago"
    },
    {
      name: "David Rodriguez",
      rating: 5,
      review: "Professional service and great atmosphere. The barbers really know their craft. Highly recommend for anyone looking for quality cuts.",
      service: "Skin Fade",
      date: "1 month ago"
    },
    {
      name: "James Wilson",
      rating: 5,
      review: "Exceptional experience every time. Clean shop, skilled barbers, and great conversation. Worth every penny!",
      service: "Hot Towel Shave",
      date: "3 weeks ago"
    },
    {
      name: "Michael Chen",
      rating: 5,
      review: "My go-to spot for haircuts. The barbers are artists and the service is always top-notch. Never leaving here unsatisfied.",
      service: "Custom Hair Design",
      date: "1 week ago"
    },
    {
      name: "Robert Anderson",
      rating: 5,
      review: "Brought my son here for his first professional cut. They were patient, gentle, and the result was amazing. Family-friendly place!",
      service: "Kids Cut",
      date: "2 months ago"
    },
    {
      name: "Carlos Martinez",
      rating: 5,
      review: "Traditional barbershop with modern techniques. Love the attention to detail and the relaxed atmosphere. Will definitely be back.",
      service: "Classic Haircut",
      date: "1 month ago"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <motion.i
        key={index}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.3 }}
        className={`fas fa-star ${index < rating ? 'text-[var(--gold)]' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <section id="reviews" className="relative py-20 bg-gradient-to-br from-[var(--navy)] to-[var(--midnight)] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [-20, 30, -20],
            rotate: [0, 180, 360],
            scale: [0.9, 1.3, 0.9]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-40 h-40 bg-[var(--gold)] rounded-full opacity-8 blur-2xl"
        />
        <motion.div
          animate={{ 
            y: [25, -35, 25],
            rotate: [360, 180, 0],
            scale: [1.2, 0.8, 1.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-30 right-20 w-48 h-48 bg-[var(--sky)] rounded-full opacity-6 blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [-15, 20, -15],
            x: [-15, 15, -15],
            rotate: [0, 270, 360]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 8 }}
          className="absolute top-1/2 right-1/4 w-32 h-32 bg-[var(--electric)] rounded-full opacity-12 blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers who trust us with their style.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center mt-4"
          >
            <div className="flex items-center space-x-2">
              {renderStars(5)}
              <span className="text-white font-semibold ml-2">5.0</span>
              <span className="text-gray-400">• Based on 50+ reviews</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -10, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(251, 191, 36, 0.3)",
                transition: { duration: 0.3 }
              }}
              className="glass-morphism p-6 rounded-3xl relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Animated background gradient */}
              <motion.div
                animate={{ 
                  background: [
                    "linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(59, 130, 246, 0.1))",
                    "linear-gradient(225deg, rgba(59, 130, 246, 0.1), rgba(14, 165, 233, 0.1))",
                    "linear-gradient(315deg, rgba(14, 165, 233, 0.1), rgba(251, 191, 36, 0.1))",
                    "linear-gradient(45deg, rgba(251, 191, 36, 0.1), rgba(59, 130, 246, 0.1))"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                className="absolute inset-0 rounded-3xl opacity-60"
              />
              
              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {renderStars(review.rating)}
                </div>
                
                {/* Review Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  className="text-gray-300 mb-6 leading-relaxed"
                >
                  "{review.review}"
                </motion.p>
                
                {/* Customer Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  className="border-t border-gray-600/30 pt-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-semibold">{review.name}</h4>
                      <p className="text-[var(--sky)] text-sm">{review.service}</p>
                    </div>
                    <span className="text-gray-400 text-sm">{review.date}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">
            Ready to experience the Crump Cut's difference?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('Booking system coming soon! Please call us at +1 (402) 359-1782 to schedule your appointment.')}
            className="bg-[var(--gold)] hover:bg-[var(--sky)] text-[var(--navy)] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:shadow-xl"
          >
            <i className="fas fa-calendar-alt mr-2"></i>
            Book Your Appointment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}