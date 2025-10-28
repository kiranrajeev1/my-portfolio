import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();
  const linkedinUrl = "https://www.linkedin.com/in/kiranrajev";
  const githubUrl = "https://github.com/kiranrajeev1";

  // Animation variants for the main container to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: "easeOut",
        duration: 0.5
      }
    }
  };

  // Animation variants for child items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full py-8 px-4 mt-20 border-t border-black/10 dark:border-white/10"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <motion.p
          variants={itemVariants}
          className="text-sm text-black/60 dark:text-white/60"
        >
          © {year} Kiran Rajeev. All Rights Reserved.
        </motion.p>

        {/* Social links */}
        <motion.div variants={itemVariants} className="flex items-center gap-6">
          <motion.a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
          >
            <Linkedin size={28} />
          </motion.a>

          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
          >
            <Github size={28} />
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
