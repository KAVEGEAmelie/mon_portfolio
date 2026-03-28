'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  { 
    name: 'GitHub', 
    href: 'https://github.com/amelie', 
    icon: Github,
    color: 'hover:text-gray-900'
  },
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com/in/amelie', 
    icon: Linkedin,
    color: 'hover:text-blue-600'
  },
  { 
    name: 'Email', 
    href: 'mailto:contact@amelie.dev', 
    icon: Mail,
    color: 'hover:text-primary-600'
  },
]

const footerLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/about' },
  { name: 'Projets', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-900 to-primary-950 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1 - Présentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-display font-bold mb-3">
              Amélie KAVEGE
            </h3>
            <p className="text-primary-200 text-sm leading-relaxed">
              Développeuse Web & Mobile passionnée par la création d&apos;expériences digitales modernes et performantes.
            </p>
          </motion.div>

          {/* Colonne 2 - Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3 - Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Me suivre</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center
                              transition-all duration-300 hover:scale-110 hover:bg-white
                              text-primary-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-primary-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-primary-300">
            <p className="flex items-center gap-1 mb-4 md:mb-0">
              Conçu avec <Heart className="w-4 h-4 text-red-400 fill-current" /> par Amélie
            </p>
            <p>© {new Date().getFullYear()} Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
