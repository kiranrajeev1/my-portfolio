  import React, { useState, useEffect, useRef } from 'react';
  import { Sun, Moon } from 'lucide-react';
  import { motion, AnimatePresence } from 'framer-motion';
  import { MenuButton } from './MenuButton'; // Assuming MenuButton.jsx exists
  import { cn } from '../lib/utils'; // Assuming utils.js is in src/lib

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
    const [activeSection, setActiveSection] = useState('hero'); // Track active section

    // --- Theme Logic ---
    useEffect(() => {
      const root = window.document.documentElement;
      root.classList.remove(theme === 'dark' ? 'light' : 'dark');
      root.classList.add(theme);
      localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
    const toggleMenu = () => setIsOpen(!isOpen);
    const handleLinkClick = () => setIsOpen(false);

    // --- Intersection Observer for Active Section ---
    useEffect(() => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience'];
      const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of screen
        threshold: 0, // As soon as it enters the margin
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, observerOptions);

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });

      // Cleanup observer on component unmount
      return () => {
        sections.forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            observer.unobserve(element);
          }
        });
      };
    }, []); // Run only once on mount

    // --- Navigation Links ---
    const links = [
      { href: '#hero', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#skills', label: 'Skills' },
      { href: '#projects', label: 'Projects' },
      { href: '#experience', label: 'Experience' },
    ];

    // Map links to JSX elements with new outline highlight
    const navLinks = links.map((link) => (
      <a
        key={link.href}
        href={link.href}
        onClick={handleLinkClick}
        className={cn(
          "px-3 py-1 rounded-full transition-all duration-300", // Base styles
          "hover:bg-white/10 hover:dark:bg-black/10", // Hover glass effect
          activeSection === link.href.substring(1)
            ? "ring-1 ring-black/20 dark:ring-white/20 font-medium" // Active state: Outline effect
            : "font-light"
        )}
      >
        {link.label}
      </a>
    ));

    const menuVariants = {
      hidden: { opacity: 0, y: -20, transition: { duration: 0.2 } },
      visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
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
              {/* Desktop View */}
              <div className="hidden md:flex items-center gap-2">{navLinks}</div>
              <div className="hidden md:flex items-center gap-4">
                <a href="#contact" onClick={handleLinkClick} className="px-4 py-2 rounded-full transition-colors bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                  Get in Touch
                </a>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={toggleTheme} className="p-2 rounded-full">
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>
              </div>

              {/* Mobile View */}
              <div className="md:hidden flex justify-between items-center w-full">
                <MenuButton isOpen={isOpen} onClick={toggleMenu} />
                <motion.button whileTap={{ scale: 0.9 }} onClick={toggleTheme} aria-label="Toggle Theme" className="p-2 rounded-full">
                  {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={menuVariants} initial="hidden" animate="visible" exit="hidden"
                className="absolute top-full w-full mt-2 md:hidden flex flex-col items-center gap-4 p-4 rounded-2xl shadow-lg bg-white/20 text-black border border-black/20 dark:bg-black/20 dark:text-white dark:border-white/20 backdrop-blur-lg">
                {navLinks}
                <a href="#contact" onClick={handleLinkClick} className="w-full text-center px-4 py-2 rounded-full transition-colors bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
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