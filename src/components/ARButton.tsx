import { motion } from 'framer-motion';
import { Smartphone, X } from 'lucide-react';
import { useState } from 'react';

export default function ARButton() {
  const [showInstructions, setShowInstructions] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowInstructions(true);
  };

  return (
    <>
      <motion.a
        href="#"
        onClick={handleClick}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-50 bg-black text-white px-3 py-2 md:px-4 md:py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-900 transition-colors text-sm"
      >
        <Smartphone className="w-4 h-4" />
        <span>AR Card</span>
      </motion.a>

      {showInstructions && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-2xl p-6 max-w-md relative w-full mx-4">
            <button
              onClick={() => setShowInstructions(false)}
              className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Experience AR Visiting Card</h3>
            <ol className="space-y-4 mb-6 text-base md:text-lg">
              <li className="flex gap-2">
                <span className="font-bold">1.</span>
                <span>You will be redirected to our AR experience page</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">2.</span>
                <span>Point your camera at our visiting card's QR code</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">3.</span>
                <span>Watch as our card comes to life in augmented reality!</span>
              </li>
            </ol>
            <a
              href="https://cardzilla-landmarkchennai-com.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-black text-white text-center py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Continue to AR Experience
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}