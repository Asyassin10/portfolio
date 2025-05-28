"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Package, Database, Server, Code, Star, GitFork, Eye } from "lucide-react"
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
  isGithub: boolean
  tags: string[]
}

// Docker image type
interface DockerImage {
  id: number
  name: string
  description: string
  pulls: number
  stars: number
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
      className="bg-slate-900/80 backdrop-blur-md rounded-xl border border-indigo-500/20 overflow-hidden flex flex-col group hover:border-indigo-500/40 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-full bg-slate-800 mr-4 border border-indigo-500/20">
            {repo.isGithub ? (
              <Github className="w-6 h-6 text-indigo-400" />
            ) : (
              <Code className="w-6 h-6 text-blue-400" />
            )}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300 font-display">
              {repo.name}
            </h3>
            {repo.language && (
              <div className="flex items-center text-slate-400 text-sm mt-1">
                <span className={`w-3 h-3 rounded-full ${languageColors[repo.language] || "bg-gray-500"} mr-2`}></span>
                <span>{repo.language}</span>
              </div>
            )}
          </div>
        </div>

        <p className="text-slate-300 mb-6 flex-1">{repo.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
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
        <div className="flex items-center justify-between mb-6 text-sm">
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

        {/* Link */}
        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all duration-300 mt-auto"
        >
          {repo.isGithub ? (
            <>
              <Github className="w-4 h-4" />
              View on GitHub
            </>
          ) : (
            <>
              <ExternalLink className="w-4 h-4" />
              View Repository
            </>
          )}
        </a>
      </div>
    </motion.div>
  )
}

// Docker image card component
const DockerCard = ({ image, index }: { image: DockerImage; index: number }) => {
  return (
    <motion.div
      className="bg-slate-900/80 backdrop-blur-md rounded-xl border border-blue-500/20 overflow-hidden flex flex-col group hover:border-blue-500/40 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-full bg-slate-800 mr-4 border border-blue-500/20">
            <Server className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 font-display">
              {image.name}
            </h3>
            <div className="flex items-center text-slate-400 text-sm mt-1">
              <Package className="w-4 h-4 mr-1" />
              <span>Docker Image</span>
            </div>
          </div>
        </div>

        <p className="text-slate-300 mb-6 flex-1">{image.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {image.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-slate-800 text-xs rounded-full text-slate-300 border border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-6 text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center text-slate-300">
              <Database className="w-4 h-4 mr-1 text-cyan-400" />
              <span>{image.pulls.toLocaleString()} pulls</span>
            </div>

            <div className="flex items-center text-slate-300">
              <Star className="w-4 h-4 mr-1 text-yellow-400" />
              <span>{image.stars}</span>
            </div>
          </div>
        </div>

        {/* Link */}
        <a
          href={image.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 mt-auto"
        >
          <Server className="w-4 h-4" />
          View on Docker Hub
        </a>
      </div>
    </motion.div>
  )
}

export default function Repositories() {
  // Sample GitHub repositories data
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
      isGithub: true,
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
      isGithub: true,
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
      isGithub: true,
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
      isGithub: true,
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
      isGithub: true,
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
      isGithub: true,
      tags: ["Social Media", "Laravel", "OAuth", "API Integration"],
    },
  ]

  // Sample Docker Hub images data
  const dockerImages: DockerImage[] = [
    {
      id: 1,
      name: "php-symfony-production",
      description:
        "A production-ready Docker image for Symfony applications with PHP 8.2, Nginx, and optimized configurations.",
      pulls: 125000,
      stars: 87,
      url: "https://hub.docker.com/r/username/php-symfony-production",
      tags: ["PHP 8.2", "Symfony", "Nginx", "Production"],
    },
    {
      id: 2,
      name: "laravel-development",
      description:
        "A development environment for Laravel with PHP 8.2, MySQL, Redis, and all necessary extensions for local development.",
      pulls: 87500,
      stars: 63,
      url: "https://hub.docker.com/r/username/laravel-development",
      tags: ["PHP 8.2", "Laravel", "MySQL", "Redis", "Development"],
    },
    {
      id: 3,
      name: "angular-ci",
      description:
        "A Docker image for Angular CI/CD pipelines with Node.js, Chrome headless for testing, and build optimization tools.",
      pulls: 62000,
      stars: 42,
      url: "https://hub.docker.com/r/username/angular-ci",
      tags: ["Angular", "Node.js", "CI/CD", "Testing"],
    },
    {
      id: 4,
      name: "php-testing",
      description:
        "A specialized Docker image for PHP testing with PHPUnit, Codeception, and code coverage tools pre-installed.",
      pulls: 45000,
      stars: 35,
      url: "https://hub.docker.com/r/username/php-testing",
      tags: ["PHP", "Testing", "PHPUnit", "Codeception"],
    },
  ]

  return (
    <section id="repositories" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-slate-900 to-slate-950 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Repositories & Docker Images"
          subtitle="Open-source projects and containerized solutions"
        />

        {/* GitHub Repositories */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Github className="w-6 h-6 text-indigo-400" />
            GitHub Repositories
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repositories.map((repo, index) => (
              <RepoCard key={repo.id} repo={repo} index={index} />
            ))}
          </div>
        </div>

        {/* Docker Hub Images */}
        <div>
          <motion.h3
            className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Server className="w-6 h-6 text-blue-400" />
            Docker Hub Images
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dockerImages.map((image, index) => (
              <DockerCard key={image.id} image={image} index={index} />
            ))}
          </div>
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
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 mr-4"
          >
            View All GitHub Projects
            <Github className="w-4 h-4 ml-1" />
          </a>

          <a
            href="https://hub.docker.com/u/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
          >
            View All Docker Images
            <Server className="w-4 h-4 ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
