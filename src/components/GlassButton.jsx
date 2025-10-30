import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils.js'; // Assuming this path is correct

const GlassButton = ({ children, onClick, className, ...props }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
        background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))",
        backdropFilter: "blur(15px)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "px-5 py-3 rounded-full font-medium transition-all duration-300",
        "bg-white/10 text-black border border-black/10",
        "dark:bg-black/10 dark:text-white dark:border-white/10",
        "backdrop-blur-md shadow-md",
        "hover:text-white dark:hover:text-black",
        className
      )}
      {...props}
    >
     <span className="relative z-10 flex items-center gap-2">
         {children}
      </span>
    </motion.button>
  );
};

export default GlassButton;
