"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import type { IconType } from "react-icons"
import { FaAws } from "react-icons/fa"
import {
  SiApachekafka,
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiGo,
  SiJavascript,
  SiLangchain,
  SiLaravel,
  SiLinux,
  SiModelcontextprotocol,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiPodman,
  SiPostgresql,
  SiPython,
  SiQdrant,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTailwindcss,
  SiTerraform,
  SiWebrtc,
} from "react-icons/si"
import {
  Bot,
  Boxes,
  Brain,
  Cloud,
  Code2,
  Container,
  Database,
  Github,
  Layers3,
  Mic,
  Monitor,
  Network,
  Radio,
  Search,
  Server,
  Smartphone,
  Terminal,
  Volume2,
  Wrench,
} from "lucide-react"
import SectionHeading from "./SectionHeading"

const ParticleField = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 22 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-1 w-1 rounded-full bg-indigo-500/25"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.35 + 0.15,
          }}
          animate={{ y: [Math.random() * 100 + "%", Math.random() * 100 + "%"] }}
          transition={{ duration: Math.random() * 18 + 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      ))}
    </div>
  )
}

type Tool = {
  name: string
  icon: LucideIcon
  brandIcon?: IconType
  anchor?: boolean
}

type SkillCategory = {
  title: string
  icon: LucideIcon
  tools: Tool[]
  tone: keyof typeof tones
}

const tones = {
  violet: {
    border: "border-violet-400/25 hover:border-violet-400/45",
    icon: "bg-violet-500/15 text-violet-300 ring-violet-400/20",
    chip: "border-violet-400/15 bg-violet-500/[0.07] text-violet-100",
    anchor: "border-violet-400/35 bg-violet-500/15 text-violet-50 shadow-sm shadow-violet-500/10",
    glow: "bg-violet-500/10",
  },
  blue: {
    border: "border-blue-400/25 hover:border-blue-400/45",
    icon: "bg-blue-500/15 text-blue-300 ring-blue-400/20",
    chip: "border-blue-400/15 bg-blue-500/[0.07] text-blue-100",
    anchor: "border-blue-400/35 bg-blue-500/15 text-blue-50 shadow-sm shadow-blue-500/10",
    glow: "bg-blue-500/10",
  },
  emerald: {
    border: "border-emerald-400/20 hover:border-emerald-400/40",
    icon: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/20",
    chip: "border-emerald-400/15 bg-emerald-500/[0.07] text-emerald-100",
    anchor: "border-emerald-400/35 bg-emerald-500/15 text-emerald-50 shadow-sm shadow-emerald-500/10",
    glow: "bg-emerald-500/[0.08]",
  },
  rose: {
    border: "border-rose-400/20 hover:border-rose-400/40",
    icon: "bg-rose-500/15 text-rose-300 ring-rose-400/20",
    chip: "border-rose-400/15 bg-rose-500/[0.07] text-rose-100",
    anchor: "border-rose-400/35 bg-rose-500/15 text-rose-50 shadow-sm shadow-rose-500/10",
    glow: "bg-rose-500/[0.08]",
  },
  cyan: {
    border: "border-cyan-400/20 hover:border-cyan-400/40",
    icon: "bg-cyan-500/15 text-cyan-300 ring-cyan-400/20",
    chip: "border-cyan-400/15 bg-cyan-500/[0.07] text-cyan-100",
    anchor: "border-cyan-400/35 bg-cyan-500/15 text-cyan-50 shadow-sm shadow-cyan-500/10",
    glow: "bg-cyan-500/[0.08]",
  },
}

const categories: SkillCategory[] = [
  {
    title: "AI & LLM",
    icon: Brain,
    tone: "violet",
    tools: [
      { name: "AWS Bedrock", icon: Cloud, brandIcon: FaAws, anchor: true },
      { name: "RAG", icon: Search, anchor: true },
      { name: "Amazon SageMaker", icon: Cloud, brandIcon: FaAws },
      { name: "MCP", icon: Network, brandIcon: SiModelcontextprotocol },
      { name: "LangChain", icon: Brain, brandIcon: SiLangchain },
      { name: "Qdrant", icon: Database, brandIcon: SiQdrant },
      { name: "Voice agents", icon: Bot },
      { name: "TTS", icon: Volume2 },
      { name: "STT", icon: Mic },
      { name: "WebRTC", icon: Radio, brandIcon: SiWebrtc },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    tone: "blue",
    tools: [
      { name: "Laravel", icon: Server, brandIcon: SiLaravel, anchor: true },
      { name: "Spring Boot", icon: Layers3, brandIcon: SiSpringboot },
      { name: "Node.js", icon: Server, brandIcon: SiNodedotjs },
      { name: "FastAPI", icon: Server, brandIcon: SiFastapi },
      { name: "Kafka", icon: Network, brandIcon: SiApachekafka },
    ],
  },
  {
    title: "Frontend",
    icon: Monitor,
    tone: "emerald",
    tools: [
      { name: "React.js", icon: Code2, brandIcon: SiReact, anchor: true },
      { name: "Next.js", icon: Monitor, brandIcon: SiNextdotjs, anchor: true },
      { name: "Tailwind CSS", icon: Code2, brandIcon: SiTailwindcss },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    tone: "rose",
    tools: [
      { name: "PostgreSQL", icon: Database, brandIcon: SiPostgresql },
      { name: "MySQL", icon: Database, brandIcon: SiMysql },
      { name: "Redis", icon: Boxes, brandIcon: SiRedis },
      { name: "MongoDB", icon: Boxes, brandIcon: SiMongodb },
    ],
  },
  {
    title: "Tooling & Infra",
    icon: Wrench,
    tone: "cyan",
    tools: [
      { name: "Docker", icon: Container, brandIcon: SiDocker },
      { name: "Podman", icon: Container, brandIcon: SiPodman },
      { name: "GitHub Actions", icon: Github, brandIcon: SiGithubactions },
      { name: "Terraform", icon: Wrench, brandIcon: SiTerraform },
      { name: "AWS", icon: Cloud, brandIcon: FaAws },
      { name: "Linux", icon: Terminal, brandIcon: SiLinux },
    ],
  },
  {
    title: "Languages",
    icon: Code2,
    tone: "blue",
    tools: [
      { name: "PHP", icon: Code2, brandIcon: SiPhp },
      { name: "Python", icon: Code2, brandIcon: SiPython },
      { name: "JavaScript", icon: Code2, brandIcon: SiJavascript },
      { name: "Go", icon: Code2, brandIcon: SiGo },
      { name: "Java", icon: Code2, brandIcon: SiOpenjdk },
    ],
  },
]

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const Icon = category.icon
  const tone = tones[category.tone]

  return (
    <motion.article
      className={`group relative h-full overflow-hidden rounded-3xl border bg-slate-900/65 p-5 shadow-xl shadow-slate-950/25 backdrop-blur-md transition-colors sm:p-6 ${tone.border}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl ${tone.glow}`} />
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ring-1 ${tone.icon}`}>
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-display text-lg font-semibold text-white">{category.title}</h3>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {category.tools.map((tool) => {
            const ToolIcon = tool.brandIcon ?? tool.icon
            return (
              <span
                key={tool.name}
                className={`inline-flex items-center gap-1.5 rounded-lg border ${tool.anchor
                  ? `px-3 py-2 text-sm font-semibold ${tone.anchor}`
                  : `px-2.5 py-1.5 text-xs font-medium ${tone.chip}`}`}
              >
                <ToolIcon className={tool.anchor ? "h-4 w-4" : "h-3.5 w-3.5 opacity-80"} aria-hidden="true" />
                {tool.name}
              </span>
            )
          })}
        </div>
      </div>
    </motion.article>
  )
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(79,70,229,0.1),transparent_38%)]" />
      <ParticleField />

      <div className="container relative z-10 mx-auto px-6">
        <SectionHeading title="About Me" />

        <div className="flex flex-col items-center gap-14">
          <motion.div
            className="mx-auto w-full max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-3xl border border-indigo-500/20 bg-slate-900/70 p-6 backdrop-blur-md sm:p-8">
              <div className="grid items-center gap-8 lg:grid-cols-[0.78fr_1.22fr] xl:gap-10">
                <div className="flex justify-center lg:justify-start">
                  <div className="relative h-[360px] w-full max-w-[320px] overflow-hidden rounded-[2rem] border border-indigo-500/30 bg-white shadow-2xl shadow-indigo-950/30 sm:h-[420px]">
                    <img
                      src="/images/yassine-portrait-white.png"
                      alt="Yassine Ait Sidi Brahim portrait"
                      className="h-full w-full object-cover object-[center_25%]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">
                    <div className="rounded-xl bg-indigo-500/15 p-2.5 ring-1 ring-indigo-400/20">
                      <Brain className="h-5 w-5 text-indigo-300" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-white">Full-Stack &amp; GenAI Software Engineer</h2>
                  </div>
                  <p className="text-left text-lg leading-relaxed text-slate-300">
                    With 4 years of experience, I started in full-stack engineering — Laravel, Spring Boot, React/Next.js — and have grown into GenAI: RAG pipelines, voice agents, and MCP integrations. I&apos;m now going deeper into the MLOps side, learning what it takes to keep these systems reliable once they&apos;re live, not just performing well in a notebook.
                  </p>
                  <p className="mt-4 text-left text-lg leading-relaxed text-slate-400">
                    The mindset hasn&apos;t changed: clean architecture, systems that hold up under real traffic, and shipping things that actually work.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div id="skills" className="w-full scroll-mt-24">
            <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Tools I use to ship.</h2>
              </div>
            </div>

            <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {categories.map((category, index) => (
                <SkillCard key={category.title} category={category} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
