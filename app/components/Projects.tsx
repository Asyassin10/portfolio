"use client"

import { motion } from "framer-motion"
import { Github, Star, GitFork, Eye } from "lucide-react"
import SectionHeading from "./SectionHeading"

// Repository type
interface Repository {
  id: number
  name: string
  description: string
  stars: number
  forks: number
  watchers: number
  language: string
  url: string
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
          <div className="flex items-center justify-between mb-4 text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center text-slate-300">
                <Star className="w-4 h-4 mr-1 text-yellow-400" />
                <span>{repo.stars}</span>
              </div>

              <div className="flex items-center text-slate-300">
                <GitFork className="w-4 h-4 mr-1 text-green-400" />
                <span>{repo.forks}</span>
              </div>

              <div className="flex items-center text-slate-300">
                <Eye className="w-4 h-4 mr-1 text-blue-400" />
                <span>{repo.watchers}</span>
              </div>
            </div>
          </div>

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

export default function Projects() {
  // GitHub repositories data
  const repositories: Repository[] = [
    {
      id: 1,
      name: "laravel-clean-architecture",
      description:
        "A Laravel implementation of Clean Architecture principles with domain-driven design patterns and SOLID principles.",
      stars: 342,
      forks: 87,
      watchers: 45,
      language: "PHP",
      url: "https://github.com/username/laravel-clean-architecture",
      tags: ["Laravel", "Clean Architecture", "DDD", "SOLID"],
    },
    {
      id: 2,
      name: "symfony-microservices",
      description:
        "A collection of microservices built with Symfony, using RabbitMQ for message queuing and API Platform for RESTful APIs.",
      stars: 215,
      forks: 63,
      watchers: 32,
      language: "PHP",
      url: "https://github.com/username/symfony-microservices",
      tags: ["Symfony", "Microservices", "RabbitMQ", "API Platform"],
    },
    {
      id: 3,
      name: "angular-dashboard-template",
      description:
        "A responsive dashboard template built with Angular and NgRx, featuring dynamic charts, tables, and authentication.",
      stars: 178,
      forks: 42,
      watchers: 28,
      language: "TypeScript",
      url: "https://github.com/username/angular-dashboard-template",
      tags: ["Angular", "NgRx", "Dashboard", "TypeScript"],
    },
    {
      id: 4,
      name: "payment-gateway-integration",
      description:
        "A library for integrating multiple payment gateways (Stripe, PayPal, etc.) with a unified API for e-commerce applications.",
      stars: 124,
      forks: 35,
      watchers: 18,
      language: "PHP",
      url: "https://github.com/username/payment-gateway-integration",
      tags: ["Payments", "Stripe", "PayPal", "E-commerce"],
    },
    {
      id: 5,
      name: "document-validation-system",
      description:
        "A document validation system with electronic signature capabilities, built for legal professionals.",
      stars: 97,
      forks: 24,
      watchers: 15,
      language: "JavaScript",
      url: "https://github.com/username/document-validation-system",
      tags: ["Document Validation", "Electronic Signatures", "Legal Tech"],
    },
    {
      id: 6,
      name: "social-media-scheduler",
      description:
        "A platform for scheduling and managing social media posts across multiple platforms with analytics.",
      stars: 85,
      forks: 19,
      watchers: 12,
      language: "PHP",
      url: "https://github.com/username/social-media-scheduler",
      tags: ["Social Media", "Laravel", "OAuth", "API Integration"],
    },
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

        {/* GitHub Repositories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repositories.map((repo, index) => (
            <RepoCard key={repo.id} repo={repo} index={index} />
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
            href="https://github.com/username"
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
