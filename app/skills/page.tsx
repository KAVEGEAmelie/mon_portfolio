'use client'

import { motion } from 'framer-motion'
import { Code2, Smartphone, Server, Wrench, Database, Palette } from 'lucide-react'

const skillsData = [
  {
    category: 'Développement Web',
    icon: Code2,
    color: 'from-accent-cyan to-primary-400',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'JavaScript / TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    category: 'Développement Mobile',
    icon: Smartphone,
    color: 'from-accent-blue to-accent-purple',
    skills: [
      { name: 'Flutter', level: 85 },
      { name: 'Dart', level: 85 },
      { name: 'React Native', level: 75 },
      { name: 'Design Responsive', level: 90 },
    ],
  },
  {
    category: 'Backend & Database',
    icon: Server,
    color: 'from-accent-purple to-accent-cyan',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Firebase', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'API REST', level: 80 },
    ],
  },
  {
    category: 'Outils & Design',
    icon: Wrench,
    color: 'from-accent-green to-accent-yellow',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Figma', level: 85 },
      { name: 'Adobe Creative', level: 80 },
      { name: 'VS Code', level: 95 },
    ],
  },
]

const tools = [
  { name: 'React', icon: '⚛️', category: 'Framework' },
  { name: 'Flutter', icon: '🦋', category: 'Mobile' },
  { name: 'Next.js', icon: '▲', category: 'Framework' },
  { name: 'Tailwind', icon: '🎨', category: 'Styling' },
  { name: 'TypeScript', icon: '📘', category: 'Language' },
  { name: 'Firebase', icon: '🔥', category: 'Backend' },
  { name: 'Figma', icon: '🎯', category: 'Design' },
  { name: 'Git', icon: '📚', category: 'Version Control' },
]

export default function Skills() {
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
              <Code2 className="w-4 h-4" />
              <span>Compétences</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-title font-bold mb-6 text-dark-text"
            >
              Mes <span className="gradient-text neon-text-soft">technologies</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-dark-muted leading-relaxed font-body"
            >
              Un arsenal technologique moderne pour créer des expériences exceptionnelles
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section Compétences principales */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="card-glass p-6 rounded-xl hover-glow group"
              >
                {/* Header de catégorie */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 bg-gradient-to-br ${category.color} rounded-lg group-hover:shadow-lg group-hover:shadow-accent-cyan/20`}
                  >
                    <category.icon className="w-6 h-6 text-black" />
                  </motion.div>
                  <h2 className="text-xl font-section font-bold text-dark-text">
                    {category.category}
                  </h2>
                </div>

                {/* Liste des compétences */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="skill-item"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-dark-text font-body font-medium">{skill.name}</span>
                        <span className="text-accent-cyan text-sm font-section">{skill.level}%</span>
                      </div>
                      
                      {/* Barre de progression */}
                      <div className="w-full bg-dark-surface/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Outils favoris */}
      <section className="section-padding bg-dark-surface/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-title font-bold text-dark-text mb-4">
              Mes <span className="gradient-text neon-text-soft">outils</span> favoris
            </h2>
            <p className="text-dark-muted max-w-2xl mx-auto font-body">
              Les technologies que j'utilise au quotidien pour donner vie aux projets
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0, 229, 255, 0.2)"
                }}
                className="text-center card-glass p-4 rounded-lg hover-glow group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl mb-2 group-hover:scale-110 transition-transform"
                >
                  {tool.icon}
                </motion.div>
                <h3 className="text-sm font-section font-semibold text-dark-text mb-1">
                  {tool.name}
                </h3>
                <p className="text-xs text-dark-muted font-body">
                  {tool.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Apprentissage continu */}
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
                <Database className="w-8 h-8 text-black" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl font-title font-bold text-dark-text mb-4"
              >
                Toujours en <span className="gradient-text neon-text-soft">apprentissage</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-dark-muted leading-relaxed font-body mb-6"
              >
                Le monde de la technologie évolue constamment, et moi aussi ! 
                Je reste curieuse et ouverte aux nouvelles technologies, frameworks et méthodologies 
                qui peuvent améliorer la qualité de mes projets et l'expérience utilisateur.
              </motion.p>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                href="/projects"
                className="btn-primary group inline-block"
              >
                <span>Voir mes projets</span>
                <Code2 className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Mes <span className="gradient-text">Compétences</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Un ensemble de technologies modernes pour créer des solutions complètes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Compétences */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {skillsData.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                    <div className="flex items-center gap-3">
                      <Icon className="w-8 h-8" />
                      <h2 className="text-2xl font-bold">{category.category}</h2>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="p-6 space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{skill.name}</span>
                          <span className="text-sm font-semibold text-primary-600">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: 'easeOut',
                            }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section Outils & Technologies */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Technologies & Outils
            </h2>
            <p className="text-gray-600 text-lg">
              Les technologies avec lesquelles je travaille quotidiennement
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {[
              'React',
              'Next.js',
              'Flutter',
              'TypeScript',
              'Node.js',
              'Tailwind CSS',
              'Firebase',
              'MySQL',
              'Git',
              'Vercel',
              'Figma',
              'Framer Motion',
            ].map((tech, index) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-white rounded-full shadow-md border border-primary-100
                           font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300
                           transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Soft Skills */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Qualités personnelles
            </h2>
            <p className="text-gray-600 text-lg">
              Au-delà des compétences techniques
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Résolution de problèmes',
                description: 'Approche analytique et créative face aux défis techniques',
              },
              {
                title: 'Apprentissage continu',
                description: 'Toujours en quête de nouvelles technologies et méthodes',
              },
              {
                title: 'Communication',
                description: 'Capacité à expliquer des concepts techniques clairement',
              },
              {
                title: 'Travail d\'équipe',
                description: 'Collaboration efficace et esprit d\'équipe',
              },
              {
                title: 'Autonomie',
                description: 'Capacité à gérer des projets de bout en bout',
              },
              {
                title: 'Créativité',
                description: 'Vision esthétique pour des interfaces modernes',
              },
            ].map((quality, index) => (
              <motion.div
                key={quality.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl 
                           shadow-lg border border-primary-100 card-hover text-center"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">{quality.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {quality.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
