'use client';

import { Moon } from 'lucide-react';
import { motion } from 'framer-motion';

// Site en mode sombre uniquement — composant conservé si un toggle clair/sombre revient un jour
export default function ThemeToggle() {
  return (
    <motion.button
      className="relative p-3 rounded-full overflow-hidden transition-all duration-300
                 bg-dark-secondary hover:bg-dark-primary shadow-lg hover:shadow-xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Thème sombre"
    >
      <div className="flex items-center justify-center">
        <Moon className="w-5 h-5 text-dark-neon" />
      </div>
    </motion.button>
  );
}
