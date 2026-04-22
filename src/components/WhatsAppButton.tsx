import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-8 right-8 z-[60]"
        >
          {/* Tooltip */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-luxury-black px-4 py-2 rounded-full shadow-xl border border-gray-100 whitespace-nowrap text-xs font-semibold hidden md:block"
          >
            Chat with us on WhatsApp!
          </motion.div>

          <a
            href="https://wa.me/923323734789"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:brightness-110 transition-all group relative"
          >
            <MessageCircle size={32} />
            
            {/* Ping animation */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
