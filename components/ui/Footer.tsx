'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, MessageCircle, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/KAVEGEAmelie', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/amkvg/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/amelie_kaa/', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/+22892236069', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:kavegeamelie@gmail.com', label: 'Gmail' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-dark-bg via-dark-card to-dark-surface">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-accent-cyan" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl bg-primary-400" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-title font-bold text-accent-cyan neon-text-soft">
              Amélie KAVEGE
            </h3>
            <p className="text-sm font-body text-dark-muted leading-relaxed">
              Développeuse Web & Mobile passionnée par la création d&apos;expériences numériques exceptionnelles. Connectons-nous !
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-section font-semibold text-dark-text">
              Navigation rapide
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {['Accueil', 'Projets', 'Compétences', 'Contact'].map((link) => (
                <Link key={link} href={`/${link.toLowerCase()}`}>
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="block text-sm font-body text-dark-muted hover:text-accent-cyan transition-colors"
                  >
                    → {link}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-section font-semibold text-dark-text">
              Me suivre sur les réseaux
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full card-glass hover:bg-accent-cyan/20 text-accent-cyan 
                           hover:text-white transition-all shadow-lg neon-border hover-glow"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-accent-cyan/30 text-center"
        >
          <p className="flex items-center justify-center gap-2 text-sm font-body text-dark-muted">
            Conçu avec <Heart className="w-4 h-4 text-accent-cyan animate-pulse" /> par Amélie KAVEGE • {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
