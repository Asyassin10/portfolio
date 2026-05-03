"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Brain,
  Palette,
  Server,
  Database,
  Container,
} from "lucide-react"
import SectionHeading from "./SectionHeading"

// Particle animation component
const ParticleField = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
      title: "Backend",
      skills: ["Laravel", "Symfony", "Spring Boot", "Node.js"],
      color: "purple",
      icon: Server,
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "React Native"],
      color: "green",
      icon: Palette,
    },
    {
      title: "AI & LLM",
      skills: ["RAG", "MCP", "LangChain", "Qdrant"],
      color: "orange",
      icon: Brain,
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "GitHub Actions", "Linux", "AWS"],
      color: "cyan",
      icon: Container,
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "Redis", "MongoDB"],
      color: "red",
      icon: Database,
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
            className="max-w-5xl mx-auto w-full"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-indigo-500/20">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 xl:gap-10 items-center">
                <div className="flex justify-center lg:justify-start">
                  <div className="relative w-full max-w-[360px] h-[420px] sm:h-[500px] rounded-[2rem] overflow-hidden border border-indigo-500/30 shadow-2xl shadow-indigo-950/30 bg-slate-950">
                    <img
                      src="/yassine-ait-sidibrahim.png"
                      alt="Yassine Ait Sidi Brahim portrait"
                      className="w-full h-full object-cover object-center object-[center_8%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-center lg:justify-start mb-6">
                    <div className="p-2 rounded-full bg-indigo-500/20 mr-4">
                      <Brain className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-display">Full-Stack Software Engineer</h3>
                  </div>

                  <p className="text-left text-lg text-slate-300 leading-relaxed">
                    I build scalable products across backend and frontend, with a focus on clean architecture and fast execution.
                    Comfortable picking up new languages and frameworks by relying on strong core engineering principles.
                  </p>
                  <p className="text-left text-lg text-slate-400 leading-relaxed mt-4">
                    My philosophy is that while tools and syntax change, the underlying concepts system design, data flow,
                    and problem-solving remain consistent. I focus on mastering those fundamentals and applying them across
                    different stacks.
                  </p>
                </div>
              </div>
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
