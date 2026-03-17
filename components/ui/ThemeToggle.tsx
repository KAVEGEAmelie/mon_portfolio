'use client';

import { useTheme } from '@/app/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative p-3 rounded-full overflow-hidden
        transition-all duration-300
        ${theme === 'light' 
          ? 'bg-light-secondary hover:bg-light-primary' 
          : 'bg-dark-secondary hover:bg-dark-primary'
        }
        shadow-lg hover:shadow-xl
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : 180,
          scale: theme === 'light' ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className={`w-5 h-5 ${theme === 'light' ? 'text-light-gold' : 'text-transparent'}`} />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : -180,
          scale: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        <Moon className={`w-5 h-5 ${theme === 'dark' ? 'text-dark-neon' : 'text-transparent'}`} />
      </motion.div>
    </motion.button>
  );
}
