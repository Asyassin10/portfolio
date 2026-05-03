"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import type { TypingAnimationProps } from "@/types"

// TypingAnimation component defined inline
const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, delay = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className="inline-block"
    >
      {text.split("").map((char: string, index: number) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + index * 0.05, duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-[46vh] md:min-h-[52vh] flex flex-col items-center justify-center relative overflow-hidden bg-slate-950 pt-24 pb-8"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900 to-slate-950 z-0"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center py-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display">
            <span className="text-white">
              <TypingAnimation text="Yassine Ait Sidi Brahim" />
            </span>
          </h1>

          <motion.div
            className="flex justify-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <span className="px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-indigo-300 border border-indigo-500/20">
              Full-Stack Software Engineer
            </span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-slate-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            Every architecture is a miniature Valhalla.
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <a
              href="#"
              target="__blank"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Resume</span>
              <motion.div
                animate={{ y: [0, 2, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              >
                <Download className="w-4 h-4" />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
