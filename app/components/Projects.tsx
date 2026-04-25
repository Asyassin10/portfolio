"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Star, GitFork, Eye, ExternalLink, Trophy, Sparkles, Play } from "lucide-react"
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
  isFeatured?: boolean
  youtubeUrl?: string
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
  const [videoPlaying, setVideoPlaying] = useState(false)

  if (project.isFeatured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="col-span-full"
      >
        <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-yellow-500/40 hover:border-yellow-500/60 shadow-lg shadow-yellow-500/10 overflow-hidden transition-all duration-300 group relative">
          <div className="absolute -top-2 -left-2 text-yellow-400/60 z-10"><Sparkles className="w-4 h-4" /></div>
          <div className="absolute -bottom-2 -right-2 text-yellow-400/60 z-10"><Sparkles className="w-4 h-4" /></div>

          <div className="flex flex-col lg:flex-row">
            {/* Left: video with image as poster */}
            <div className="lg:w-1/2 relative" style={{ minHeight: "320px" }}>
              {!videoPlaying ? (
                <div
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => setVideoPlaying(true)}
                >
                  <img
                    src={project.backgroundImage}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-yellow-500/90 flex items-center justify-center hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/50">
                      <Play className="w-7 h-7 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/iSPLAIAIoPI?autoplay=1"
                  title="EadgeQuery Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>

            {/* Right: content */}
            <div className="lg:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white font-display">{project.name}</h3>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 text-yellow-300 text-xs font-semibold rounded-full border border-yellow-500/30">
                    <Star className="w-3 h-3" />
                    Featured
                  </span>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-full border bg-yellow-500/10 text-yellow-300 border-yellow-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-medium bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
              >
                <ExternalLink className="w-4 h-4" />
                Explore Project
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    )
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
      <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-indigo-500/20 h-full flex flex-col overflow-hidden hover:border-indigo-500/40 transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <img
            src={project.backgroundImage}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white font-display mb-2">{project.name}</h3>
          <p className="text-slate-300 mb-4 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-2 py-1 text-xs rounded-full border bg-slate-800 text-slate-300 border-slate-700">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-medium bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white transition-all duration-300 shadow-lg hover:shadow-emerald-500/30"
          >
            <ExternalLink className="w-4 h-4" />
            Visit Website
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
      name: "voice-ai-assistant",
      language: "Python",
      url: "https://github.com/Asyassin10/voice-ai-assistant",
      tags: ["Whisper STT", "LLM", "Kokoro TTS", "Qdrant", "RAG"],
      description: "Multilingual voice assistant (French & Arabic) using Whisper STT, local LLM, Kokoro TTS, and Qdrant for context-aware responses.",
    },
  ]

  // Web projects data - Eadgequery marked as featured
  const webProjects: WebProject[] = [
    {
      id: 8,
      name: "EadgeQuery",
      description: "I developed EadgeQuery, an AI-powered data platform that connects to multiple databases. Users can ask questions in natural language, and the AI generates intelligent queries, analyzes the data, and delivers responses along with visual insights through a user-friendly interface.",
      url: "https://eadgequery.space/",
      backgroundImage: "/eadge.png",
      tags: ["AI", "SQL", "Natural Language", "Data Analysis", "Microservices", "Spring Boot", "LLM", "RAG"],
      isFeatured: true
    },
    {
      id: 4,
      name: "Meetpe",
      description: "Developed and deployed the backend for the Meetpe mobile application, connecting travelers with local guides, featuring real-time notifications and a personalized matching algorithm.",
      url: "https://www.meetpe.fr/",
      backgroundImage: "https://www.meetpe.fr/assets/LogoMeetpe-Da2Xwly9.png",
      tags: ["Backend", "Mobile", "Real-time", "Matching Algorithm"]
    },
    {
      id: 5,
      name: "Wecare",
      description: "Developed the WECARE platform, an online beauty appointment solution in Morocco. Designed the backend using Laravel, utilized Blade for views, and implemented AJAX for dynamic API calls.",
      url: "https://wecare.ma",
      backgroundImage: "/images/wecare-1.png",
      tags: ["Laravel", "E-commerce", "Booking System", "AJAX"]
    },
    {
      id: 89,
      name: "BTI Advisory",
      description: "Developed a static website for BTI Advisory Company, implementing responsive design, interactive elements, and performance optimization to enhance user experience and support business operations.",
      url: "https://www.bti-advisory.com/",
      backgroundImage: "https://www.bti-advisory.com/wp-content/uploads/2024/07/etude-de-cas-jpg.webp",
      tags: []
    },
    {
      id: 6,
      name: "Comptexpert",
      description: "Developed a Laravel solution for the Order of Chartered Accountants, integrating an optimized e-commerce platform and secure authentication via CAS.",
      url: "https://www.experts-comptables.fr",
      backgroundImage: "https://www.experts-comptables.fr/sites/default/files/styles/csoec_12/public/assets/images/Ecran%20comptexpert%202023.jpg?itok=3Eh0Uvw8",
      tags: ["Laravel", "E-commerce", "CAS Authentication", "Enterprise"]
    }
  ];


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

        {/* Featured Project Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-center text-slate-300 max-w-2xl mx-auto">
            Check out my flagship project that transforms complex data queries into simple conversations
          </p>
        </motion.div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured project first */}
          {webProjects
            .sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))
            .map((project, index) => (
              <WebProjectCard key={project.id} project={project} index={index} />
            ))}
          {repositories.map((repo, index) => (
            <RepoCard key={repo.id} repo={repo} index={index + webProjects.length} />
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