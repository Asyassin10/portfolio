"use client"

import { motion } from "framer-motion"

export default function SpartaBanner() {
  return (
    <motion.div
      className="w-full bg-slate-800/80 backdrop-blur-md rounded-xl border border-indigo-500/30 p-6 mb-12 overflow-hidden relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0 mx-auto md:mx-0">
          {/* Glowing ring effect */}
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-pulse-glow"></div>

          {/* Image container with subtle animation */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden border-2 border-cyan-500/40"
            initial={{ rotate: -5 }}
            animate={{ rotate: 5 }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
          >
            <img
              src="/images/sparta-portrait.png"
              alt="Artistic portrait with classical styling and ornate decorative borders"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Decorative circuit lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" />

            <path
              d="M100,10 L100,30 M100,170 L100,190 M10,100 L30,100 M170,100 L190,100"
              stroke="rgba(6, 182, 212, 0.4)"
              strokeWidth="1"
              strokeDasharray="5,5"
              className="animate-circuit-flow"
            />
          </svg>
        </div>

        <div className="flex-1 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-cyan-300 font-display italic text-center md:text-left leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              Even the Ghost of Sparta must solve the algorithm before breaking the cycle 🌀
            </motion.p>

            <motion.div
              className="h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-indigo-500 mt-4"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
