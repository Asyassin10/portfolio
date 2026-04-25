"use client"

import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Code2,
  Compass,
  ExternalLink,
  Github,
  Sparkles,
  Terminal,
} from "lucide-react"
import SectionHeading from "./SectionHeading"

const commands = [
  "composer global require asyassin10/valhalla-framework",
  "valhalla new project my-service",
  "cd my-service",
  "composer install",
]

const highlights = [
  {
    title: "Microservices-First",
    description: "Built for JSON APIs, internal service endpoints, and backend systems without unnecessary framework weight.",
    icon: Compass,
  },
  {
    title: "CLI Productivity",
    description: "Scaffold projects, controllers, middleware, services, routes, auth flows, and local agents from the terminal.",
    icon: Terminal,
  },
  {
    title: "Practical Architecture",
    description: "Routing, middleware, JWT auth, service-to-service calls, and agent-style workers in one focused PHP toolkit.",
    icon: Code2,
  },
]

export default function MyFramework() {
  return (
    <section id="framework" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_38%),radial-gradient(circle_at_80%_50%,rgba(99,102,241,0.1),transparent_32%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="My Framework"
          subtitle="Valhalla is my microservices-first PHP framework for lightweight APIs, internal tooling, and CLI-driven development."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-blue-500/20 bg-slate-900/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-blue-950/30"
        >
          <div className="p-8 sm:p-10">
            <div className="grid xl:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white/95 p-3 shadow-lg shadow-blue-950/20 shrink-0">
                    <img
                      src="/valhalla-logo.png"
                      alt="Valhalla framework logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-200 text-sm mb-3">
                      <Sparkles className="w-4 h-4" />
                      Open-source PHP framework
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white font-display">Valhalla</h3>
                    <p className="text-slate-300 mt-3 max-w-2xl leading-relaxed">
                      A focused framework for developers who want fast JSON APIs, clean architecture, service-to-service
                      communication, and a CLI that helps you move quickly without carrying the overhead of a monolith.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {highlights.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5"
                      >
                        <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-4">
                          <Icon className="w-5 h-5 text-blue-300" />
                        </div>
                        <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://valhalla.yassine-aitsidibrahim.space/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-900/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Official Site
                  </a>
                  <a
                    href="https://github.com/asyassin10/valhalla-framework"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-700 bg-slate-950/60 text-slate-100 font-medium hover:border-blue-400/40 hover:bg-slate-900 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    View GitHub Repository
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-blue-500/20 bg-slate-950/75 overflow-hidden shadow-xl shadow-blue-950/20">
                <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-500">CLI Quick Start</div>
                </div>

                <div className="p-6 space-y-4">
                  {commands.map((command, index) => (
                    <motion.div
                      key={command}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.08 }}
                      className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center shrink-0">
                          <Terminal className="w-4 h-4 text-blue-300" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Command {index + 1}</div>
                          <code className="text-sm sm:text-[15px] text-blue-100 break-all leading-relaxed">{command}</code>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
                    <div className="flex items-center gap-2 text-emerald-200 font-semibold mb-2">
                      <ArrowUpRight className="w-4 h-4" />
                      Great starting point
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Valhalla is ideal if you want to launch a clean PHP API fast, keep the architecture understandable,
                      and still have practical developer tooling ready from day one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
