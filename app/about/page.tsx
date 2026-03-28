'use client'

import { motion } from 'framer-motion'
import { Heart, Target, Zap, Users, Code2, BookOpen, Dumbbell, Sparkles, Award, Calendar, Megaphone } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Une rigueur constante pour livrer des solutions technologiques de haut niveau."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Naturellement sociable, je crois fermement que la communication efficace est la clé de la réussite d'un projet."
    },
    {
      icon: Heart,
      title: "Accompagnement",
      description: "Aider les autres à structurer leurs projets et à planifier leur succès grâce aux méthodologies Agile."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Transformer des idées complexes en applications fluides et performantes qui créent un impact réel."
    }
  ]

  const interests = [
    { icon: Code2, name: "Full-stack & Mobile", color: "text-accent-cyan" },
    { icon: Dumbbell, name: "Basketball", color: "text-accent-blue" },
    { icon: BookOpen, name: "Lecture", color: "text-accent-cyan" },
    { icon: Sparkles, name: "Mode & Style", color: "text-accent-blue" }
  ]

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
              <Heart className="w-4 h-4" />
              <span>À propos</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-5xl font-title font-bold mb-4 text-dark-text"
            >
              Bonjour, je suis{' '}
              <span className="signature-text text-4xl md:text-6xl text-accent-cyan">Amélie</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-dark-muted leading-relaxed font-body"
            >
              Développeuse Web & Mobile, architecte de solutions digitales et passionnée par l&apos;innovation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section Principale */}
      <section className="py-8 md:py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Colonne Texte */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-title font-bold text-dark-text mb-4">
                Une expertise technique au service de <span className="gradient-text">vos idées</span>
              </h2>
              
              <div className="space-y-4 text-dark-muted leading-relaxed font-body">
                <p>
                  Je suis <span className="text-accent-cyan font-semibold">Akou Amélie KAVEGE</span>,
                  future diplômée en Génie Logiciel à l'IAI-Togo. Mon parcours est né d'une fascination 
                  pour la capacité du code à transformer une idée complexe en une application fluide et performante.
                </p>
                <p>
                  Spécialisée en développement Web et Mobile, je maîtrise des technologies comme{' '}
                  <span className="text-accent-cyan font-semibold">Laravel</span>,{' '}
                  <span className="text-accent-cyan font-semibold">Flutter</span>,{' '}
                  <span className="text-accent-cyan font-semibold">Node.js</span> et{' '}
                  <span className="text-accent-cyan font-semibold">Angular</span> pour bâtir des produits 
                  numériques robustes.
                </p>
                <p>
                  Mon rôle ne s'arrête pas à la programmation : j'accompagne également les porteurs de projets 
                  dans la structuration de leur vision, de la{' '}
                  <span className="text-accent-blue font-semibold">gestion des risques</span> à l'élaboration 
                  de <span className="text-accent-blue font-semibold">business plans stratégiques</span>. 
                  Mon objectif est de garantir que chaque ligne de code serve un impact réel et durable.
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
              className="space-y-6"
            >
              {/* Stats rapides */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { number: '3+', label: 'Années de formation IAI-Togo' },
                  { number: '15+', label: 'Projets réalisés & académiques' },
                  { number: '10+', label: 'Technologies maîtrisées' },
                  { number: '100%', label: 'Passion & Engagement' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center card-glass p-3 rounded-lg hover-glow"
                  >
                    <div className="text-xl md:text-2xl font-title font-bold gradient-text mb-1 neon-text-soft">
                      {stat.number}
                    </div>
                    <div className="text-xs text-dark-muted font-body">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Au-delà du Code */}
              <div className="card-glass p-4 rounded-xl">
                <h3 className="text-base font-section font-semibold text-accent-cyan mb-3 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  L&apos;élégance dans le sport et la lecture
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
                
                <div className="mt-4 p-3 bg-dark-surface/30 rounded-lg text-xs text-dark-muted font-body leading-relaxed">
                  "Quand je ne suis pas devant mon terminal, je cultive mon sens de l'esthétique et mon esprit d'équipe. 
                  Passionnée de <span className="text-accent-blue font-medium">basketball</span> au sein de l'équipe Helrich, 
                  grande lectrice de <span className="text-accent-cyan font-medium">romans</span>, et amoureuse de tout ce qui touche à la 
                  <span className="text-accent-blue font-medium">mode</span> - j'apporte ce soin du détail et du 'chic' dans tout ce que j'entreprends."
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Engagement Communautaire */}
      <section className="py-8 md:py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-title font-bold text-dark-text mb-3">
              S'engager pour faire grandir la <span className="gradient-text neon-text-soft">Tech</span>
            </h2>
            <p className="text-dark-muted max-w-2xl mx-auto font-body">
              Mon implication va bien au-delà de l'écran
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-glass p-6 md:p-8 rounded-xl"
            >
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {/* GDSC */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-dark-surface/50 rounded-lg"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block p-3 bg-gradient-to-br from-accent-cyan to-primary-400 rounded-full mb-3"
                  >
                    <Calendar className="w-6 h-6 text-black" />
                  </motion.div>
                  <h3 className="text-sm font-section font-bold text-accent-cyan mb-2">
                    Event Planner
                  </h3>
                  <p className="text-xs text-dark-muted font-body">
                    GDSC IAI-Togo
                  </p>
                </motion.div>

                {/* DevFest & TCD */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-dark-surface/50 rounded-lg"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block p-3 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-full mb-3"
                  >
                    <Megaphone className="w-6 h-6 text-black" />
                  </motion.div>
                  <h3 className="text-sm font-section font-bold text-accent-cyan mb-2">
                    Co-organisatrice
                  </h3>
                  <p className="text-xs text-dark-muted font-body">
                    DevFest 2023 & TCD 24/25
                  </p>
                </motion.div>

                {/* Microsoft Trainer */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-dark-surface/50 rounded-lg"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block p-3 bg-gradient-to-br from-accent-yellow to-accent-orange rounded-full mb-3"
                  >
                    <Award className="w-6 h-6 text-black" />
                  </motion.div>
                  <h3 className="text-sm font-section font-bold text-accent-cyan mb-2">
                    Microsoft Trainer
                  </h3>
                  <p className="text-xs text-dark-muted font-body">
                    Certifié by Zindi
                  </p>
                </motion.div>
              </div>

              <div className="text-dark-muted leading-relaxed font-body space-y-4">
                <p>
                  En tant qu'<span className="text-accent-cyan font-semibold">Event Planner pour le GDSC IAI-Togo</span> et 
                  co-organisatrice de conférences d'envergure comme le{' '}
                  <span className="text-accent-blue font-semibold">DevFest 2023</span> et le{' '}
                  <span className="text-accent-blue font-semibold">Togo Community Days (TCD) 24/25</span>, 
                  j'ai appris à coordonner des équipes multidisciplinaires et à piloter des projets à fort impact.
                </p>
                <p>
                  Reconnue comme <span className="text-accent-yellow font-semibold">Microsoft Trainer by Zindi</span>, 
                  j'ai à cœur de transmettre mon savoir et d'accompagner la transformation digitale de mon entourage. 
                  Cette dimension humaine nourrit ma rigueur et ma{' '}
                  <span className="text-accent-cyan font-semibold">vision managériale de développeuse</span>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
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
              Mes <span className="gradient-text neon-text-soft">valeurs</span>
            </h2>
            <p className="text-dark-muted max-w-2xl mx-auto font-body">
              Les principes qui guident mon travail et ma passion pour le développement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center card-glass p-4 rounded-xl hover-glow group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block p-3 bg-gradient-to-br from-accent-cyan to-primary-400 rounded-full mb-4 group-hover:shadow-lg group-hover:shadow-accent-cyan/30"
                >
                  <value.icon className="w-6 h-6 text-black" />
                </motion.div>
                <h3 className="text-lg font-section font-bold text-dark-text mb-2">
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

      {/* Section Signature CV-AV */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Divider décoratif */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent mb-8"
            />

            {/* CV-AV - Signature personnelle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              {/* Badge CV-AV */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-cyan/20 to-primary-400/20 backdrop-blur-sm rounded-full text-sm font-section text-accent-cyan mb-6 border border-accent-cyan/30"
              >
                <Heart className="w-4 h-4" />
                <span className="font-bold">CV-AV</span>
                <span className="text-dark-muted">•</span>
                <span className="text-dark-muted">Cœur Vaillant - Âme Vaillante</span>
              </motion.div>

              {/* Citation principale */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-title italic text-dark-text leading-relaxed transform rotate-1">
                  <span className="text-accent-cyan">"</span>
                  À cœur vaillant rien d'impossible,{' '}
                  <br className="hidden sm:block" />
                  <motion.span
                    whileHover={{ 
                      textShadow: '0 0 10px #00E5FF, 0 0 20px #00E5FF, 0 0 30px #00E5FF',
                      scale: 1.05 
                    }}
                    transition={{ duration: 0.3 }}
                    className="gradient-text neon-text-soft"
                  >
                    une âme vaillante dans toute sa splendeur.
                  </motion.span>
                  <span className="text-accent-cyan">"</span>
                </blockquote>
              </motion.div>

              {/* Signature manuscrite */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 flex justify-center"
              >
                <div className="relative">
                  <motion.div
                    whileHover={{ 
                      rotate: -2,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-lg font-section text-accent-cyan/80 transform rotate-3 relative"
                    style={{
                      fontFamily: 'cursive',
                      textShadow: '0 0 5px rgba(0, 229, 255, 0.3)'
                    }}
                  >
                    — Amélie KAVEGE
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-cyan/50 origin-left"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Effet décoratif final */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="mt-6"
              >
                <div className="flex justify-center">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-cyan via-primary-400 to-accent-blue opacity-60"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
