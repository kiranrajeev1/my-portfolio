import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // --- Theme Toggle Logic ---
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  // --- End Theme Logic ---

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = (
    <>
      <a href="#" className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors">Home</a>
      <a href="#" className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors">About</a>
      <a href="#" className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors">Projects</a>
      <a href="#" className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors">Contact</a>
    </>
  );

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-50">
      {/* --- Main Pill-shaped Navigation Bar --- */}
      <div
        className="
          relative p-4 rounded-full shadow-lg
          bg-white/20 text-black border border-black/20
          dark:bg-black/20 dark:text-white dark:border-white/20
          backdrop-blur-lg"
      >
        <div className="flex justify-between items-center">
          {/* --- Desktop View --- */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="
                px-4 py-2 rounded-full transition-colors
                bg-black text-white hover:bg-gray-800
                dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Get in Touch
            </a>
            <button onClick={toggleTheme} className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* --- Mobile View --- */}
          <div className="md:hidden flex justify-between items-center w-full">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <button onClick={toggleTheme} aria-label="Toggle Theme" className="p-2 rounded-full">
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </div>

        {/* --- Mobile Menu Dropdown (Moved back inside) --- */}
        {isOpen && (
          <div className="
            md:hidden mt-4 flex flex-col items-center gap-4 p-4 rounded-2xl
            bg-white/10 dark:bg-black/10" /* Lighter glass effect for dropdown */
          >
            {navLinks}
            <a
              href="#"
              className="
                w-full text-center px-4 py-2 rounded-full transition-colors
                bg-black text-white hover:bg-gray-800
                dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Get in Touch
            </a>
          </div>
        )}
      </div> {/* <<< --- THIS DIV WAS MOVED --- */}
    </nav>
  );
};

export default Navbar;