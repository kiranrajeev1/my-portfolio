import React, { useState, useEffect } from 'react';
// Remove Menu and X, import our new button
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuButton } from './MenuButton'; // 1. Import the new component

const Navbar = () => {
  // ... (All your existing state and logic is fine) ...
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = (
      <>
        <a href="#" className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors">Home</a>
        <a href="#" className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors">About</a>
        <a href="#" className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors">Projects</a>
        <a href="#" className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors">Contact</a>
      </>
  );
  
  const menuVariants = {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-50"
    >
      <div className="relative">
        <div className="p-4 rounded-full shadow-lg bg-white/20 text-black border border-black/20 dark:bg-black/20 dark:text-white dark:border-white/20 backdrop-blur-lg">
          <div className="flex justify-between items-center">
            {/* Desktop View (no changes here) */}
            <div className="hidden md:flex items-center gap-6">{navLinks}</div>
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="px-4 py-2 rounded-full transition-colors bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Get in Touch
              </a>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={toggleTheme} className="p-2 rounded-full">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex justify-between items-center w-full">
              {/* 2. Replace the old button with the new MenuButton */}
              <MenuButton isOpen={isOpen} onClick={toggleMenu} />

              <motion.button whileTap={{ scale: 0.9 }} onClick={toggleTheme} aria-label="Toggle Theme" className="p-2 rounded-full">
                {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* --- Mobile Menu Dropdown (no changes here) --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute top-full w-full mt-2 md:hidden flex flex-col items-center gap-4 p-4 rounded-2xl shadow-lg bg-white/20 text-black border border-black/20 dark:bg-black/20 dark:text-white dark:border-white/20 backdrop-blur-lg"
            >
              {navLinks}
              <a href="#" className="w-full text-center px-4 py-2 rounded-full transition-colors bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Get in Touch
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;