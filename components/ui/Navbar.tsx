'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { name: 'Compétences', path: '/skills' },
  { name: 'Projets', path: '/projects' },
  { name: 'Parcours', path: '/journey' },
  { name: 'Contact', path: '/contact' },
];

/** Monogramme « K » néon */
function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="k-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#67e8f9" />
          <stop offset="1" stopColor="#00a8e8" />
        </linearGradient>
      </defs>
      <path d="M8 4h7v32H8z" fill="url(#k-grad)" />
      <path d="M17 20 30 4h8L25 20l13 16h-8z" fill="url(#k-grad)" />
      <path d="M17 20 30 4h3L20 20z" fill="#fff" opacity="0.35" />
    </svg>
  );
}

const isActive = (pathname: string, path: string) =>
  path === '/' ? pathname === '/' : pathname.startsWith(path);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4"
    >
      <nav
        aria-label="Navigation principale"
        className={`
          relative max-w-7xl mx-auto rounded-2xl lg:rounded-full border
          backdrop-blur-xl transition-all duration-300
          ${scrolled
            ? 'bg-dark-card/85 border-accent-cyan/40 shadow-[0_0_30px_-6px_rgba(0,212,255,0.35)]'
            : 'bg-dark-card/55 border-accent-cyan/25 shadow-[0_0_24px_-10px_rgba(0,212,255,0.3)]'
          }
        `}
      >
        {/* Liseré lumineux en haut */}
        <div className="pointer-events-none absolute inset-x-10 -top-px h-px bg-linear-to-r from-transparent via-accent-cyan/70 to-transparent" />

        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="Accueil — Amélie K.">
            <LogoMark className="w-9 h-9 drop-shadow-[0_0_8px_rgba(0,212,255,0.6)] transition-transform group-hover:scale-110" />
            <span className="text-xl font-title font-bold text-dark-text">
              Amélie <span className="text-accent-cyan neon-text-soft">K.</span>
            </span>
          </Link>

          {/* Liens desktop */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-3">
            {navLinks.map(link => {
              const active = isActive(pathname, link.path);
              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    aria-current={active ? 'page' : undefined}
                    className={`relative block px-3 py-2 text-sm font-section font-medium transition-colors ${
                      active ? 'text-accent-cyan' : 'text-dark-text hover:text-accent-cyan'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(0,212,255,0.9)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Bouton CV desktop */}
          <a
            href="/cv-amelie-kavege.pdf"
            download
            className="group hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent-cyan/60 bg-accent-cyan/5 text-sm font-section font-medium text-dark-text
                       hover:bg-accent-cyan hover:text-black hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all shrink-0"
          >
            <Download className="w-4 h-4 text-accent-cyan group-hover:text-black" aria-hidden="true" />
            <span>Télécharger mon CV</span>
          </a>

          {/* Bouton menu mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(o => !o)}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="lg:hidden p-2 rounded-xl text-accent-cyan border border-accent-cyan/30 hover:bg-accent-cyan/10 transition-colors"
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-4 pb-5 pt-1 space-y-2 border-t border-accent-cyan/15">
                {navLinks.map((link, index) => {
                  const active = isActive(pathname, link.path);
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <Link
                        href={link.path}
                        aria-current={active ? 'page' : undefined}
                        className={`block py-3 px-4 rounded-xl font-section transition-colors ${
                          active
                            ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/40'
                            : 'text-dark-text hover:bg-dark-surface hover:text-accent-cyan'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
                <a
                  href="/cv-amelie-kavege.pdf"
                  download
                  className="flex items-center justify-center gap-2 mt-3 py-3 px-4 rounded-xl border border-accent-cyan/60 font-section text-accent-cyan hover:bg-accent-cyan hover:text-black transition-colors"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>Télécharger mon CV</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
