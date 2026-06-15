import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial state from HTML tag
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: 20 }}
      className="p-2.5 rounded-xl hover:bg-surface-container transition-colors duration-200 flex items-center justify-center text-on-surface-variant hover:text-primary"
      aria-label="Toggle theme"
    >
      <motion.span 
        key={isDark ? 'light' : 'dark'}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="material-symbols-outlined text-xl"
      >
        {isDark ? 'light_mode' : 'dark_mode'}
      </motion.span>
    </motion.button>
  );
}
