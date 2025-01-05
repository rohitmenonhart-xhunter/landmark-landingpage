import { motion } from 'framer-motion';
import { Phone, Home } from 'lucide-react';
import CompanyName from './CompanyName';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
          alt="Luxury residential home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full max-w-lg mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-block p-3 rounded-full bg-white/10 backdrop-blur-sm"
          >
            <Home className="w-10 h-10 md:w-12 md:h-12" />
          </motion.div>
          
          <CompanyName />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200 px-4"
          >
            Building Your Dream Home in Chennai at the Most Efficient Cost
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 px-4 items-stretch sm:items-center justify-center"
          >
            <motion.a
              href="tel:+919444555345"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              Contact Now
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-black/30 backdrop-blur-sm text-white border-2 border-white rounded-full text-lg font-semibold hover:bg-black/50 transition-colors"
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}