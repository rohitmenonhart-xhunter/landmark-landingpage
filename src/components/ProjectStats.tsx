import { motion } from 'framer-motion';
import { Building, Home, Award, Users } from 'lucide-react';

const stats = [
  {
    icon: <Building className="w-8 h-8" />,
    value: "200+",
    label: "Projects Completed",
  },
  {
    icon: <Home className="w-8 h-8" />,
    value: "All Types",
    label: "1-3 BHK Homes",
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: "150+",
    label: "Happy Families",
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: "15+ Years",
    label: "Experience",
  },
];

export default function ProjectStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-xl text-center"
        >
          <div className="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
            {stat.icon}
          </div>
          <h4 className="text-3xl font-bold mb-2">{stat.value}</h4>
          <p className="text-gray-600">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}