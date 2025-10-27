import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-center px-4"
    >
      <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black/80 to-black dark:from-white/80 dark:to-white">
        Kiran Rajeev
      </h1>
      <p className="font-light text-base md:text-xl text-black/60 dark:text-white/60 mt-4 max-w-xl mx-auto">
        DevOps Engineer & Cloud Enthusiast specializing in building scalable and automated infrastructure.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          mt-8 px-6 py-2 rounded-full transition-colors font-medium
          bg-black text-white hover:bg-gray-800
          dark:bg-white dark:text-black dark:hover:bg-gray-200"
      >
        View My Work
      </motion.button>
    </motion.div>
  );
};

export default Hero;