'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Code2, Smartphone, Server, Wrench, Database, Palette, Terminal, Layers, GitBranch } from 'lucide-react'

const skillsData = [
  {
    category: 'Backend & Architecture',
    terminalCommand: '> execute backend_stack.exe',
    icon: Server,
    color: 'from-accent-cyan to-primary-400',
    codeSnippet: `// Laravel API Routes
Route::middleware('auth:api')->get('/user', function ($request) {
    return $request->user();
});`,
    skills: [
      { name: 'Laravel', level: 88 },
      { name: 'Spring Boot', level: 82 },
      { name: 'Node.js', level: 85 },
      { name: 'API REST', level: 90 },
    ],
  },
  {
    category: 'Développement Web',
    terminalCommand: '> compile web_applications.php',
    icon: Code2,
    color: 'from-accent-blue to-accent-purple',
    codeSnippet: `// Laravel Eloquent Models
$users = User::with('projects')
    ->where('active', true)
    ->orderBy('created_at', 'desc')
    ->get();`,
    skills: [
      { name: 'Laravel', level: 70 },
      { name: 'React / Next.js', level: 60 },
      { name: 'JavaScript / TypeScript', level: 70 },
      { name: 'Tailwind CSS', level: 60 },
      { name: 'Bootstrap', level: 75 },
    ],
  },
  {
    category: 'Développement Mobile',
    terminalCommand: '> flutter build apk --release',
    icon: Smartphone,
    color: 'from-accent-purple to-accent-cyan',
    codeSnippet: `// Flutter Widget Builder
class MyWidget extends StatefulWidget {
  @override
  _MyWidgetState createState() => _MyWidgetState();
}`,
    skills: [
      { name: 'Flutter', level: 70 },
      { name: 'Dart', level: 70 },
      { name: 'Android Studio', level: 65 },
      { name: 'Firebase Integration', level: 68 },
    ],
  },
  {
    category: 'Backend & Database',
    terminalCommand: '> initialize backend_systems.sql',
    icon: Database,
    color: 'from-accent-green to-accent-cyan',
    codeSnippet: `-- MySQL Query Optimization
SELECT u.name, p.title FROM users u 
INNER JOIN projects p ON u.id = p.user_id
WHERE u.active = 1;`,
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'Node.js', level: 75 },
      { name: 'Firebase', level: 80 },
    ],
  },
  {
    category: 'Outils & Methodologies',
    terminalCommand: '> deploy project_management.sh',
    icon: GitBranch,
    color: 'from-accent-yellow to-accent-orange',
    codeSnippet: `# Git Workflow & Project Management
git checkout -b feature/new-module
git add . && git commit -m "feat: implement user auth"
git push origin feature/new-module`,
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Trello', level: 85 },
      { name: 'Agile / Scrum', level: 80 },
      { name: 'UML / Merise', level: 78 },
    ],
  },
]

// Section outils favoris supprimée selon la demande

const learningTechnologies = [
  { name: 'IA/Machine Learning', icon: '🤖' },
  { name: 'Python Django', icon: '🐍' },
  { name: 'Kubernetes', icon: '☸️' },
  { name: 'GraphQL', icon: '📊' },
  { name: 'Vue.js', icon: '💚' },
  { name: 'Microservices', icon: '🔗' },
  { name: 'TypeScript Advanced', icon: '📘' },
  { name: 'AWS/Azure', icon: '☁️' },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="min-h-screen pt-20 bg-dark-bg relative overflow-hidden">
      {/* Curseur personnalisé CSS */}
      <style jsx global>{`
        .tech-cursor {
          cursor: none;
        }
        .tech-cursor:hover {
          cursor: none;
        }
        .debug-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          border: 2px solid #00E5FF;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transition: transform 0.1s ease;
        }
        
        @keyframes scanner {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        .scanner-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.8), transparent);
          animation: scanner 2s ease-in-out;
        }
        
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
        
        .code-snippet {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid #00E5FF;
          border-radius: 8px;
          padding: 12px;
          font-family: 'Fira Code', monospace;
          font-size: 12px;
          color: #00E5FF;
          white-space: pre-wrap;
          backdrop-filter: blur(10px);
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.3s ease;
        }
        
        .group:hover .code-snippet {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
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
              <Code2 className="w-4 h-4" />
              <span>Compétences</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-5xl font-title font-bold mb-4 text-dark-text"
            >
              Mes <span className="gradient-text neon-text-soft">technologies</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-dark-muted leading-relaxed font-body"
            >
              Un arsenal technologique moderne pour créer des expériences exceptionnelles
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section Compétences principales */}
      <section className="py-6 md:py-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="card-glass p-5 rounded-xl hover-glow group tech-cursor relative"
              >
                {/* Terminal Command Effect - Version fixe */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.3 }}
                  className="absolute top-2 right-2 text-xs font-mono text-accent-cyan/60"
                >
                  {category.terminalCommand}
                </motion.div>

                {/* Header de catégorie */}
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      boxShadow: "0 0 30px rgba(0, 229, 255, 0.5)"
                    }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 bg-gradient-to-br ${category.color} rounded-lg group-hover:shadow-lg group-hover:shadow-accent-cyan/20 relative overflow-hidden`}
                  >
                    <category.icon className="w-6 h-6 text-black relative z-10" />
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      className="absolute inset-0 bg-white/20"
                    />
                  </motion.div>
                  <h2 className="text-xl font-section font-bold text-dark-text">
                    {category.category}
                  </h2>
                </div>

                {/* Code Snippet (révélé au hover) */}
                <div className="code-snippet mb-4">
                  {category.codeSnippet}
                </div>

                {/* Liste des compétences */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="skill-item"
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-dark-text font-body font-medium flex items-center gap-2">
                          {skill.name}
                          {hoveredSkill === skill.name && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="text-accent-cyan text-xs"
                            >
                              <Terminal className="w-3 h-3" />
                            </motion.span>
                          )}
                        </span>
                        <span className="text-accent-cyan text-sm font-section font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Barre de progression simplifiée */}
                      <div className="w-full bg-dark-surface/50 rounded-full h-2 overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.2, 
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.1),
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
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

      {/* Section outils favoris supprimée */}

      {/* Section Flux de Technologies en Apprentissage */}
      <section className="py-8 md:py-12">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-cyan/20 to-primary-400/20 backdrop-blur-sm rounded-full text-sm font-section text-accent-cyan mb-4 border border-accent-cyan/30"
              >
                <Terminal className="w-4 h-4" />
                <span className="font-mono">~/continuous_learning$</span>
              </motion.div>
              
              <h2 className="text-xl md:text-2xl font-title font-bold text-dark-text mb-3">
                <span className="gradient-text neon-text-soft">Veille technologique</span> active
              </h2>
              <p className="text-dark-muted font-body max-w-2xl mx-auto">
                Technologies explorées et en cours de maîtrise
              </p>
            </motion.div>

            {/* Data Stream Effect */}
            <div className="relative overflow-hidden bg-dark-card/30 rounded-xl p-6 border border-accent-cyan/20">
              <div className="flex gap-6 infinite-scroll">
                {/* Première série */}
                {learningTechnologies.map((tech, index) => (
                  <motion.div
                    key={`first-${tech.name}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex-shrink-0 flex items-center gap-3 bg-dark-surface/50 px-4 py-2 rounded-lg border border-accent-cyan/10 hover:border-accent-cyan/30 transition-all"
                  >
                    <span className="text-2xl animate-pulse">{tech.icon}</span>
                    <span className="text-sm font-body text-dark-text whitespace-nowrap">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
                {/* Deuxième série (pour l'effet de boucle infinie) */}
                {learningTechnologies.map((tech, index) => (
                  <motion.div
                    key={`second-${tech.name}`}
                    className="flex-shrink-0 flex items-center gap-3 bg-dark-surface/50 px-4 py-2 rounded-lg border border-accent-cyan/10 hover:border-accent-cyan/30 transition-all"
                  >
                    <span className="text-2xl animate-pulse">{tech.icon}</span>
                    <span className="text-sm font-body text-dark-text whitespace-nowrap">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Gradient fade sur les côtés */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-dark-card/30 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-dark-card/30 to-transparent pointer-events-none" />
            </div>

            {/* Stats de veille */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
            >
              {[
                { value: '8+', label: 'Technologies explorées' },
                { value: '24/7', label: 'Veille technologique' },
                { value: '∞', label: 'Curiosité technique' },
                { value: '100%', label: 'Passion d\'apprendre' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="card-glass p-3 rounded-lg"
                >
                  <div className="text-lg font-title font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-dark-muted font-body">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA vers projets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/projects"
                className="btn-primary group inline-block"
              >
                <span>Découvrir mes projets</span>
                <Code2 className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
