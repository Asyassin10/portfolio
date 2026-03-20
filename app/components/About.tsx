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
      title: "Backend Frameworks",
      skills: ["Laravel", "Symfony", "Spring Boot", "Spring Cloud", "REST API Design"],
      color: "purple",
      icon: Server,
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "PHP", "Java", "Python"],
      color: "blue",
      icon: Code,
    },
    {
      title: "AI & LLMs",
      skills: [
        "Large Language Models (LLMs)",
        "LangChain",
        "MCP (Model Context Protocol)",
        "RAG (Retrieval-Augmented Generation)",
        "AI Agents & Tool Architectures",
        "Text Embeddings",
        "Vector Databases (Qdrant)",
        "Cosine Similarity",
        "Dot Product Search",
        "Prompt Engineering",
      ],
      color: "orange",
      icon: Brain,
    },
    {
      title: "Cloud & DevOps",
      skills: ["Docker", "Podman", "Git", "GitLab", "GitHub Actions", "Linux"],
      color: "cyan",
      icon: Container,
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "React Native", "Bootstrap", "Tailwind CSS"],
      color: "green",
      icon: Palette,
    },
    {
      title: "Databases & Storage",
      skills: ["MySQL", "PostgreSQL", "PostGIS", "Redis", "Amazon S3"],
      color: "red",
      icon: Database,
    },
    {
      title: "Testing & Quality Assurance",
      skills: ["Selenium", "Cypress", "SonarQube", "Coverage", "Unit testing"],
      color: "pink",
      icon: TestTube,
    },
    {
      title: "Project Management",
      skills: ["Jira", "Trello", "Kanban", "Slack"],
      color: "indigo",
      icon: Kanban,
    },
    {
      title: "Monitoring & BI",
      skills: ["Grafana", "Metabase"],
      color: "teal",
      icon: Monitor,
    },
    {
      title: "Systems & Software Architecture",
      skills: ["Linux", "Microservices"],
      color: "teal",
      icon: Building,
    },
  ];


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
                <h3 className="text-2xl font-bold text-white font-display">Full-Stack Software Engineer & AI Engineer</h3>
              </div>

              <p className="text-left text-xl text-slate-300 leading-relaxed">
                With 4 years of hands-on experience, curiosity has been my guide from day one.<br />
                I began by creating custom websites and solutions, then steadily progressed to designing full software systems and streamlining workflows.<br />
                My core expertise spans backend development with Laravel and Symfony,<br />
                frontend with React and Next.js, and mobile with React Native.<br />
                Recently, I've been drawn to integrating AI into real projects, building RAG systems, MCP server architectures, and LLM-powered features.<br />
                What excites me most now is exploring MLOps, model training, and cloud AI services with AWS—a path I'm actively learning and passionate about.<br />
                I'm always eager to grow, improve, and deliver better results.
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
