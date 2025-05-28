"use client"

import { motion } from "framer-motion"
import { Server, Package, Copy } from "lucide-react"
import { useState } from "react"
import SectionHeading from "./SectionHeading"

// Docker image type
interface DockerImage {
  id: number
  name: string
  description: string
  url: string
  tags: string[]
  pullCommand: string
}

// Docker image card component
const DockerCard = ({ image, index }: { image: DockerImage; index: number }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(image.pullCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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

        {/* Pull command */}
        <div className="relative mb-6">
          <div className="bg-slate-800 rounded-lg p-3 pr-12 font-mono text-sm text-blue-300 overflow-x-auto">
            {image.pullCommand}
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
              <Copy className="w-4 h-4" />
            )}
          </button>
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

export default function DockerHubImages() {
  // First 2 Docker Hub images only
  const dockerImages: DockerImage[] = [
    {
      id: 1,
      name: "yassine374/kabord-bard",
      description:
        "A containerized AI chatbot application built with modern web technologies, featuring real-time conversation capabilities and intelligent response generation.",
      url: "https://hub.docker.com/r/yassine374/kabord-bard",
      tags: ["AI", "Chatbot", "Node.js", "Real-time"],
      pullCommand: "docker pull yassine374/kabord-bard:latest",
    },
    {
      id: 2,
      name: "yassine374/moroccan-id-ocr",
      description:
        "OCR scanner specifically designed for Moroccan national ID cards, built with Python, Flask, and EasyOCR for accurate text extraction and data processing.",
      url: "https://hub.docker.com/repository/docker/yassine374/moroccan-id-ocr/general",
      tags: ["OCR", "Python", "Flask", "EasyOCR", "Morocco"],
      pullCommand: "docker pull yassine374/moroccan-id-ocr:latest",
    },
  ]

  return (
    <section id="dockerhub" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900 to-slate-950 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="My Docker Hub Images"
          subtitle="Containerized solutions for development, testing, and production environments"
        />

        {/* Docker Hub Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {dockerImages.map((image, index) => (
            <DockerCard key={image.id} image={image} index={index} />
          ))}
        </div>

        {/* Docker Hub profile link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://hub.docker.com/u/yassine374"
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
