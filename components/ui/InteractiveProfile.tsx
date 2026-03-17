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
          scale: 1.08,
          rotateZ: [0, -2, 2, -1, 0],
          y: [-3, -8, -3]
        }}
        transition={{ 
          duration: 0.6,
          y: {
            type: "spring", 
            stiffness: 300, 
            damping: 10,
            repeat: Infinity,
            repeatType: "reverse"
          },
          rotateZ: {
            duration: 0.8,
            ease: "easeInOut"
          }
        }}
      >
        {/* Contour hexagonal néon */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          animate={{
            boxShadow: isHovered 
              ? [
                  '0 0 40px #00E5FF, 0 0 80px #00E5FF, 0 0 120px #ff00ff, inset 0 0 30px #00E5FF',
                  '0 0 50px #ff00ff, 0 0 100px #ffff00, 0 0 150px #00ff00, inset 0 0 40px #ff00ff',
                  '0 0 40px #00ff00, 0 0 80px #ff0000, 0 0 120px #00E5FF, inset 0 0 30px #00ff00',
                  '0 0 40px #00E5FF, 0 0 80px #00E5FF, 0 0 120px #ff00ff, inset 0 0 30px #00E5FF'
                ]
              : '0 0 15px #00E5FF, 0 0 30px #00E5FF',
            rotate: isHovered ? [0, 360] : 0,
            scale: isHovered ? [1, 1.05, 1.02, 1] : 1
          }}
          transition={{ 
            duration: isHovered ? 2 : 0.3,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
          style={{
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            border: `2px solid ${isHovered ? '#00E5FF' : '#00E5FF'}`,
            borderRadius: '20px',
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
              className="object-cover"
              style={{
                filter: isHovered 
                  ? 'saturate(1.2) contrast(1.3) brightness(1.1) hue-rotate(10deg)' 
                  : 'saturate(0.6) contrast(1.05)',
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
              }}
            />
          </motion.div>

          {/* Image alternative pour la rotation (dos) */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 0.7, 0.9, 0.7, 0],
                scale: [0.8, 1.2, 1.1, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0"
            >
              {/* Utilisation de la même image avec des effets différents comme fallback */}
              <Image
                src="/images/profile.jpg"
                alt="Amélie KAVEGE - Vue technologique"
                fill
                className="object-cover"
                style={{
                  filter: 'saturate(2) contrast(1.8) brightness(0.8) hue-rotate(270deg) invert(0.1)',
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  opacity: 0.8
                }}
              />
              
              {/* Overlay effet matrice/code */}
              <div 
                className="absolute inset-0 opacity-60"
                style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  background: `
                    repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 2px,
                      rgba(0, 229, 255, 0.1) 2px,
                      rgba(0, 229, 255, 0.1) 4px
                    ),
                    repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 2px,
                      rgba(0, 255, 0, 0.1) 2px,
                      rgba(0, 255, 0, 0.1) 4px
                    )
                  `
                }}
              />
            </motion.div>
          )}

          {/* Overlay avec motif géométrique */}
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none"
            animate={{
              opacity: isHovered ? [0.3, 0.7, 0.4, 0.3] : 0.3,
              background: isHovered ? [
                `radial-gradient(circle at 20% 30%, rgba(0, 229, 255, 0.2) 0%, transparent 50%),
                 linear-gradient(45deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px),
                 linear-gradient(-45deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)`,
                `radial-gradient(circle at 60% 70%, rgba(255, 0, 255, 0.2) 0%, transparent 50%),
                 linear-gradient(45deg, rgba(255, 255, 0, 0.1) 1px, transparent 1px),
                 linear-gradient(-45deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px)`,
                `radial-gradient(circle at 40% 50%, rgba(0, 255, 0, 0.2) 0%, transparent 50%),
                 linear-gradient(45deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px),
                 linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`
              ] : `
                radial-gradient(circle at 20% 30%, rgba(0, 229, 255, 0.05) 0%, transparent 50%),
                linear-gradient(45deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                linear-gradient(-45deg, rgba(0, 229, 255, 0.03) 1px, transparent 1px)
              `
            }}
            transition={{
              duration: 1.8,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
            style={{
              backgroundSize: '100% 100%, 20px 20px, 20px 20px',
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            }}
          />

          {/* Effet prisme arc-en-ciel */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.6, 0.3, 0.6, 0],
                background: [
                  'linear-gradient(45deg, transparent, rgba(255,0,0,0.3), transparent)',
                  'linear-gradient(90deg, transparent, rgba(0,255,0,0.3), transparent)',
                  'linear-gradient(135deg, transparent, rgba(0,0,255,0.3), transparent)',
                  'linear-gradient(180deg, transparent, rgba(255,255,0,0.3), transparent)',
                  'linear-gradient(225deg, transparent, rgba(255,0,255,0.3), transparent)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 z-25 pointer-events-none"
              style={{
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
              }}
            />
          )}

          {/* Effet HUD sur les lunettes */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-[35%] left-[45%] z-30 pointer-events-none"
            >
              <motion.div
                className="w-4 h-4 border-2 border-accent-cyan rounded-full"
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-1 h-1 bg-accent-cyan rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </motion.div>
            </motion.div>
          )}

          {/* Effets de particules au survol */}
          {isHovered && (
            <>
              <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Particules principales */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ 
                      opacity: 0, 
                      x: Math.random() * 100 + '%', 
                      y: Math.random() * 100 + '%',
                      scale: 0
                    }}
                    animate={{
                      opacity: [0, 1, 0.5, 1, 0],
                      x: [
                        Math.random() * 100 + '%', 
                        (Math.random() * 100) + '%',
                        (Math.random() * 100) + '%'
                      ],
                      y: [
                        Math.random() * 100 + '%', 
                        (Math.random() * 100) + '%',
                        (Math.random() * 100) + '%'
                      ],
                      scale: [0, 1.5, 0.8, 1.8, 0],
                      rotate: [0, 360, 180, 540],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                    className="absolute w-2 h-2 bg-gradient-to-br from-accent-cyan via-purple-400 to-yellow-300 rounded-full"
                    style={{
                      filter: `drop-shadow(0 0 ${4 + Math.random() * 8}px currentColor)`,
                    }}
                  />
                ))}
              </div>

              {/* Étincelles radiales */}
              <div className="absolute inset-0 z-15 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`spark-${i}`}
                    initial={{ 
                      opacity: 0,
                      scale: 0,
                      x: "50%",
                      y: "50%",
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 2, 0],
                      x: [
                        "50%", 
                        `${50 + Math.cos(i * 45 * Math.PI / 180) * 40}%`,
                        `${50 + Math.cos(i * 45 * Math.PI / 180) * 60}%`
                      ],
                      y: [
                        "50%", 
                        `${50 + Math.sin(i * 45 * Math.PI / 180) * 40}%`,
                        `${50 + Math.sin(i * 45 * Math.PI / 180) * 60}%`
                      ],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: i * 0.1
                    }}
                    className="absolute w-1 h-4 bg-gradient-to-t from-transparent via-accent-cyan to-white rounded-full"
                    style={{
                      transformOrigin: "center bottom",
                    }}
                  />
                ))}
              </div>

              {/* Effet pulsant central */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.3, 0, 0.5, 0],
                  scale: [0, 1.5, 2, 1.8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 z-5 rounded-full bg-gradient-radial from-accent-cyan/20 via-purple-500/10 to-transparent"
                style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                }}
              />
            </>
          )}
        </motion.div>

        {/* Curseur personnalisé */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 z-40 pointer-events-none"
            animate={{
              background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 229, 255, 0.1) 0%, transparent 70%)`
            }}
          />
        )}
      </motion.div>

      {/* Texte d'accompagnement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-6"
      >
        <p className="text-dark-muted text-sm font-body">
          Passez votre souris pour découvrir la technologie
        </p>
      </motion.div>
    </div>
  );
}