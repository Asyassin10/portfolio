"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  Brain,
  Code,
  Palette,
  Server,
  Database,
  Container,
  TestTube,
  Globe,
  Kanban,
  Monitor,
  Building,
} from "lucide-react"
import SectionHeading from "./SectionHeading"

// Particle animation component
const ParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-indigo-500/30"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.3,
          }}
          animate={{
            x: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

// Skill category component
const SkillCategory = ({
  title,
  skills,
  color,
  index,
  icon: Icon,
}: {
  title: string
  skills: string[]
  color: string
  index: number
  icon: React.ComponentType<{ className?: string }>
}) => {
  return (
    <motion.div
      className={`bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-${color}-500/20 group hover:border-${color}-500/40 transition-all duration-300`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-full bg-${color}-500/20 mr-3`}>
          <Icon className={`w-5 h-5 text-${color}-400`} />
        </div>
        <h3 className={`text-xl font-semibold text-${color}-400`}>{title}</h3>
      </div>
      <div className="space-y-2">
        {skills.map((skill, skillIndex) => (
          <div key={skillIndex} className="flex items-center">
            <span className="text-slate-300 text-sm">{skill}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function About() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "PHP", "C#"],
      color: "blue",
      icon: Code,
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "Angular", "jQuery", "Bootstrap", "Tailwind CSS"],
      color: "green",
      icon: Palette,
    },
    {
      title: "Backend Frameworks",
      skills: ["Laravel", "Symfony"],
      color: "purple",
      icon: Server,
    },
    {
      title: "Databases & Storage",
      skills: ["MySQL", "PostgreSQL", "Redis", "Amazon S3"],
      color: "red",
      icon: Database,
    },
    {
      title: "DevOps & Containerization",
      skills: ["Docker", "Podman", "Git", "GitLab", "GitHub Actions"],
      color: "cyan",
      icon: Container,
    },
    {
      title: "Testing & Quality Assurance",
      skills: ["Selenium", "Cypress", "SonarQube", "Sonarscan", "Covrage", "Unit testing"],
      color: "pink",
      icon: TestTube,
    },
    {
      title: "APIs & Real-time Communication",
      skills: ["WebSocket", "REST APIs", "AJAX", "Swagger"],
      color: "yellow",
      icon: Globe,
    },
    {
      title: "Project Management",
      skills: ["Jira", "Trello", "Kanban"],
      color: "indigo",
      icon: Kanban,
    },
    {
      title: "Systems & Infrastructure",
      skills: ["Linux"],
      color: "teal",
      icon: Monitor,
    },
    {
      title: "Software Architecture",
      skills: ["Microservices", "SDKs."],
      color: "violet",
      icon: Building,
    },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-slate-900 to-slate-950 z-0"></div>
      <ParticleField />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="About Me" />

        <div className="flex flex-col items-center gap-12">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-indigo-500/20">
              <div className="flex items-center justify-center mb-6">
                <div className="p-2 rounded-full bg-indigo-500/20 mr-4">
                  <Brain className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Software Developer</h3>
              </div>

              <p className="text-xl text-slate-300 leading-relaxed">
                With 4 years of hands-on experience, curiosity has been my guide from day one. I began by creating custom websites and solutions, then steadily progressed to designing full software systems and streamlining workflows. I’m always eager to learn, improve, and deliver better results
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={index}
                title={category.title}
                skills={category.skills}
                color={category.color}
                index={index}
                icon={category.icon}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
