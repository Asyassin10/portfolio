"use client"

import type React from "react"

import { motion } from "framer-motion"
import type { SectionHeadingProps } from "@/types"

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <motion.div
      className="mb-16 text-center relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 inline-block font-display">
        {title}
      </h2>
      {subtitle && <p className="text-xl text-slate-400 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
      <motion.div
        className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mx-auto mt-4"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.div>
  )
}

export default SectionHeading
