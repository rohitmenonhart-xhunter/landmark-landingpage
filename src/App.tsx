import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ARButton from './components/ARButton';

function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Hero />
        <Projects />
        <Contact />
        <ARButton />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;