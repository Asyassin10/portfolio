"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, Zap, ExternalLink, ImageIcon } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import SectionHeading from "./SectionHeading"
import type { Experience, ProjectImageModalProps } from "@/types"

// Project image modal component
const ProjectImageModal: React.FC<ProjectImageModalProps> = ({ isOpen, onClose, images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  if (!isOpen) return null

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = (): void => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="relative max-w-4xl w-full p-2" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-4 right-4 z-10 bg-slate-800/80 p-2 rounded-full text-white hover:bg-slate-700"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="relative w-full h-[80vh] bg-slate-900 rounded-lg overflow-hidden">
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
          />
        </div>

        {images.length > 1 && (
          <div className="absolute inset-x-0 bottom-10 flex justify-center gap-2">
            <button className="bg-slate-800/80 p-3 rounded-full text-white hover:bg-slate-700" onClick={handlePrev}>
              ←
            </button>
            <button className="bg-slate-800/80 p-3 rounded-full text-white hover:bg-slate-700" onClick={handleNext}>
              →
            </button>
          </div>
        )}

        <div className="absolute bottom-4 inset-x-0 text-center text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}

const ExperienceComponent: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [currentImages, setCurrentImages] = useState<{ src: string; alt: string }[]>([])

  const openModal = (images: { src: string; alt: string }[]): void => {
    setCurrentImages(images)
    setModalOpen(true)
  }

  const experiences: Experience[] = [
    {
      period: "Jan 2026 - Present",
      role: "Lead PHP Engineer & AI Integrations",
      company: "Pillot",
      color: "cyan",
      projects: [
        {
          title: "🛰️ GPS Fleet Management System",
          description:
            "Supporting and improving a GPS fleet management platform tracking 500+ vehicles in real time, with geofencing, route optimization, and telematics — reducing manual fleet check-ins by ~40%.",
          links: [],
          images: [],
        },
        {
          title: "🤖 MCP Fleet AI Integration",
          description:
            "Built and maintained MCP (Model Context Protocol) integrations exposing fleet data to AI agents, enabling natural language queries across 10+ data sources including vehicles, trips, and alerts — cutting average query time from minutes to seconds.",
          links: [],
          images: [],
        },
        {
          title: "📊 Flespi Fleet Monitoring Dashboard",
          description:
            "Designed and built a real-time Grafana dashboard connected to Flespi telematics, visualizing GPS positions, vehicle states, trip metrics, and alerts for 500+ devices — giving operators a live overview and reducing incident response time by ~30%.",
          links: [],
          images: [],
        },
      ],
    },
    {
      period: "Feb 2023 - Dec 2025",
      role: "Software Developer",
      company: "Bti Advisory",
      color: "indigo",
      projects: [
        {
          title: "🌐 Document Validation System for Lawyers",
          description:
            "Optimized and maintained a legal document validation system used by 70,000+ lawyers in France. Migrated file storage to Amazon S3 (reducing storage costs by 35%) and implemented electronic signatures via CertEurope APIs. Built with Symfony and Angular.",
          links: [{ url: "https://cnb.avocat.fr/fr", label: "CNB Platform" }],
          images: [],
        },
        {
          title: "💳 Payment Module Maintenance",
          description:
            "Maintained and supervised the payment module of the CNB platform, ensuring transaction stability and compliance. Actively participated in developing and improving the e-learning platform.",
          links: [{ url: "https://formations.avocat.fr", label: "E-Learning Platform" }],
          images: [],
        },
        {
          title: "📋 Multi-Platform Billing API",
          description:
            "Designed a generic multi-platform billing API to facilitate invoice generation and streamline management processes.",
          links: [],
          images: [],
        },
        {
          title: "📱 Meetpe Mobile App Backend",
          description:
            "Developed and deployed the backend for the Meetpe mobile app, connecting travelers with local guides. Implemented real-time push notifications and a matching algorithm handling 1,000+ daily matches with sub-200ms response time.",
          links: [{ url: "https://www.meetpe.fr", label: "Meetpe Website" }],
          images: [{ src: "/images/meetpe-app.png", alt: "Meetpe mobile app interface showing a local guide profile" }],
        },
        {
          title: "🛠️ Laravel Solution for Accountants",
          description:
            "Developed a Laravel solution for the Order of Chartered Accountants, integrating an optimized e-commerce platform and secure authentication via CAS.",
          links: [{ url: "https://www.experts-comptables.fr", label: "Experts-Comptables" }],
          images: [],
        },
      ],
    },
    {
      period: "Oct 2022 - Jan 2023",
      role: "Software Developer",
      company: "Easyapp24",
      color: "blue",
      projects: [
        {
          title: "🌐 Social Media Management Platform",
          description:
            "Worked on the EsyApp24 project, a web platform for managing social media publications. Developed the web interface using Laravel and integrated APIs and SDKs for major social platforms like Facebook, LinkedIn, YouTube, and Twitter.",
          links: [],
          images: [],
        },
        {
          title: "🔄 Content Scheduling System",
          description:
            "Implemented features allowing users to schedule, publish, and manage their content across multiple networks from a centralized interface.",
          links: [],
          images: [],
        },
        {
          title: "🔐 OAuth Authentication",
          description:
            "Set up authentication via OAuth for each social network, optimizing API communication to ensure smooth performance and good user experience.",
          links: [],
          images: [],
        },
      ],
    },
    {
      period: "Oct 2021 - Nov 2022",
      role: "Software Developer",
      company: "Wecare",
      color: "violet",
      projects: [
        {
          title: "🌐 Beauty Appointment Platform",
          description:
            "Developed the WECARE platform, an online beauty appointment solution in Morocco. Built the back-end with Laravel, using Blade for views and AJAX for dynamic API calls.",
          links: [],
          images: [
            { src: "/images/wecare-1.png", alt: "WECARE platform showing calendar interface for appointments" },
            { src: "/images/wecare-2.png", alt: "WECARE platform showing beauty services categories" },
          ],
        },
        {
          title: "🔄 REST API Development",
          description:
            "Created and managed a REST API to ensure communication between the front-end and back-end. Tracked and organized tasks via Trello using an agile method.",
          links: [],
          images: [],
        },
        {
          title: "📱 Mobile App Maintenance",
          description:
            "Maintained the hybrid mobile application developed with Ionic + Angular, using a WebView to integrate the web interface.",
          links: [],
          images: [],
        },
        {
          title: "🚀 CI/CD Implementation",
          description: "Set up GitHub Actions for automating tests and continuous deployments.",
          links: [],
          images: [],
        },
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900 to-slate-950 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Experience" />

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp: Experience, index: number) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute top-16 bottom-0 left-8 w-0.5 bg-gradient-to-b from-indigo-500 to-blue-500">
                  <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-white"
                    animate={{
                      y: [0, 100, 200, 300, 400],
                      opacity: [1, 0.8, 0.6, 0.4, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </div>
              )}

              <div className="flex items-start">
                {/* Timeline dot */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center z-10 relative border border-indigo-500/30">
                    <Briefcase className={`w-8 h-8 text-${exp.color}-400`} />
                  </div>
                </div>

                {/* Content */}
                <div className="ml-8 bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-indigo-500/20 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-display">
                      <Zap className={`w-5 h-5 text-${exp.color}-400`} />
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-indigo-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-6">
                    <MapPin className="w-4 h-4 text-slate-400 mr-1" />
                    <span className="text-slate-300">{exp.company}</span>
                  </div>

                  <div className="space-y-4">
                    {exp.projects.map((project, i: number) => (
                      <motion.div
                        key={i}
                        className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 group hover:border-indigo-500/30 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                      >
                        <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                        <p className="text-slate-300 mb-3">{project.description}</p>

                        {/* Project images and links */}
                        <div className="flex flex-wrap items-center gap-2 mt-3">
                          {/* Image preview button */}
                          {project.images.length > 0 && (
                            <button
                              onClick={() => openModal(project.images)}
                              className="inline-flex items-center gap-1 px-3 py-1 bg-slate-700 hover:bg-indigo-600 rounded-full text-sm text-white transition-colors duration-300"
                            >
                              <ImageIcon className="w-3 h-3" />
                              View {project.images.length > 1 ? "Screenshots" : "Screenshot"}
                            </button>
                          )}

                          {/* Links */}
                          {project.links.map((link, linkIndex: number) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 bg-slate-700 hover:bg-indigo-600 rounded-full text-sm text-white transition-colors duration-300"
                            >
                              <ExternalLink className="w-3 h-3" />
                              {link.label}
                            </a>
                          ))}
                        </div>

                        {/* Image thumbnails (small preview) */}
                        {project.images.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.images.map((img, imgIndex: number) => (
                              <div
                                key={imgIndex}
                                className="relative w-16 h-16 rounded-xl overflow-hidden cursor-pointer border border-slate-600 hover:border-indigo-400 transition-colors"
                                onClick={() => openModal(project.images)}
                              >
                                <Image
                                  src={img.src || "/placeholder.svg"}
                                  alt={img.alt}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image modal */}
      <ProjectImageModal isOpen={modalOpen} onClose={() => setModalOpen(false)} images={currentImages} />
    </section>
  )
}

export default ExperienceComponent
