import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

interface ProjectProps {
  project: {
    title: string;
    image: string;
    description: string;
    features: string[];
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-sm md:text-base">{project.description}</p>
        <ul className="space-y-2">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-center text-gray-700 text-sm md:text-base">
              <Check className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}