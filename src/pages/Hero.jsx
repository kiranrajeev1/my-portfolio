import React from 'react';
import { motion } from 'framer-motion';
import GlassButton from '../components/GlassButton.jsx'; // 1. Import GlassButton
import { Linkedin, Github, Download } from 'lucide-react'; // 2. Import icons

const Hero = () => {
  // --- Replace with the actual path to your resume file ---
  const resumeUrl = 'https://drive.google.com/file/d/1-X3_SbNCMv9MnH6IrF7KKjYd4ekX9qpy/view?usp=drive_link'; 

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-center px-4 flex flex-col items-center" // Added flex for centering
    >
      <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black/80 to-black dark:from-white/80 dark:to-white">
        Kiran Rajeev
      </h1>
      <p className="font-light text-base md:text-xl text-black/60 dark:text-white/60 mt-4 max-w-xl mx-auto">
        DevOps Engineer & Cloud Enthusiast specializing in building scalable and automated infrastructure.
      </p>

      {/* --- Buttons Row --- */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
        {/* View Work Button (Kept original style for consistency) */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            px-6 py-2 rounded-full transition-colors font-medium text-sm sm:text-base
            bg-black text-white hover:bg-gray-800
            dark:bg-white dark:text-black dark:hover:bg-gray-200"
          onClick={() => { window.location.href = '#projects'; }} // Scroll to projects
        >
          View My Work
        </motion.button>

        {/* Download Resume Button (Using GlassButton) */}
        <a href={resumeUrl} download="Kiran_Rajeev_Resume.pdf"> {/* Add download attribute */}
          <GlassButton className="flex items-center gap-2 text-sm sm:text-base">
            <Download size={18} />
            Download Resume
          </GlassButton>
        </a>
      </div>

      {/* --- Social Links --- */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <motion.a
          href="https://linkedin.com/in/kiranrajev" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
        >
          <Linkedin size={28} />
        </motion.a>
        <motion.a
          href="https://github.com/kiranrajeev1" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
        >
          <Github size={28} />
        </motion.a>
        {/* Add more social icons here if needed */}
      </div>

    </motion.div>
  );
};

export default Hero;
