import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import ProjectStats from './ProjectStats';

const projects = [
  {
    title: "Luxury Villa",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    description: "3500 sq.ft Premium Living",
    features: ["3 BHK", "Modern Design", "Premium Finishes", "Customizable Layout"]
  },
  {
    title: "Smart Homes",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80",
    description: "2400 sq.ft Family Home",
    features: ["2 BHK", "Contemporary Style", "Quality Construction", "Efficient Design"]
  },
  {
    title: "Compact Living",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80",
    description: "1200 sq.ft Modern Space",
    features: ["1 BHK", "Space-Efficient", "Modern Amenities", "Perfect Starter Home"]
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From cozy 1 BHK apartments to luxurious 3 BHK villas, we've successfully 
            delivered over 200+ projects across Chennai, each tailored to our clients' needs
          </p>
        </motion.div>

        <ProjectStats />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-white p-8 rounded-2xl shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-4">Custom Requirements?</h3>
          <p className="text-gray-600 mb-6">
            We undertake projects of all sizes. Whether you're looking for a 1 BHK starter 
            home or a luxurious 3 BHK villa, our team is ready to bring your dream home to life.
          </p>
          <a
            href="#contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
          >
            Contact Us Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}