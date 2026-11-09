'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, Calendar, Code2, Database, ExternalLink, Globe, Lock, Mail, Rocket, Smartphone, X, Zap,
} from 'lucide-react'
import { Github } from '@/components/ui/BrandIcons'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const projects: Array<{
  id: number
  title: string
  category: string
  description: string
  technologies: string[]
  icon: string
  gradient: string
  date: string
  status: string
  github: string
  githubFrontend?: string
  demo: string | null
  image?: string | null
  features: string[]
}> = [
  {
    id: 13,
    title: 'Asime',
    category: 'Mobile',
    description: "Application mobile (Android et iOS) qui aide les petites entrepreneuses du Togo à gérer catalogue, commandes, clientes et paiements, et à partager leur menu en un lien WhatsApp.",
    technologies: ['Flutter', 'Dart', 'Supabase', 'Drift (SQLite)'],
    icon: '🛒',
    gradient: 'from-accent-rose to-accent-yellow',
    date: '2026',
    status: 'En cours',
    github: '',
    demo: null,
    image: '/images/projects/asime.png',
    features: [
      'Caisse du jour, ventes de la semaine et « qui me doit de l’argent »',
      'Commandes en attente / prêtes / livrées, import depuis le menu',
      'Menu public partageable en un lien WhatsApp',
      'Fonctionne hors ligne avec synchronisation au retour du réseau',
      'Paiements Mixx by Yas et Moov Money, montants en FCFA',
      'Connexion par SMS + code PIN, visite guidée au premier lancement'
    ],
  },
  {
    id: 14,
    title: 'Zova Motors',
    category: 'Web',
    description: "Site de présentation et de vente de véhicules par pays, avec un tableau de bord qui permet au client de tout gérer lui-même : véhicules, textes, couleurs, partenaires et demandes.",
    technologies: ['PHP 8', 'MySQL', 'JavaScript', 'CSS'],
    icon: '🚗',
    gradient: 'from-accent-cyan to-accent-blue',
    date: '2026',
    status: 'Terminé',
    github: '',
    demo: null,
    image: '/images/projects/zovamotors.png',
    features: [
      'Catalogue de véhicules filtré par pays (11 pays)',
      'Tableau de bord complet : véhicules, pays, textes, logo, couleurs',
      'Site bilingue français / anglais',
      'Contact direct par WhatsApp, favoris et newsletter',
      'Gestion des demandes clients et des utilisateurs',
      'Sans framework, déployable sur un hébergement mutualisé'
    ],
  },
  {
    id: 12,
    title: 'In-Tel Services',
    category: 'Web',
    description: "Site vitrine one-page pour In-Tel Services, entreprise d'informatique, réseaux et vidéosurveillance basée à Lomé. Mis en ligne pour le client.",
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    icon: '🛰️',
    gradient: 'from-accent-cyan to-accent-green',
    date: '2026',
    status: 'Terminé',
    github: 'https://github.com/KAVEGEAmelie/intelservice',
    demo: 'https://intelservice.vercel.app',
    image: '/images/projects/intelservice.png',
    features: [
      '8 sections : services, processus, réalisations, témoignages…',
      'Formulaire de contact validé (React Hook Form + Zod)',
      'Thème clair / sombre et défilement fluide (Lenis)',
      'Contenu métier centralisé et facile à mettre à jour',
      'Déployé sur Vercel'
    ],
  },
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
    image: '/images/projects/afrikmode.jpeg',
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
    image: '/images/projects/hotelrestaurant.png',
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
    description: "Application desktop de facturation réalisée pour In-Tel Services : clients, produits, proformas, factures et bordereaux de livraison, avec calcul automatique de la TVA.",
    technologies: ['Electron', 'React', 'SQLite', 'Node.js'],
    icon: '🧾',
    gradient: 'from-accent-green to-accent-cyan',
    date: '2025',
    status: 'Terminé',
    github: 'https://github.com/KAVEGEAmelie/GestionDeFacture',
    demo: null,
    image: '/images/projects/gestiondefacture.png',
    features: [
      'Gestion des clients et des produits (CRUD)',
      'Proformas convertibles en factures',
      'Bordereaux de livraison',
      'Calcul automatique de la TVA (18 %) et numérotation',
      'Statistiques en temps réel et sauvegarde automatique'
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
    image: '/images/projects/stockify.png',
    features: [
      "Suivi d'inventaire en temps réel",
      'Alertes de stock bas',
      'Gestion des fournisseurs',
      'Rapports détaillés'
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
    demo: 'https://ameliekvg.vercel.app',
    image: '/images/projects/portfolio.png',
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
    image: '/images/projects/togostartup.jpeg',
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
    demo: 'https://voyagesansfrontiere.vercel.app',
    image: '/images/projects/voyagesansfrontiere.png',
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
    image: '/images/projects/confifemme.jpeg',
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

type Project = (typeof projects)[number]

const categories = [
  { name: 'Tous', icon: Code2 },
  { name: 'Web', icon: Globe },
  { name: 'Mobile', icon: Smartphone },
  { name: 'Application', icon: Database },
]
  .map(c => ({
    ...c,
    count: c.name === 'Tous' ? projects.length : projects.filter(p => p.category.includes(c.name)).length,
  }))
  // On masque les filtres vides (ex. Mobile tant qu'aucun projet mobile n'est publié)
  .filter(c => c.count > 0)

function StatusBadge({ status }: { status: string }) {
  const done = status === 'Terminé'
  return (
    <span
      className={`shrink-0 px-3 py-1 rounded-full text-xs font-section font-semibold border ${
        done
          ? 'bg-accent-green/15 text-accent-green border-accent-green/30'
          : 'bg-accent-yellow/15 text-accent-yellow border-accent-yellow/30'
      }`}
    >
      {status}
    </span>
  )
}

function ProjectVisual({ project, sizes }: { project: Project; sizes: string }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`Aperçu du projet ${project.title}`}
        fill
        sizes={sizes}
        className="object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
      />
    )
  }
  return (
    <div className={`absolute inset-0 flex items-center justify-center bg-linear-to-br ${project.gradient} opacity-80`}>
      <span className="text-6xl drop-shadow-lg">{project.icon}</span>
    </div>
  )
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const primaryLink = project.demo || project.github || null

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative flex flex-col sm:flex-row gap-5 p-4 rounded-2xl border border-accent-cyan/20 bg-dark-card/70 backdrop-blur-sm
                 hover:border-accent-cyan/50 hover:shadow-[0_0_30px_-8px_rgba(0,212,255,0.45)] transition-[border-color,box-shadow] duration-300"
    >
      {/* Visuel */}
      <div className="relative w-full sm:w-[42%] shrink-0 aspect-video sm:aspect-auto sm:min-h-48 rounded-xl overflow-hidden border border-dark-border bg-dark-surface">
        <ProjectVisual project={project} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 300px" />
        {primaryLink && (
          <a
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ouvrir ${project.title} dans un nouvel onglet`}
            className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 backdrop-blur text-white hover:text-accent-cyan hover:bg-black/80 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Contenu */}
      <div className="flex flex-col flex-1 min-w-0 py-1">
        <div className="flex items-start justify-between gap-3 mb-1">
          <span className="text-2xl leading-none" aria-hidden>{project.icon}</span>
          <StatusBadge status={project.status} />
        </div>

        <h3 className="text-xl font-section font-bold text-dark-text group-hover:text-accent-cyan transition-colors">
          {project.title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-dark-muted mt-1 mb-3">
          <Calendar className="w-4 h-4" />
          <span>{project.date}</span>
          <span className="text-dark-border">•</span>
          <span>{project.category}</span>
        </div>

        <p className="text-sm text-dark-muted leading-relaxed font-body line-clamp-3 mb-4">
          {project.description}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/15 text-accent-cyan text-xs font-section"
              >
                {tech}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={onOpen}
            aria-label={`Voir les détails de ${project.title}`}
            className="shrink-0 p-2 rounded-full border border-accent-cyan/40 text-accent-cyan hover:bg-accent-cyan hover:text-black transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const links = [
    project.github && { href: project.github, label: project.githubFrontend ? 'Code backend' : 'Code source', icon: Github },
    project.githubFrontend && { href: project.githubFrontend, label: 'Code frontend', icon: Github },
    project.demo && { href: project.demo, label: 'Voir la démo', icon: ExternalLink },
  ].filter(Boolean) as { href: string; label: string; icon: typeof Github }[]

  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-accent-cyan/30 bg-dark-card shadow-[0_0_60px_-15px_rgba(0,212,255,0.5)]"
      >
        <div className="group relative aspect-video bg-dark-surface">
          <ProjectVisual project={project} sizes="(max-width: 768px) 100vw, 672px" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:text-accent-cyan transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h2 id="project-modal-title" className="text-2xl font-title font-bold text-dark-text">
              <span className="mr-2" aria-hidden>{project.icon}</span>{project.title}
            </h2>
            <StatusBadge status={project.status} />
          </div>
          <div className="flex items-center gap-2 text-sm text-dark-muted mb-4">
            <Calendar className="w-4 h-4" /> {project.date} <span className="text-dark-border">•</span> {project.category}
          </div>

          <p className="text-dark-muted leading-relaxed font-body mb-6">{project.description}</p>

          <h3 className="text-sm font-section font-semibold text-accent-cyan mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4" /> Fonctionnalités clés
          </h3>
          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {project.features.map(feature => (
              <li key={feature} className="text-sm text-dark-text/90 flex items-start gap-2 font-body">
                <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-2 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map(tech => (
              <span key={tech} className="px-2.5 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/15 text-accent-cyan text-xs font-section">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {!project.github && (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark-border text-dark-muted text-sm font-section">
                <Lock className="w-4 h-4" /> Code source privé
              </span>
            )}
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/40 text-accent-cyan text-sm font-section hover:bg-accent-cyan hover:text-black transition-colors"
              >
                <Icon className="w-4 h-4" /> {label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [openProject, setOpenProject] = useState<Project | null>(null)

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter(project => project.category.includes(selectedCategory))

  return (
    <div className="min-h-screen pt-28 pb-16 bg-dark-bg relative overflow-hidden">
      {/* Halos d'ambiance */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full blur-3xl bg-accent-cyan/10" />
      <div className="pointer-events-none absolute bottom-0 -right-40 w-[36rem] h-[36rem] rounded-full blur-3xl bg-accent-blue/10" />

      <div className="container-custom relative z-10">
        {/* En-tête */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-cyan/40 bg-accent-cyan/5 text-sm font-section text-accent-cyan mb-5">
              <Code2 className="w-4 h-4" />
              Mes réalisations
            </span>
            <h1 className="text-5xl md:text-6xl font-title font-bold text-dark-text mb-4">
              Mes <span className="gradient-text neon-text-soft">Projets</span>
            </h1>
            <p className="text-lg text-dark-muted leading-relaxed font-body">
              Quelques projets sur lesquels j&apos;ai travaillé, alliant design, performance et expérience utilisateur.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            role="tablist"
            aria-label="Filtrer les projets"
            className="flex flex-wrap gap-3"
          >
            {categories.map(category => {
              const active = selectedCategory === category.name
              return (
                <button
                  key={category.name}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-section font-medium border transition-all duration-300 ${
                    active
                      ? 'bg-accent-cyan text-black border-accent-cyan shadow-[0_0_20px_rgba(0,212,255,0.45)]'
                      : 'border-dark-border text-dark-text hover:border-accent-cyan/60 hover:text-accent-cyan'
                  }`}
                >
                  {category.name}
                  <span className={`text-xs ${active ? 'text-black/60' : 'text-dark-muted'}`}>{category.count}</span>
                </button>
              )
            })}
          </motion.div>
        </div>

        {/* Grille de projets */}
        <motion.div layout className="grid lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={() => setOpenProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Appel à l'action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex items-center gap-6"
        >
          <div className="flex-1 h-px bg-linear-to-r from-transparent to-accent-cyan/40" />
          <div className="text-center">
            <Rocket className="w-6 h-6 text-accent-cyan mx-auto mb-2" />
            <h2 className="text-lg font-section font-bold text-dark-text">Un projet en tête ?</h2>
            <p className="text-sm text-dark-muted font-body mb-4">N&apos;hésitez pas à me contacter pour en discuter !</p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent-cyan/50 text-accent-cyan text-sm font-section hover:bg-accent-cyan hover:text-black transition-colors"
            >
              <Mail className="w-4 h-4" />
              Me contacter
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent to-accent-cyan/40" />
        </motion.div>
      </div>

      <AnimatePresence>
        {openProject && <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />}
      </AnimatePresence>
    </div>
  )
}
