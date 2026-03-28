





































'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function InteractiveProfile() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      {/* Cursor personnalisé au survol */}
      <style jsx>{`
        .custom-cursor {
          cursor: none;
        }
        .custom-cursor:hover {
          cursor: none;
        }
      `}</style>

      <motion.div
        className="relative w-80 h-80 mx-auto custom-cursor"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ 
          scale: 1.05,
          y: -5
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeOut"
        }}
      >
        {/* Contour hexagonal néon */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none neon-border profile-hexagon-clip"
          animate={{
            boxShadow: isHovered 
              ? '0 0 25px #00E5FF, 0 0 50px #00E5FF, inset 0 0 20px #00E5FF'
              : '0 0 10px #00E5FF, 0 0 20px #00E5FF'
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeOut"
          }}
        />

        {/* Photo de profil */}
        <motion.div 
          className="relative w-full h-full overflow-hidden rounded-3xl"
          animate={{
            rotateZ: isHovered ? [0, 180, 360] : 0,
          }}
          transition={{
            duration: 3,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
        >
          {/* Image principale (face) */}
          <motion.div
            animate={{
              scale: isHovered ? [1, 1.1, 1.05, 1] : 1,
              opacity: isHovered ? [1, 0.3, 1] : 1,
            }}
            transition={{
              duration: 1.5,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Amélie KAVEGE - Développeuse Web & Mobile"
              fill
              className={`object-cover ${
                isHovered 
                  ? 'profile-main-filter'
                  : 'profile-main-filter-default'
              }`}
            />
          </motion.div>

          {/* Image alternative pour l'effet hover */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.6
              }}
              transition={{
                duration: 0.2
              }}
              className="absolute inset-0"
            >
              {/* Overlay effet matrice/code */}
              <div className="absolute inset-0 opacity-40 profile-matrix-overlay" />
            </motion.div>
          )}

          {/* Overlay avec motif géométrique */}
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none profile-hexagon-clip"
            animate={{
              opacity: isHovered ? 0.6 : 0.2
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
            style={{
              background: `
                radial-gradient(circle at 30% 40%, rgba(0, 229, 255, 0.1) 0%, transparent 50%),
                linear-gradient(45deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                linear-gradient(-45deg, rgba(0, 229, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '100% 100%, 20px 20px, 20px 20px'
            }}
          />

          {/* Effet simple au survol */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 z-25 pointer-events-none profile-hexagon-clip bg-gradient-to-br from-accent-cyan/20 to-transparent"
            />
          )}
        </motion.div>
      </motion.div>

      {/* Texte d'accompagnement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mt-6"
      >
        <p className="text-dark-muted text-sm font-body">
          Développeuse Web & Mobile passionnée
        </p>
      </motion.div>
    </div>
  );
}