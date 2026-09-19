"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Download, Pin, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90svh] items-center overflow-hidden bg-slate-950 pb-16 pt-28 lg:pb-20 lg:pt-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(99,102,241,0.2),transparent_34%),radial-gradient(circle_at_82%_40%,rgba(14,165,233,0.13),transparent_30%),linear-gradient(to_bottom,#020617,#0f172a_58%,#020617)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.35)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* LEFT: name, title, resume, and certification */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
              Yassine Ait Sidi Brahim
            </p>

            <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl">
              Full-Stack &amp; GenAI
              <span className="block bg-gradient-to-r from-indigo-300 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                Software Engineer.
              </span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://drive.google.com/file/d/11cDixFVB3y9gV8QQy7FKCkIefqNUwzyW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3.5 font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/70"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>

              {/* AWS cert badge — kept as a plain badge, not styled as a button */}
              <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/55 px-3 py-2.5 backdrop-blur-sm">
                <Image
                  src="/images/aws-certified-ai-practitioner-foundational.png"
                  alt="AWS Certified AI Practitioner Foundational badge"
                  width={40}
                  height={40}
                  priority
                  className="h-10 w-10 object-contain"
                />
                <span className="whitespace-nowrap text-sm font-semibold text-slate-200">
                  AI Practitioner Foundational
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: featured project media and its actions as one group */}
          <motion.div
            className="relative w-full overflow-hidden rounded-2xl border border-indigo-400/20 bg-slate-900/60 p-2 shadow-2xl shadow-indigo-950/30"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="relative w-full overflow-hidden rounded-xl bg-slate-900">
              <Image
                src="/images/calldine/featured-cover.png"
                alt="CallDine restaurant AI presentation video thumbnail"
                width={1600}
                height={900}
                priority
                sizes="(max-width: 1024px) 92vw, 520px"
                className="h-auto w-full object-contain"
              />

              {/* Pin badge — decorative label only, not clickable */}
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-slate-950/80 py-1.5 pl-2.5 pr-3 text-xs font-semibold text-slate-100 shadow-lg shadow-indigo-950/40 backdrop-blur-sm">
                <Pin className="h-3.5 w-3.5 text-indigo-300" aria-hidden="true" />
                Featured project: CallDine
              </span>
            </div>

            <div className="flex w-full flex-wrap items-center gap-2 px-1 pt-2">
              <a
                href="https://www.youtube.com/watch?v=02UnSYEdlA8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/70"
              >
                <Youtube className="h-4 w-4" />
                Watch on YouTube
              </a>

              <Link
                href="/projects/calldine"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500/15 px-5 py-3 text-sm font-medium text-indigo-100 transition hover:border-indigo-400/60 hover:bg-indigo-500/25"
              >
                View CallDine project
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
