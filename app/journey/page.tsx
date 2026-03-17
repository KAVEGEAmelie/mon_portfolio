'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Award, Calendar, MapPin, Star, Target, Rocket } from 'lucide-react'

const timelineData = [
  {
    year: '2024',
    type: 'education',
    icon: GraduationCap,
    title: 'Licence en Informatique',
    subtitle: 'Université / École Supérieure',
    location: 'France',
    status: 'En cours',
    description: 'Spécialisation en développement web et mobile. Projets académiques avancés en React, Flutter et Node.js avec focus sur les architectures modernes.',
    highlights: [
      'Développement full-stack moderne',
      'Méthodologies Agile et DevOps',
      'Bases de données et API design',
      'Intelligence artificielle appliquée'
    ],
    gradient: 'from-accent-cyan to-primary-400',
  },
  {
    year: '2023-2024',
    type: 'project',
    icon: Award,
    title: 'Projets Portfolio',
    subtitle: 'Applications web et mobile',
    location: 'Projets personnels',
    status: 'Réalisé',
    description: 'Développement de plusieurs applications innovantes incluant OwoCash, portfolio moderne et applications e-commerce avec focus sur l\'expérience utilisateur.',
    highlights: [
      'Architecture MVVM et clean code',
      'Animations et micro-interactions',
      'Performance et optimisation SEO',
      'Design responsive et accessible'
    ],
    gradient: 'from-accent-purple to-accent-cyan',
  },
  {
    year: '2023',
    type: 'experience',
    icon: Briefcase,
    title: 'Stage Développement Web',
    subtitle: 'Entreprise Tech Innovante',
    location: 'France',
    status: 'Terminé',
    description: 'Participation active au développement d\'applications web modernes. Collaboration étroite avec l\'équipe sur des projets React et contribution significative au codebase.',
    highlights: [
      'Développement React/Next.js en équipe',
      'Code review et pair programming',
      'Tests automatisés et CI/CD',
      'Méthodologies Agile en pratique'
    ],
    gradient: 'from-accent-green to-accent-blue',
  },
  {
    year: '2022-2023',
    type: 'education',
    icon: GraduationCap,
    title: 'BTS Informatique',
    subtitle: 'Services Informatiques aux Organisations',
    location: 'France',
    status: 'Diplômée',
    description: 'Formation complète en informatique avec spécialisation en développement et gestion de projets. Acquisition des fondamentaux solides en programmation.',
    highlights: [
      'Programmation orientée objet',
      'Gestion de projets informatiques',
      'Réseaux et systèmes',
      'Base de données relationnelles'
    ],
    gradient: 'from-accent-yellow to-accent-green',
  },
  {
    year: '2021-2022',
    type: 'discovery',
    icon: Star,
    title: 'Découverte du Développement',
    subtitle: 'Passion née',
    location: 'Auto-apprentissage',
    status: 'Fondateur',
    description: 'Première approche du développement web à travers des cours en ligne et projets personnels. Coup de foudre pour la programmation et la création digitale.',
    highlights: [
      'HTML, CSS, JavaScript basics',
      'Premiers projets web statiques',
      'Découverte de React',
      'Passion pour le design UI/UX'
    ],
    gradient: 'from-accent-cyan to-accent-purple',
  }
]

const goals = [
  {
    icon: Target,
    title: 'Court terme',
    items: [
      'Finaliser ma licence en informatique',
      'Maîtriser TypeScript et Next.js 14',
      'Contribuer à des projets open source',
      'Développer mes compétences en design'
    ]
  },
  {
    icon: Rocket,
    title: 'Long terme',
    items: [
      'Devenir développeuse full-stack senior',
      'Créer ma propre startup tech',
      'Mentorer d\'autres développeuses',
      'Explorer l\'IA et les nouvelles technologies'
    ]
  }
]

export default function Journey() {
  return (
    <div className="min-h-screen pt-20 bg-dark-bg">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-card to-dark-surface opacity-50" />
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
              <MapPin className="w-4 h-4" />
              <span>Mon parcours</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-title font-bold mb-6 text-dark-text"
            >
              Mon <span className="gradient-text neon-text-soft">voyage</span> tech
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-dark-muted leading-relaxed font-body"
            >
              De la découverte passionnée à l'expertise technique, retour sur les étapes clés qui ont façonné ma carrière
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative">
            {/* Ligne de timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-primary-400 to-accent-cyan rounded-full" />

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Icône timeline */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + 0.2 }}
                    className={`absolute -left-2 top-6 p-4 bg-gradient-to-br ${item.gradient} rounded-full shadow-lg`}
                    style={{ boxShadow: `0 0 30px ${item.type === 'education' ? '#00E5FF' : item.type === 'project' ? '#8b5cf6' : '#10b981'}40` }}
                  >
                    <item.icon className="w-6 h-6 text-black" />
                  </motion.div>

                  {/* Card de contenu */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="card-glass p-6 rounded-xl hover-glow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-section font-bold text-dark-text">
                            {item.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-section ${
                            item.status === 'En cours' ? 'bg-accent-yellow/20 text-accent-yellow' :
                            item.status === 'Réalisé' || item.status === 'Terminé' ? 'bg-accent-green/20 text-accent-green' :
                            'bg-accent-cyan/20 text-accent-cyan'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        <p className="text-accent-cyan font-section font-medium mb-1">
                          {item.subtitle}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-dark-muted font-body mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{item.year}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-dark-muted leading-relaxed font-body mb-4">
                      {item.description}
                    </p>

                    {/* Points forts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {item.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (i * 0.05) }}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient} flex-shrink-0`} />
                          <span className="text-dark-text font-body">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Objectifs */}
      <section className="section-padding bg-dark-surface/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-title font-bold text-dark-text mb-4">
              Mes <span className="gradient-text neon-text-soft">objectifs</span>
            </h2>
            <p className="text-dark-muted max-w-2xl mx-auto font-body">
              Les prochaines étapes de mon évolution professionnelle et mes ambitions futures
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card-glass p-6 rounded-xl hover-glow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-gradient-to-br from-accent-cyan to-primary-400 rounded-lg"
                  >
                    <goal.icon className="w-6 h-6 text-black" />
                  </motion.div>
                  <h3 className="text-xl font-section font-bold text-dark-text">
                    {goal.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {goal.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (i * 0.1) }}
                      className="flex items-start gap-3 p-3 bg-dark-surface/50 rounded-lg"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent-cyan mt-2 flex-shrink-0" />
                      <span className="text-dark-text font-body">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Call to Action */}
      <section className="section-padding">
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
                className="inline-block p-4 bg-gradient-to-br from-accent-cyan to-primary-400 rounded-full mb-6"
              >
                <Rocket className="w-8 h-8 text-black" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl font-title font-bold text-dark-text mb-4"
              >
                Prête pour de nouveaux <span className="gradient-text neon-text-soft">défis</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-dark-muted leading-relaxed font-body mb-6"
              >
                Mon parcours ne fait que commencer ! Je suis toujours en quête de nouvelles opportunités 
                pour apprendre, créer et collaborer sur des projets innovants qui font la différence.
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
                <span>Travaillons ensemble</span>
                <Rocket className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
    subtitle: 'Formation technique',
    description: 'Formation approfondie en programmation, bases de données et développement d\'applications.',
    highlights: [
      'Programmation orientée objet',
      'SQL et bases de données',
      'Développement d\'applications',
    ],
  },
  {
    year: '2022',
    type: 'project',
    icon: Award,
    title: 'Premiers projets Flutter',
    subtitle: 'Découverte du développement mobile',
    description: 'Réalisation de plusieurs applications mobiles pour apprendre Flutter et Dart.',
    highlights: [
      'Applications météo',
      'To-do lists',
      'Calculatrices avancées',
    ],
  },
  {
    year: '2021',
    type: 'education',
    icon: GraduationCap,
    title: 'Baccalauréat Scientifique',
    subtitle: 'Lycée',
    description: 'Option Mathématiques et Informatique. Premiers pas dans le monde de la programmation.',
    highlights: [
      'Initiation à Python',
      'Algorithmique',
      'Projet scientifique',
    ],
  },
]

const typeConfig = {
  education: {
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  experience: {
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  project: {
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
}

export default function Journey() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Mon <span className="gradient-text">Parcours</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Un voyage d'apprentissage continu et de passion pour la technologie
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b
                          from-primary-300 via-primary-400 to-primary-300 transform md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => {
                const Icon = item.icon
                const config = typeConfig[item.type as keyof typeof typeConfig]
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={`${item.year}-${index}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    }`}>
                      <div className={`bg-white rounded-xl shadow-lg border-2 ${config.borderColor}
                                    overflow-hidden card-hover`}>
                        {/* Header */}
                        <div className={`bg-gradient-to-r ${config.color} p-4 text-white`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Icon className="w-5 h-5" />
                              <span className="font-bold">{item.title}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs bg-white/20 px-2 py-1 rounded-full">
                              <Calendar className="w-3 h-3" />
                              {item.year}
                            </div>
                          </div>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                          <h4 className="text-sm font-semibold text-gray-500 mb-3">
                            {item.subtitle}
                          </h4>
                          <p className="text-gray-700 leading-relaxed mb-4">
                            {item.description}
                          </p>
                          <div className="space-y-2">
                            {item.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                                <span className="text-gray-600">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2
                                  w-16 h-16 rounded-full bg-white border-4 border-primary-300
                                  shadow-lg flex items-center justify-center z-10">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${config.color}
                                    flex items-center justify-center text-white`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Spacer for alignment */}
                    <div className="hidden md:block w-5/12" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              En chiffres
            </h2>
            <p className="text-primary-100 text-lg">
              Mon parcours résumé en quelques statistiques
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '3+', label: 'Années d\'expérience' },
              { number: '10+', label: 'Projets réalisés' },
              { number: '6+', label: 'Technologies maîtrisées' },
              { number: '∞', label: 'Passion pour le code' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-3">
                  {stat.number}
                </div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
