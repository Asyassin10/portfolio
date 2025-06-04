"use client"

import { motion } from "framer-motion"
import { Package, Github, Terminal, Code } from "lucide-react"
import { useState } from "react"
import SectionHeading from "./SectionHeading"

// Composer package type
interface ComposerPackage {
  id: number
  name: string
  description: string
  version: string
  installCommand: string
  githubUrl: string
  packagistUrl: string
  tags: string[]
}

// Package card component
const PackageCard = ({ pkg, index }: { pkg: ComposerPackage; index: number }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pkg.installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
          <div className="p-3 rounded-full bg-indigo-500/20 mr-4">
            <Package className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300 font-display">
              {pkg.name}
            </h3>
            <div className="flex items-center text-slate-400 text-sm">
              <span>v{pkg.version}</span>
            </div>
          </div>
        </div>

        <p className="text-slate-300 mb-6 flex-1">{pkg.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {pkg.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-slate-800 text-xs rounded-full text-slate-300 border border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Installation command */}
        <div className="relative mb-6">
          <div className="bg-slate-800 rounded-lg p-3 pr-12 font-mono text-sm text-indigo-300 overflow-x-auto">
            {pkg.installCommand}
          </div>
          <button
            onClick={copyToClipboard}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-300"
            aria-label="Copy to clipboard"
          >
            {copied ? (
              <motion.span initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-green-400">
                ✓
              </motion.span>
            ) : (
              <Terminal className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <a
            href={pkg.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>

          <a
            href={pkg.packagistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all duration-300"
          >
            <Code className="w-4 h-4" />
            Packagist
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function ComposerPackages() {
  // Sample Composer packages data
  const packages: ComposerPackage[] = [
    {
      id: 1,
      name: "yassine-as/laravel-cas-auth",
      description:
        "A comprehensive CAS (Central Authentication Service) authentication package for Laravel applications with support for single sign-on and user attribute mapping.",
      version: "2.1.0",
      installCommand: "composer require yassine-as/laravel-cas-auth",
      githubUrl: "https://github.com/Asyassin10/laravel-cas-auth",
      packagistUrl: "https://packagist.org/packages/yassine-as/laravel-cas-auth",
      tags: ["Laravel", "CAS", "Authentication", "SSO"],
    },
    {
      id: 2,
      name: "yassine-as/laravel-s3-db-backup",
      description:
        "Laravel package for automated database backups to Amazon S3 with scheduling, compression, and retention policies for reliable data protection.",
      version: "1.3.2",
      installCommand: "composer require yassine-as/laravel-s3-db-backup",
      githubUrl: "https://github.com/Asyassin10/laravel-s3-db-backup",
      packagistUrl: "https://packagist.org/packages/yassine-as/laravel-s3-db-backup",
      tags: ["Laravel", "S3", "Database", "Backup", "AWS"],
    },
    {
      id: 3,
      name: "yassine-as/laravel-webp",
      description:
        "Laravel package for automatic WebP image conversion and optimization with support for fallback formats and configurable quality settings.",
      version: "1.2.1",
      installCommand: "composer require yassine-as/laravel-webp",
      githubUrl: "https://github.com/Asyassin10/laravel-webp",
      packagistUrl: "https://packagist.org/packages/yassine-as/laravel-webp",
      tags: ["Laravel", "WebP", "Image", "Optimization", "Performance"],
    },
  ]

  return (
    <section id="packages" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-900 to-slate-950 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Composer Packages" subtitle="Open-source PHP packages available on Packagist" />

        {/* Packages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Packagist profile link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://packagist.org/packages/yassine-as/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 mr-4"
          >
            View All Packages on Packagist
            <Code className="w-4 h-4 ml-1" />
          </a>

        </motion.div>
      </div>
    </section>
  )
}
