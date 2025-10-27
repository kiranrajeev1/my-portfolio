import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // 1. Initialize state from localStorage or default to 'dark'
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  );

  // This effect runs whenever the `theme` state changes
  useEffect(() => {
    const root = window.document.documentElement; // The <html> tag

    // Add the current theme class ('dark' or 'light')
    root.classList.add(theme);

    // Make sure to remove the other theme's class
    if (theme === 'dark') {
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
    }

    // 2. Save the new theme choice to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-primary text-primary-foreground p-2 rounded-md"
    >
      Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;