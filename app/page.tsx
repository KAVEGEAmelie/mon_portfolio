'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Code2, Smartphone } from 'lucide-react'
import InteractiveProfile from '@/components/ui/InteractiveProfile'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center gradient-bg overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [180, 0, 180],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent-blue/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          {/* Split Hero Layout */}
          <div className="grid lg:grid-cols-5 gap-8 items-center min-h-[80vh]">
            
            {/* Left Side - Content (60%) */}
            <div className="lg:col-span-3 text-center lg:text-left">
              {/* Badge animé */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 card-glass
                           rounded-full text-sm font-section text-accent-cyan mb-6 neon-border"
              >
                <Sparkles className="w-4 h-4" />
                <span>Portfolio</span>
              </motion.div>

              {/* Titre principal */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-title font-bold mb-5 leading-tight"
              >
                <span className="tech-name">KAVEGE AKOU</span>{' '}
                <span className="signature-text text-5xl md:text-7xl text-accent-cyan">Amélie</span>
              </motion.h1>

              {/* Sous-titre animé */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-center lg:justify-start gap-4 mb-5 text-xl md:text-2xl font-section text-dark-text"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="text-accent-cyan"
                >
                  <Code2 className="w-8 h-8" />
                </motion.div>
                <span>Développeuse Web & Mobile</span>
                <motion.div
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="text-accent-blue"
                >
                  <Smartphone className="w-8 h-8" />
                </motion.div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base md:text-lg text-dark-muted mb-8 max-w-2xl lg:max-w-lg leading-relaxed font-body"
              >
                Passionnée par la création d'expériences digitales modernes et performantes.
                {/* Spécialisée en <span className="text-accent-cyan font-semibold">React</span>,{' '}
                <span className="text-accent-cyan font-semibold">Next.js</span> et{' '}
                <span className="text-accent-cyan font-semibold">Flutter</span>. */}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-3 mb-16"
              >
                <Link href="/projects" className="btn-primary group">
                  <span>Voir mes projets</span>
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Me contacter
                </Link>
              </motion.div>

              {/* Stats animées */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="grid grid-cols-3 gap-6 max-w-xl lg:max-w-lg"
              >
                {[
                  { number: '15+', label: 'Projets réalisés' },
                  { number: '8+', label: 'Technologies maîtrisées' },
                  { number: '100%', label: 'Passion' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.1 }}
                    className="text-center card-glass p-3 rounded-lg hover-glow"
                  >
                    <div className="text-2xl md:text-3xl font-title font-bold gradient-text mb-1 neon-text-soft">
                      {stat.number}
                    </div>
                    <div className="text-xs text-dark-muted font-body">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Interactive Photo (40%) */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <InteractiveProfile />
              </motion.div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-accent-cyan rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-accent-cyan rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Section Aperçu Rapide */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-title font-bold mb-4 gradient-text">
              Ce que je fais de mieux
            </h2>
            <p className="text-dark-muted text-lg max-w-2xl mx-auto font-body">
              Des solutions digitales complètes, du concept au déploiement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌐',
                title: 'Développement Web',
                description: 'Sites web modernes et performants avec React et Next.js',
              },
              {
                icon: '📱',
                title: 'Applications Mobile',
                description: 'Apps mobiles natives avec Flutter pour iOS et Android',
              },
              {
                icon: '⚙️',
                title: 'Applications de Gestion',
                description: 'Solutions complètes avec backend Node.js et bases de données',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card-glass p-8 rounded-2xl hover-glow"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-section font-bold mb-3 text-dark-text">
                  {service.title}
                </h3>
                <p className="text-dark-muted font-body leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
