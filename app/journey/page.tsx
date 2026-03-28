'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Award, Calendar, MapPin, Star, Target, Rocket } from 'lucide-react'

const timelineData = [
  {
    year: '2022 - Présent',
    type: 'education',
    icon: GraduationCap,
    title: 'Génie Logiciel (3ème année)',
    subtitle: 'Institution Africaine d\'Informatique',
    location: 'Lomé, Togo',
    status: 'En cours',
    description: 'Future diplômée en Génie Logiciel alliant expertise technique et vision managériale. Formation complète en développement full-stack, gestion de projets digitaux et coordination d\'équipes.',
    highlights: [
      'Architecture et conception logicielle',
      'Développement full-stack avancé',
      'Gestion de projets digitaux',
      'Méthodologies Agile et UML/Merise'
    ],
    gradient: 'from-accent-cyan to-primary-400',
  },
  {
    year: 'Nov 2023 - Présent',
    type: 'project',
    icon: Award,
    title: 'Application de Gestion Multi-Caisses',
    subtitle: 'Projet d\'évaluation',
    location: 'Lomé, Togo',
    status: 'En développement',
    description: 'Conception et développement d\'une application Flutter complète pour la gestion de plusieurs caisses connectées à une base de données MySQL avec gestion des ouvertures/clôtures et rapports automatiques.',
    highlights: [
      'Architecture Flutter & MySQL',
      'Gestion des sessions de caisse',
      'Rapports automatiques',
      'Interface multi-utilisateurs'
    ],
    gradient: 'from-accent-purple to-accent-cyan',
  },
  {
    year: 'Juil - Sept 2024',
    type: 'experience',
    icon: Briefcase,
    title: 'Développeuse',
    subtitle: 'THESYMO Technologies',
    location: 'Lomé, Togo',
    status: 'Terminé',
    description: 'Participation active au développement de la plateforme TogoStartup. Intégration et maintenance des fonctionnalités web avec focus sur l\'expérience utilisateur et la performance. Participation au programme C4S prévu en juin 2025.',
    highlights: [
      'Développement plateforme TogoStartup',
      'Intégration de fonctionnalités web',
      'Maintenance et optimisation',
      'Collaboration équipe technique',
      'C4S - Juin 2025'
    ],
    gradient: 'from-accent-green to-accent-blue',
  },

  {
    year: 'Sept 2021 - Juil 2022',
    type: 'education',
    icon: GraduationCap,
    title: 'Baccalauréat série D',
    subtitle: 'Semeur Divin',
    location: 'Lomé, Togo',
    status: 'Diplômée',
    description: 'Obtention du Baccalauréat scientifique série D avec excellence, ouvrant la voie vers les études supérieures en informatique et consolidant les bases scientifiques.',
    highlights: [
      'Formation scientifique solide',
      'Excellence académique',
      'Bases mathématiques avancées',
      'Préparation études supérieures'
    ],
    gradient: 'from-accent-cyan to-accent-purple',
  }
]

const goals = [
  {
    icon: Target,
    title: 'Objectifs immédiats',
    items: [
      'Finaliser ma formation en Génie Logiciel à l\'IAI-Togo',
      'Approfondir mes compétences en Laravel et Spring Boot',
      'Contribuer à des projets open source africains'
    ]
  },
  {
    icon: Rocket,
    title: 'Vision professionnelle',
    items: [
      'Devenir chef de projet en transformation digitale',
      'Piloter des projets technologiques à fort impact au Togo',
      'Créer des solutions innovantes pour l\'écosystème africain',
      'Mentorer la nouvelle génération de développeurs togolais',
      'Devenir DevSecOps pour intégrer sécurité et développement'
    ]
  }
]

export default function Journey() {
  return (
    <div className="min-h-screen pt-20 bg-dark-bg">
      {/* Hero Section */}
      <section className="py-8 md:py-12 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-card to-dark-surface opacity-50" />
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl bg-accent-cyan/10" />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full blur-3xl bg-primary-400/10" />

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
              className="text-3xl md:text-5xl font-title font-bold mb-4 text-dark-text"
            >
              Mon <span className="gradient-text neon-text-soft">voyage</span> tech
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-dark-muted leading-relaxed font-body"
            >
              De la découverte passionnée à l'expertise technique en développement, retour sur mon parcours de formation à l'IAI-Togo et mes expériences dans l'écosystème tech togolais
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-6 md:py-10">
        <div className="container-custom">
          <div className="relative">
            {/* Ligne de timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-primary-400 to-accent-cyan rounded-full" />

            <div className="space-y-8">
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
                    className="card-glass p-4 rounded-xl hover-glow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg font-section font-bold text-dark-text">
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

                    <p className="text-dark-muted leading-relaxed font-body mb-3">
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
      <section className="py-8 md:py-12 bg-dark-surface/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-title font-bold text-dark-text mb-3">
              Mes <span className="gradient-text neon-text-soft">objectifs</span>
            </h2>
            <p className="text-dark-muted max-w-2xl mx-auto font-body">
              De l'IAI-Togo vers l'excellence : objectifs et ambitions pour l'écosystème tech africain
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card-glass p-5 rounded-xl hover-glow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-gradient-to-br from-accent-cyan to-primary-400 rounded-lg"
                  >
                    <goal.icon className="w-6 h-6 text-black" />
                  </motion.div>
                  <h3 className="text-lg font-section font-bold text-dark-text">
                    {goal.title}
                  </h3>
                </div>

                <div className="space-y-2">
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
      <section className="py-8 md:py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-glass p-6 md:p-8 rounded-xl"
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

              <h2 className="text-xl md:text-2xl font-title font-bold text-dark-text mb-3">
                Prête pour de nouveaux <span className="gradient-text neon-text-soft">défis</span> au Togo
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-dark-muted leading-relaxed font-body mb-5"
              >
                Mon parcours de formation à l'IAI-Togo m'a préparée à relever les défis du secteur technologique. 
                Je suis motivée à piloter des projets de transformation digitale qui ont un impact réel sur l'écosystème togolais et africain.
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
