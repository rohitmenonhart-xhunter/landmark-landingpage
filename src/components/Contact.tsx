import { motion } from 'framer-motion';
import { Phone, MapPin, Home, IndianRupee, Clock, Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Home,
    title: "Quality Homes",
    description: "Premium construction with attention to every detail, ensuring lasting value"
  },
  {
    icon: IndianRupee,
    title: "Best Value",
    description: "Competitive pricing with transparent costs and no hidden charges"
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Committed to delivering your dream home on schedule"
  },
  {
    icon: Shield,
    title: "Trusted Builder",
    description: "15+ years of excellence in residential construction"
  }
];

export default function Contact() {
  return (
    <section className="py-16 md:py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block mb-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose</h2>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  LANDMARK
                </span>
                <span className="text-base md:text-lg text-gray-500">CHENNAI</span>
              </div>
            </motion.div>
            <p className="text-lg md:text-xl text-gray-600 px-4">
              Experience the perfect blend of quality and affordability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 md:p-8 rounded-2xl text-center shadow-xl mx-4 md:mx-0"
          >
            <MapPin className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Mr. Lakshmanan</h3>
            <div className="flex flex-col gap-4">
              <motion.a
                href="tel:+919444555345"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="mr-2 w-5 h-5" />
                +91 94445 55345
              </motion.a>
              <motion.a
                href="tel:+919940208050"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="mr-2 w-5 h-5" />
                +91 99402 08050
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}