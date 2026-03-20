"use client"

import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"

const LanguageCard = ({ name, level, index }: { name: string; level: string; index: number }) => {
  return (
    <motion.div
      className="bg-slate-800 p-6 rounded-xl border border-indigo-500/20 shadow-lg hover:border-indigo-500/40 transition-all duration-300 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="text-2xl font-bold text-white">{name}</h3>
      <p className="text-indigo-400 text-sm mt-2">{level}</p>
    </motion.div>
  )
}

export default function Languages() {
  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "Berber", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "French", level: "Intermediate" },
  ]

  return (
    <section id="languages" className="py-20 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900 to-slate-950 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Languages" />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {languages.map((lang, index) => (
            <LanguageCard key={index} name={lang.name} level={lang.level} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
