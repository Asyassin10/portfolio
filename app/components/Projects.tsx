"use client"

import { motion } from "framer-motion"
import { Github, Star, GitFork, Eye, ExternalLink } from "lucide-react"
import SectionHeading from "./SectionHeading"

// Repository type
interface Repository {
  id: number
  name: string
  language: string
  url: string
  tags: string[]
  description?: string
  stars?: number
  forks?: number
  watchers?: number
}

// Web Project type
interface WebProject {
  id: number
  name: string
  description: string
  url: string
  backgroundImage: string
  tags: string[]
}

// Repository card component
const RepoCard = ({ repo, index }: { repo: Repository; index: number }) => {
  const languageColors: Record<string, string> = {
    PHP: "bg-indigo-500",
    JavaScript: "bg-yellow-500",
    TypeScript: "bg-blue-500",
    Python: "bg-green-500",
    Java: "bg-red-500",
    HTML: "bg-orange-500",
    CSS: "bg-pink-500",
    "C#": "bg-purple-500",
    Go: "bg-cyan-500",
    Ruby: "bg-rose-500",
    Rust: "bg-amber-500",
    Dart: "bg-emerald-500",
    Swift: "bg-fuchsia-500",
    Kotlin: "bg-lime-500",
    Shell: "bg-gray-500",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-indigo-500/20 h-full flex flex-col overflow-hidden hover:border-indigo-500/40 transition-all duration-300">
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-slate-800 mr-4 border border-indigo-500/20">
              <Github className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-display">{repo.name}</h3>
              {repo.language && (
                <div className="flex items-center text-slate-400 text-sm mt-1">
                  <span
                    className={`w-3 h-3 rounded-full ${languageColors[repo.language] || "bg-gray-500"} mr-2`}
                  ></span>
                  <span>{repo.language}</span>
                </div>
              )}
            </div>
          </div>

          <p className="text-slate-300 mb-4 flex-1">{repo.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {repo.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-slate-800 text-xs rounded-full text-slate-300 border border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          {(repo.stars || repo.forks || repo.watchers) && (
            <div className="flex items-center justify-between mb-4 text-sm">
              <div className="flex items-center gap-4">
                {repo.stars && (
                  <div className="flex items-center text-slate-300">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    <span>{repo.stars}</span>
                  </div>
                )}

                {repo.forks && (
                  <div className="flex items-center text-slate-300">
                    <GitFork className="w-4 h-4 mr-1 text-green-400" />
                    <span>{repo.forks}</span>
                  </div>
                )}

                {repo.watchers && (
                  <div className="flex items-center text-slate-300">
                    <Eye className="w-4 h-4 mr-1 text-blue-400" />
                    <span>{repo.watchers}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

// Web Project card component
const WebProjectCard = ({ project, index }: { project: WebProject; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-indigo-500/20 h-full flex flex-col overflow-hidden hover:border-indigo-500/40 transition-all duration-300 group">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.backgroundImage}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white font-display mb-2">{project.name}</h3>
          <p className="text-slate-300 mb-4 flex-1">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-slate-800 text-xs rounded-full text-slate-300 border border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-emerald-500/30"
          >
            <ExternalLink className="w-4 h-4" />
            Visiter le site
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  // GitHub repositories data
  const repositories: Repository[] = [
    {
      id: 1,
      name: "laravel-facade-generator ",
      language: "PHP",
      url: "https://github.com/Asyassin10/laravel-facade-generator",
      tags: ["Laravel", "Clean Architecture"],
      description: "Un générateur automatique de façades Laravel pour améliorer l'architecture de votre application.",
    },
    {
      id: 2,
      name: "Moroccan-ID-OCR-Scanner",
      language: "Python",
      url: "https://github.com/Asyassin10/Moroccan-ID-OCR-Scanner",
      tags: ["Flask", "Microservices", "Docker", "EasyOcr"],
      description: "Scanner OCR pour cartes d'identité marocaines utilisant l'intelligence artificielle.",
    },
    {
      id: 3,
      name: "laravel-s3-db-backup",
      language: "PHP",
      url: "https://github.com/Asyassin10/laravel-s3-db-backup",
      tags: ["PHP", "AWS"],
      description: "Solution de sauvegarde automatique des bases de données Laravel vers Amazon S3.",
    },
  ]

  // Web projects data
  const webProjects: WebProject[] = [
    {
      id: 4,
      name: "Meetpe",
      description: "Développement et déploiement du backend pour l'application mobile Meetpe, connectant les voyageurs avec des guides locaux, avec notifications en temps réel et algorithme de matching personnalisé.",
      url: "https://www.meetpe.fr/",
      backgroundImage: "https://www.meetpe.fr/assets/LogoMeetpe-Da2Xwly9.png",
      tags: [ ]
    },
    {
      id: 5,
      name: "Wecare",
      description: "Développement de la plateforme WECARE, une solution de prise de rendez-vous beauté en ligne au Maroc. Conception du back-end avec Laravel, utilisation de Blade pour les vues et d'AJAX pour les appels API dynamiques.",
      url: "https://wecare.ma",
      backgroundImage: "https://media.licdn.com/dms/image/v2/D4E2DAQFSismHMBc8VQ/profile-treasury-image-shrink_800_800/B4EZc3LJ4VGcAc-/0/1748977361161?e=1750161600&v=beta&t=-qMUVOmtnaCCfwWkqHBeRJEqIt5uKoO7lg1AsnYYaaE",
      tags: []
    },
    {
      id: 6,
      name: "Comptexpert",
      description: "Développement d'une solution Laravel pour l'Ordre des Experts-Comptables, intégrant un comparateur de logiciels comptables et une authentification sécurisée via CAS.",
      url: "https://www.experts-comptables.fr",
      backgroundImage: "https://www.experts-comptables.fr/sites/default/files/styles/csoec_12/public/assets/images/Ecran%20comptexpert%202023.jpg?itok=3Eh0Uvw8",
      tags: []
    }
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-slate-900 to-slate-950 z-0"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Projects" subtitle="Open-source repositories and development projects" />

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repositories.map((repo, index) => (
            <RepoCard key={repo.id} repo={repo} index={index} />
          ))}
          {webProjects.map((project, index) => (
            <WebProjectCard key={project.id} project={project} index={index + repositories.length} />
          ))}
        </div>

        {/* GitHub profile link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://github.com/Asyassin10?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
          >
            View All GitHub Projects
            <Github className="w-4 h-4 ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}