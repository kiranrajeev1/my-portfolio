import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { cn } from '../lib/utils.js'; // Import cn if needed for potential overrides

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          // Updated classes for glass effect
          className={cn(
            "fixed bottom-8 right-8 z-50 p-3 rounded-full", // Base positioning and shape
            "bg-white/10 text-black border border-black/10", // Light theme glass
            "dark:bg-black/10 dark:text-white dark:border-white/10", // Dark theme glass
            "backdrop-blur-md shadow-lg", // Blur and shadow
            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/50 dark:focus:ring-white/50", // Focus state
            "hover:bg-white/20 dark:hover:bg-black/20" // Subtle hover state
          )}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -3 }} // Slightly enhanced hover
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          aria-label="Go to top"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
