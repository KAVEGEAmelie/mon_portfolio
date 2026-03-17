'use client'

import { motion } from 'framer-motion'
import { Heart, Target, Zap, Users, Code2, Coffee, Camera, Lightbulb } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Chaque ligne de code est écrite avec amour et dévouement pour créer des solutions qui font la différence."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Recherche constante de la perfection technique et de l'innovation dans chaque projet."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Travail en équipe et communication efficace pour atteindre des objectifs communs."
    },
    {
      icon: Lightbulb,
      title: "Créativité",
      description: "Approche créative pour résoudre les défis complexes et concevoir des interfaces intuitives."
    }
  ]

  const interests = [
    { icon: Code2, name: "Développement", color: "text-accent-cyan" },
    { icon: Camera, name: "Photographie", color: "text-accent-blue" },
    { icon: Coffee, name: "Café", color: "text-accent-cyan" },
    { icon: Heart, name: "Design UI/UX", color: "text-accent-blue" }
  ]

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
              <Heart className="w-4 h-4" />
              <span>À propos</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-title font-bold mb-6 text-dark-text"
            >
              Bonjour, je suis{' '}
              <span className="signature-text text-5xl md:text-7xl text-accent-cyan">Amélie</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-dark-muted leading-relaxed font-body"
            >
              Développeuse passionnée par la création d'expériences digitales modernes et performantes qui font la différence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section Principale */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Colonne Texte */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-title font-bold text-dark-text mb-6">
                Une développeuse <span className="gradient-text">créative</span> et passionnée
              </h2>
              
              <div className="space-y-4 text-dark-muted leading-relaxed font-body">
                <p>
                  Bonjour ! Je suis <span className="text-accent-cyan font-semibold">Amélie KAVEGE</span>,
                  étudiante en informatique et développeuse web & mobile. Mon parcours est guidé par
                  une passion profonde pour la technologie et la création de solutions digitales innovantes.
                </p>
                <p>
                  Spécialisée en développement <span className="text-accent-cyan font-semibold">React/Next.js</span> et{' '}
                  <span className="text-accent-cyan font-semibold">Flutter</span>, j'adore transformer des idées
                  complexes en interfaces élégantes et fonctionnelles. Chaque projet est une opportunité 
                  d'apprendre et de repousser les limites du possible.
                </p>
                <p>
                  En parallèle de la programmation, je me passionne également pour la{' '}
                  <span className="text-accent-blue font-semibold">photographie</span> et le design, 
                  ce qui nourrit ma créativité et mon sens esthétique dans le développement.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <a 
                  href="/contact" 
                  className="btn-primary group"
                >
                  <span>Travaillons ensemble</span>
                  <Heart className="inline-block ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </motion.div>
            </motion.div>

            {/* Colonne Image/Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Stats rapides */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '2+', label: "Années d'expérience" },
                  { number: '15+', label: 'Projets réalisés' },
                  { number: '8+', label: 'Technologies maîtrisées' },
                  { number: '100%', label: 'Passion' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center card-glass p-4 rounded-lg hover-glow"
                  >
                    <div className="text-2xl md:text-3xl font-title font-bold gradient-text mb-1 neon-text-soft">
                      {stat.number}
                    </div>
                    <div className="text-xs text-dark-muted font-body">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Centres d'intérêt */}
              <div className="card-glass p-6 rounded-xl">
                <h3 className="text-lg font-section font-semibold text-accent-cyan mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Centres d'intérêt
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 p-3 bg-dark-surface/50 rounded-lg"
                    >
                      <interest.icon className={`w-4 h-4 ${interest.color}`} />
                      <span className="text-sm font-body text-dark-text">{interest.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
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
              Mes <span className="gradient-text neon-text-soft">valeurs</span>
            </h2>
            <p className="text-dark-muted max-w-2xl mx-auto font-body">
              Les principes qui guident mon travail et ma passion pour le développement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center card-glass p-6 rounded-xl hover-glow group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block p-3 bg-gradient-to-br from-accent-cyan to-primary-400 rounded-full mb-4 group-hover:shadow-lg group-hover:shadow-accent-cyan/30"
                >
                  <value.icon className="w-6 h-6 text-black" />
                </motion.div>
                <h3 className="text-xl font-section font-bold text-dark-text mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-dark-muted leading-relaxed font-body">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Mes valeurs
            </h2>
            <p className="text-gray-600 text-lg">
              Ce qui guide mon travail au quotidien
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Passion',
                description: 'Un amour profond pour le code et la création',
                color: 'text-red-500',
              },
              {
                icon: Target,
                title: 'Excellence',
                description: 'Viser la qualité dans chaque ligne de code',
                color: 'text-blue-500',
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'Adopter les technologies modernes',
                color: 'text-yellow-500',
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'Travailler en équipe pour réussir ensemble',
                color: 'text-green-500',
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center card-hover"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full
                                 bg-gray-50 mb-4 ${value.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ma vision professionnelle
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Mon objectif est de devenir une développeuse full-stack accomplie,
                capable de concevoir et déployer des applications complètes de A à Z.
              </p>
              <p>
                Je souhaite contribuer à des projets qui ont un impact positif,
                en combinant innovation technologique et expérience utilisateur exceptionnelle.
              </p>
              <p className="text-primary-600 font-semibold italic">
                "Le code est de la poésie en mouvement, et chaque projet est une histoire à raconter."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
