"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Linkedin, Mail, Github, BookOpen } from "lucide-react"
import CodeEditorAnimation from "./CodeEditorAnimation"
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

// Helper function for smooth scrolling
const smoothScrollTo = (elementId: string): void => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-slate-950 pt-20"
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
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
              <span className="text-white">
                <TypingAnimation text="Yassine Ait Sidi Brahim" />
              </span>
            </h1>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-indigo-300 border border-indigo-500/20">
                Web Developer
              </span>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Not just writing code — building logic, shaping ideas, and solving real human problems through software.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="https://www.linkedin.com/in/yassine-aitsidibrahim/"
                className="p-3 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-blue-600 hover:border-blue-500 transition-all duration-300"
                aria-label="LinkedIn Profile" target="__blank"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:yassineaitsidibrahim@gmail.com"
                className="p-3 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-red-600 hover:border-red-500 transition-all duration-300"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Asyassin10/"
                className="p-3 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-gray-600 hover:border-gray-500 transition-all duration-300"
                aria-label="GitHub Profile" target="__blank"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://yassineaitsidibrahim.medium.com/"
                className="p-3 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-green-600 hover:border-green-500 transition-all duration-300"
                aria-label="Medium Profile" target="__blank"
              >
                <BookOpen className="w-6 h-6" />
              </a>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <a
                href="https://drive.google.com/file/d/12BlOLOdWh9JFnygdcyuHvuCQPRTHP15d/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Download Resume</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                >
                  →
                </motion.span>
              </a>
              <button
                onClick={() => smoothScrollTo("about")}
                className="px-8 py-3 border border-indigo-500 text-indigo-300 hover:bg-indigo-600/20 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Show More</span>
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                >
                  ↓
                </motion.span>
              </button>
            </motion.div>
          </motion.div>

          {/* Code Editor Animation */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <CodeEditorAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
