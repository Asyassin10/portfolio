"use client"

import { useForm, ValidationError } from "@formspree/react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import SectionHeading from "./SectionHeading"

export default function Contact() {
  const [state, handleSubmit] = useForm("mrejeobn")

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-slate-900 to-slate-950 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Contact Me" />

        <motion.div
          className="max-w-3xl mx-auto mt-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-2xl border border-indigo-500/20 bg-slate-900/80 backdrop-blur-md p-6 sm:p-8">
            <div className="mb-8 text-center">            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <a
                href="https://www.linkedin.com/in/yassine-brahim-0a91b23b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-100 transition hover:border-blue-500/40 hover:bg-blue-500/10"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Asyassin10/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-100 transition hover:border-indigo-500/40 hover:bg-indigo-500/10"
              >
                <Github className="w-4 h-4 text-indigo-300" />
                GitHub
              </a>
              <a
                href="mailto:yassineaitsidibrahim@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-100 transition hover:border-emerald-500/40 hover:bg-emerald-500/10"
              >
                <Mail className="w-4 h-4 text-emerald-300" />
                Email
              </a>
            </div>

            {state.succeeded ? (
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4 text-emerald-200">
                Thanks! I&apos;ll get back to you soon.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/mrejeobn"
                method="POST"
                className="space-y-5"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-200">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Yassine admirer"
                    required
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />
                  <ValidationError field="name" errors={state.errors} className="text-sm text-rose-300" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-200">
                    Your email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />
                  <ValidationError field="email" errors={state.errors} className="text-sm text-rose-300" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-200">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder=""
                    required
                    rows={6}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />
                  <ValidationError field="message" errors={state.errors} className="text-sm text-rose-300" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Mail className="w-4 h-4" />
                  {state.submitting ? "Sending..." : "Send"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
