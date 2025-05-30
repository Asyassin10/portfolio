"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Briefcase, Code, Cpu, ChevronUp, BookOpen, Server, Package } from "lucide-react"
import { smoothScrollTo } from "@/utils/smoothScroll"
import type { NavItem } from "@/types"

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>("hero")
  const [scrollY, setScrollY] = useState<number>(0)
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false)

  // Use a ref to track the previous active section to prevent unnecessary updates
  const prevActiveSectionRef = useRef<string>(activeSection)

  const navItems: NavItem[] = [
    { id: "hero", label: "Home", icon: <Home className="w-5 h-5" /> },
    { id: "about", label: "About", icon: <User className="w-5 h-5" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="w-5 h-5" /> },
     { id: "projects", label: "Projects", icon: <Cpu className="w-5 h-5" /> },
    { id: "dockerhub", label: "Docker Hub", icon: <Server className="w-5 h-5" /> },
    { id: "packages", label: "My Packages", icon: <Package className="w-5 h-5" /> },
    { id: "medium", label: "Medium", icon: <BookOpen className="w-5 h-5" /> },
  ]

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollY(window.scrollY)
      setShowScrollTop(window.scrollY > 500)

      // Determine active section based on scroll position
      const sections: string[] = navItems.map((item) => item.id)

      // Find the section that is currently in view
      let currentSection: string = activeSection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.getElementById(section)

        if (element) {
          const rect = element.getBoundingClientRect()
          // Consider a section in view if its top is within the top half of the viewport
          if (rect.top <= window.innerHeight / 2) {
            currentSection = section
            break
          }
        }
      }

      // Only update state if the active section has changed
      if (currentSection !== prevActiveSectionRef.current) {
        prevActiveSectionRef.current = currentSection
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, []) // Remove the dependency array to prevent re-running on every activeSection change

  const handleNavClick = (id: string): void => {
    smoothScrollTo(id)
    setIsOpen(false)
    setActiveSection(id)
    prevActiveSectionRef.current = id // Update the ref when manually changing sections
  }

  return (
    <>
      {/* Fixed Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{
          y: 0,
          backgroundColor: scrollY > 50 ? "rgba(15, 23, 42, 0.9)" : "rgba(15, 23, 42, 0.4)",
        }}
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:block w-full">
            <ul className="flex items-center gap-1 flex-wrap justify-center">
              {navItems.map((item: NavItem) => (
                <motion.li key={item.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3 py-2 rounded-full flex items-center gap-2 transition-colors ${
                      activeSection === item.id
                        ? "text-white bg-indigo-600"
                        : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                    }`}
                  >
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation Toggle */}
          <motion.button
            className="md:hidden bg-slate-800/80 backdrop-blur-md p-3 rounded-full shadow-lg ml-auto"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md md:hidden pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul
              className="flex flex-col items-center justify-center h-full gap-6 overflow-y-auto py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {navItems.map((item: NavItem, index: number) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`text-2xl font-medium flex items-center gap-3 ${
                      activeSection === item.id ? "text-indigo-400" : "text-slate-300"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={() => smoothScrollTo("hero")}
            className="fixed bottom-8 right-8 z-40 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              boxShadow: [
                "0 4px 6px rgba(79, 70, 229, 0.2)",
                "0 4px 15px rgba(79, 70, 229, 0.4)",
                "0 4px 6px rgba(79, 70, 229, 0.2)",
              ],
            }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{
              duration: 0.3,
              boxShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
              },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
