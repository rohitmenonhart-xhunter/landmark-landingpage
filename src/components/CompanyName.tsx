import { motion } from 'framer-motion';

export default function CompanyName() {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const letters = "LANDMARK".split("");

  return (
    <div className="text-center">
      <div className="flex justify-center mb-1">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-7xl font-bold"
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-2xl md:text-3xl text-gray-300 tracking-wider"
      >
        CHENNAI
      </motion.span>
    </div>
  );
}