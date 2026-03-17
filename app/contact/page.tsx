'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle, MessageCircle, Coffee, Calendar } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'amelie.kavege@example.com',
      description: 'Écrivez-moi directement',
      action: 'mailto:amelie.kavege@example.com',
      gradient: 'from-accent-cyan to-primary-400',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+33 6 00 00 00 00',
      description: 'Appelons-nous !',
      action: 'tel:+33600000000',
      gradient: 'from-accent-blue to-accent-purple',
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'France',
      description: 'Disponible en remote',
      action: '#',
      gradient: 'from-accent-green to-accent-cyan',
    },
    {
      icon: Coffee,
      title: 'Café virtuel',
      value: 'Calendly',
      description: 'Planifions un rendez-vous',
      action: '#',
      gradient: 'from-accent-yellow to-accent-green',
    },
  ]

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/amelie', color: 'hover:text-white' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/amelie', color: 'hover:text-blue-400' },
    { icon: MessageCircle, label: 'Discord', url: '#', color: 'hover:text-purple-400' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi (à remplacer par EmailJS ou autre service)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-title font-bold mb-6 text-dark-text"
            >
              Travaillons <span className="gradient-text neon-text-soft">ensemble</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-dark-muted leading-relaxed font-body"
            >
              Une idée de projet ? Une question ? Ou juste envie de discuter tech ? 
              Je serais ravie d'échanger avec vous !
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section Contact Methods */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="block card-glass p-6 rounded-xl hover-glow group text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-block p-4 bg-gradient-to-br ${method.gradient} rounded-lg mb-4 group-hover:shadow-lg group-hover:shadow-accent-cyan/20`}
                >
                  <method.icon className="w-6 h-6 text-black" />
                </motion.div>
                
                <h3 className="text-lg font-section font-bold text-dark-text mb-1 group-hover:text-accent-cyan transition-colors">
                  {method.title}
                </h3>
                
                <p className="text-accent-cyan font-body font-medium mb-1">
                  {method.value}
                </p>
                
                <p className="text-sm text-dark-muted font-body">
                  {method.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Section Formulaire et Social */}
      <section className="section-padding bg-dark-surface/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl md:text-3xl font-title font-bold text-dark-text mb-6">
                Envoyez-moi un <span className="gradient-text neon-text-soft">message</span>
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card-glass p-8 rounded-xl text-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block p-4 bg-gradient-to-br from-accent-green to-accent-cyan rounded-full mb-4"
                  >
                    <CheckCircle className="w-8 h-8 text-black" />
                  </motion.div>
                  <h3 className="text-xl font-section font-bold text-dark-text mb-2">
                    Message envoyé avec succès !
                  </h3>
                  <p className="text-dark-muted font-body">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais !
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-section font-medium text-dark-text mb-2">
                        Nom complet
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 card-glass rounded-lg border border-accent-cyan/20 text-dark-text placeholder-dark-muted font-body focus:border-accent-cyan focus:outline-none transition-colors"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-section font-medium text-dark-text mb-2">
                        Email
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 card-glass rounded-lg border border-accent-cyan/20 text-dark-text placeholder-dark-muted font-body focus:border-accent-cyan focus:outline-none transition-colors"
                        placeholder="votre.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-section font-medium text-dark-text mb-2">
                      Sujet
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 card-glass rounded-lg border border-accent-cyan/20 text-dark-text placeholder-dark-muted font-body focus:border-accent-cyan focus:outline-none transition-colors"
                      placeholder="L'objet de votre message"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-section font-medium text-dark-text mb-2">
                      Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 card-glass rounded-lg border border-accent-cyan/20 text-dark-text placeholder-dark-muted font-body focus:border-accent-cyan focus:outline-none transition-colors resize-none"
                      placeholder="Décrivez votre projet ou votre question..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                    {!isSubmitting && (
                      <Send className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Sidebar Social et Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Réseaux sociaux */}
              <div className="card-glass p-6 rounded-xl">
                <h3 className="text-lg font-section font-bold text-dark-text mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-accent-cyan" />
                  Réseaux sociaux
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className={`flex items-center gap-3 p-3 bg-dark-surface/50 rounded-lg text-dark-muted hover:text-accent-cyan transition-colors group ${link.color}`}
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="font-body">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* FAQ rapide */}
              <div className="card-glass p-6 rounded-xl">
                <h3 className="text-lg font-section font-bold text-dark-text mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent-cyan" />
                  Disponibilité
                </h3>
                <div className="space-y-4 text-sm font-body">
                  <div className="flex justify-between items-center">
                    <span className="text-dark-muted">Réponse moyenne :</span>
                    <span className="text-accent-cyan font-semibold">24h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-dark-muted">Projets freelance :</span>
                    <span className="text-accent-green font-semibold">Ouverte</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-dark-muted">Collaboration :</span>
                    <span className="text-accent-cyan font-semibold">Disponible</span>
                  </div>
                </div>
              </div>

              {/* Fun fact */}
              <div className="card-glass p-6 rounded-xl text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block text-4xl mb-3"
                >
                  ☕
                </motion.div>
                <p className="text-sm text-dark-muted font-body">
                  Fait amusant : Je réponds généralement à mes emails avec un café à la main !
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h2 className="text-3xl font-display font-bold mb-6">
                  Envoyez-moi un message
                </h2>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg
                             flex items-center gap-3 text-green-700"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">
                      Message envoyé avec succès ! Je vous répondrai bientôt.
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg
                               focus:ring-2 focus:ring-primary-500 focus:border-transparent
                               transition-all duration-300"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg
                               focus:ring-2 focus:ring-primary-500 focus:border-transparent
                               transition-all duration-300"
                      placeholder="votre.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg
                               focus:ring-2 focus:ring-primary-500 focus:border-transparent
                               transition-all duration-300"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg
                               focus:ring-2 focus:ring-primary-500 focus:border-transparent
                               transition-all duration-300 resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent
                                      rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Colonne Informations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Card Informations de contact */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 
                            rounded-2xl shadow-lg p-8 text-white">
                <h2 className="text-3xl font-display font-bold mb-6">
                  Informations de contact
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-100 mb-1">Email</div>
                      <a href="mailto:contact@amelie.dev" 
                         className="text-lg font-medium hover:text-primary-200 transition-colors">
                        kavegeamelie@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-100 mb-1">Téléphone</div>
                      <a href="tel:+228XXXXXXXX" 
                         className="text-lg font-medium hover:text-primary-200 transition-colors">
                        +228 92 23 60 69/ +228 92 61 00 66
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-100 mb-1">Localisation</div>
                      <div className="text-lg font-medium">
                        Lomé, Togo
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-white/20" />

                {/* Réseaux sociaux */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Me suivre</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/amelie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center
                               hover:bg-white hover:text-primary-600 transition-all duration-300
                               hover:scale-110"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/amkvg/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center
                               hover:bg-white hover:text-primary-600 transition-all duration-300
                               hover:scale-110"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Disponibilité */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-2xl font-bold mb-4">Disponibilité</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Je suis actuellement <span className="text-primary-600 font-semibold">disponible</span> pour :
                </p>
                <ul className="space-y-3">
                  {[
                    'Missions freelance',
                    'Projets collaboratifs',
                    'Stages et opportunités professionnelles',
                    'Mentorat et partage de connaissances',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
