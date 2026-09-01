'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Code2, Smartphone, Globe, Database, Zap } from 'lucide-react'
import { Github } from '@/components/ui/BrandIcons'
import Link from 'next/link'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'AfrikMode',
    category: 'Web / Application',
    description: 'Plateforme e-commerce complète dédiée à la mode africaine. Architecture full-stack avec backend API et frontend moderne.',
    technologies: ['JavaScript', 'TypeScript', 'Node.js', 'React'],
    icon: '🛍️',
    gradient: 'from-accent-cyan to-primary-400',
    date: '2025',
    status: 'Terminé',
    github: 'https://github.com/KAVEGEAmelie/afrikmode',
    githubFrontend: 'https://github.com/KAVEGEAmelie/afrikmode-frontend',
    demo: null,
    features: [
      'Catalogue produits complet',
      'Panier et gestion des commandes',
      'Gestion des boutiques',
      'Intégration paiement',
      'Architecture front/back séparée'
    ],
  },
  {
    id: 2,
    title: 'Hotel_Restaurant',
    category: 'Web',
    description: 'Application de gestion complète pour hôtel-restaurant : réservations, chambres, menus et clients.',
    technologies: ['Laravel', 'Blade', 'PHP', 'MySQL'],
    icon: '🏨',
    gradient: 'from-accent-blue to-accent-purple',
    date: '2025',
    status: 'Terminé',
    github: 'https://github.com/KAVEGEAmelie/Hotel_Restaurant',
    demo: null,
    features: [
      'Réservation en ligne',
      'Gestion des chambres',
      'Gestion du restaurant et des menus',
      'Tableau de bord admin'
    ],
  },
  {
    id: 3,
    title: 'GestionDeFacture',
    category: 'Application',
    description: 'Application desktop de gestion de facturation : création, suivi et export de factures pour petites entreprises.',
    technologies: ['React', 'Electron', 'JavaScript', 'Node.js'],
    icon: '🧾',
    gradient: 'from-accent-green to-accent-cyan',
    date: '2025',
    status: 'Terminé',
    github: 'https://github.com/KAVEGEAmelie/GestionDeFacture',
    demo: null,
    features: [
      'Création de factures',
      'Gestion des clients',
      'Suivi des paiements',
      'Export PDF'
    ],
  },
  {
    id: 4,
    title: 'Stockify',
    category: 'Application',
    description: "Système de gestion de stock et d'inventaire : entrées/sorties, alertes de seuil et rapports.",
    technologies: ['Laravel', 'Blade', 'MySQL'],
    icon: '📦',
    gradient: 'from-accent-purple to-accent-cyan',
    date: '2025',
    status: 'Terminé',
    github: 'https://github.com/KAVEGEAmelie/stockify',
    demo: null,
    features: [
      "Suivi d'inventaire en temps réel",
      'Alertes de stock bas',
      'Gestion des fournisseurs',
      'Rapports détaillés'
    ],
  },
  {
    id: 6,
    title: 'OwoCash',
    category: 'Mobile',
    description: 'Application mobile de gestion financière / porte-monnaie électronique développée avec Flutter.',
    technologies: ['Dart', 'Flutter'],
    icon: '💰',
    gradient: 'from-accent-cyan to-primary-400',
    date: '2024',
    status: 'Terminé',
    github: 'https://github.com/KAVEGEAmelie/owocash',
    demo: null,
    features: [
      'Interface mobile native',
      'Gestion des transactions',
      'UI moderne'
    ],
  },
  {
    id: 7,
    title: 'Portfolio Moderne',
    category: 'Web',
    description: 'Portfolio personnel moderne avec thème sombre, animations fluides et performance optimale. Design responsive et expérience utilisateur soignée.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    icon: '🌐',
    gradient: 'from-accent-blue to-accent-purple',
    date: '2025',
    status: 'En cours',
    github: 'https://github.com/KAVEGEAmelie/mon_portfolio',
    demo: null,
    features: [
      'Animations Framer Motion avancées',
      'Thème sombre avec effets néon',
      'Design responsive et accessible',
      'Performance et SEO optimisés',
      'Architecture modulaire'
    ],
  },
  {
    id: 8,
    title: 'TogoStartup',
    category: 'Web',
    description: 'Plateforme de promotion et mise en relation des startups togolaises.',
    technologies: ['Laravel', 'Blade', 'MySQL'],
    icon: '🚀',
    gradient: 'from-accent-green to-accent-cyan',
    date: '2025',
    status: 'Terminé',
    github: 'https://github.com/KAVEGEAmelie/Togostartup',
    demo: null,
    features: [
      'Annuaire des startups togolaises',
      'Mise en relation entrepreneurs / partenaires',
      'Espace de présentation dédié'
    ],
  },
  {
    id: 9,
    title: 'Voyage Sans Frontière',
    category: 'Web',
    description: 'Site web pour agence de voyage : destinations, réservations et demandes de devis.',
    technologies: ['JavaScript', 'HTML/CSS'],
    icon: '✈️',
    gradient: 'from-accent-purple to-accent-cyan',
    date: '2025',
    status: 'Terminé',
    github: 'https://github.com/KAVEGEAmelie/voyagesansfrontiere',
    demo: null,
    features: [
      'Catalogue de destinations',
      'Demandes de réservation',
      'Formulaire de devis'
    ],
  },
  {
    id: 10,
    title: 'ConfiFemme',
    category: 'Web',
    description: "Plateforme web dédiée à l'accompagnement et l'autonomisation des femmes.",
    technologies: ['Laravel', 'Blade', 'MySQL'],
    icon: '👩🏾',
    gradient: 'from-accent-yellow to-accent-green',
    date: '2025',
    status: 'Terminé',
    github: 'https://github.com/KAVEGEAmelie/confifemme',
    demo: null,
    features: [
      "Accompagnement et ressources dédiées",
      'Espace communautaire',
      'Contenus de sensibilisation'
    ],
  },
  {
    id: 11,
    title: 'EHCO BTP & Immobilier',
    category: 'Web',
    description: "Site vitrine et de gestion pour une entreprise de BTP et d'immobilier : projets, biens et contact.",
    technologies: ['Laravel', 'Blade', 'MySQL'],
    icon: '🏗️',
    gradient: 'from-accent-cyan to-primary-400',
    date: '2025',
    status: 'Terminé',
    github: 'https://github.com/KAVEGEAmelie/ehco-btp-immobilier',
    demo: null,
    features: [
      'Présentation des projets BTP',
      'Catalogue de biens immobiliers',
      'Formulaire de contact'
    ],
  },
]

const categories = [
  { name: 'Tous', icon: Code2, count: projects.length },
  { name: 'Web', icon: Globe, count: projects.filter(p => p.category.includes('Web')).length },
  { name: 'Mobile', icon: Smartphone, count: projects.filter(p => p.category.includes('Mobile')).length },
  { name: 'Application', icon: Database, count: projects.filter(p => p.category.includes('Application')).length },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  
  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter(project => project.category.includes(selectedCategory))

  return (
    <div className="min-h-screen pt-20 bg-dark-bg">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-linear-to-br from-dark-bg via-dark-card to-dark-surface opacity-50" />
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl bg-accent-cyan/10" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl bg-primary-400/10" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 card-glass rounded-full text-sm font-section text-accent-cyan mb-6"
            >
              <Code2 className="w-4 h-4" />
              <span>Portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-title font-bold mb-6 text-dark-text"
            >
              Mes <span className="gradient-text neon-text-soft">projets</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-dark-muted leading-relaxed font-body"
            >
              Découvrez mes réalisations et les technologies que j&apos;utilise pour créer des expériences digitales innovantes
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section Filtres */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-section font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-linear-to-r from-accent-cyan to-primary-400 text-black shadow-lg shadow-accent-cyan/30'
                    : 'card-glass text-dark-text hover:border-accent-cyan/50 hover:text-accent-cyan'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedCategory === category.name 
                    ? 'bg-black/20 text-black' 
                    : 'bg-accent-cyan/20 text-accent-cyan'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Projets */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card-glass rounded-xl overflow-hidden hover-glow group"
              >
                {/* Header de projet */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-linear-to-br ${project.gradient} rounded-lg group-hover:shadow-lg group-hover:shadow-accent-cyan/20`}>
                      <span className="text-2xl">{project.icon}</span>
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-dark-surface/50 rounded-lg text-dark-muted hover:text-accent-cyan transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                      {'githubFrontend' in project && project.githubFrontend && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.githubFrontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Frontend"
                          className="p-2 bg-dark-surface/50 rounded-lg text-dark-muted hover:text-accent-cyan transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-dark-surface/50 rounded-lg text-dark-muted hover:text-accent-cyan transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-section font-bold text-dark-text mb-2 group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-dark-muted mb-4">
                    <span className={`ml-auto px-2 py-1 rounded-full text-xs ${
                      project.status === 'Terminé' 
                        ? 'bg-accent-green/20 text-accent-green' 
                        : 'bg-accent-yellow/20 text-accent-yellow'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-dark-muted text-sm leading-relaxed font-body mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-dark-surface/50 text-accent-cyan text-xs rounded-lg font-section"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features (Cache/Révélé au survol) */}
                <motion.div
                  initial={false}
                  className="px-6 pb-6 max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500"
                >
                  <div className="border-t border-dark-border pt-4">
                    <h4 className="text-sm font-section font-semibold text-accent-cyan mb-2 flex items-center gap-2">
                      <Zap className="w-3 h-3" />
                      Fonctionnalités clés
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-xs text-dark-muted flex items-start gap-2 font-body">
                          <span className="w-1 h-1 bg-accent-cyan rounded-full mt-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Call to Action */}
      <section className="section-padding bg-dark-surface/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-glass p-8 rounded-xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block p-4 bg-linear-to-br from-accent-cyan to-primary-400 rounded-full mb-6"
              >
                <Code2 className="w-8 h-8 text-black" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl font-title font-bold text-dark-text mb-4"
              >
                Un projet en <span className="gradient-text neon-text-soft">tête</span> ?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-dark-muted leading-relaxed font-body mb-6"
              >
                Je serais ravie de discuter de votre projet et de voir comment je peux vous aider 
                à le concrétiser avec les technologies modernes et une approche créative.
              </motion.p>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                href="/contact"
                className="btn-primary group inline-block"
              >
                <span>Discutons de votre projet</span>
                <ExternalLink className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
