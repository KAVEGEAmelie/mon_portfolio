'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle, MessageCircle, Calendar } from 'lucide-react'
import emailjs from '@emailjs/browser'

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
      value: 'kavegeamelie@gmail.com',
      description: 'Écrivez-moi directement',
      action: 'mailto:kavegeamelie@gmail.com',
      gradient: 'from-accent-cyan to-primary-400',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+228 92 23 60 69',
      description: 'Appelons-nous !',
      action: 'tel:+22892236069',
      gradient: 'from-accent-blue to-accent-purple',
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Lomé, Togo',
      description: 'Disponible en remote',
      action: '#',
      gradient: 'from-accent-green to-accent-cyan',
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

    try {
      // Configuration EmailJS avec variables d'environnement
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'kavegeamelie@gmail.com',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      console.log('Email envoyé avec succès!', result.text)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000)

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setIsSubmitting(false)
      // Vous pouvez ajouter une gestion d'erreur ici
      alert('Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement à kavegeamelie@gmail.com')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen pt-16 bg-dark-bg">
      {/* Hero Section */}
      <section className="py-6 md:py-8 relative overflow-hidden">
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
              className="text-4xl md:text-5xl font-title font-bold mb-4 text-dark-text"
            >
              Travaillons <span className="gradient-text neon-text-soft">ensemble</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-dark-muted leading-relaxed font-body"
            >
              Une idée de projet ? Une question ? Ou juste envie de discuter tech ? 
              Je serais ravie d&apos;échanger avec vous !
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section Contact Methods */}
      <section className="py-4 md:py-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
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
      <section className="py-6 md:py-8 bg-dark-surface/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl md:text-3xl font-title font-bold text-dark-text mb-4">
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
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
