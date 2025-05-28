"use client"

import { motion } from "framer-motion"
import { FileText, Calendar, Tag, ArrowRight, Search } from "lucide-react"
import { useState } from "react"
import SectionHeading from "./SectionHeading"

// Blog post type
interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  tags: string[]
  readTime: string
  image: string
  link: string
}

// Blog card component
const BlogCard = ({ blog, index }: { blog: BlogPost; index: number }) => {
  return (
    <motion.div
      className="bg-slate-900/80 backdrop-blur-md rounded-xl border border-indigo-500/20 overflow-hidden h-full flex flex-col group hover:border-indigo-500/40 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Blog image */}
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${blog.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70" />

        {/* Tags */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {blog.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-indigo-500/30 backdrop-blur-sm text-xs rounded-full text-indigo-200 border border-indigo-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center text-slate-400 text-sm mb-3">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{blog.date}</span>
          <span className="mx-2">•</span>
          <span>{blog.readTime} read</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300 font-display">
          {blog.title}
        </h3>

        <p className="text-slate-300 mb-6 flex-1">{blog.excerpt}</p>

        <a
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300 mt-auto"
        >
          Read more
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  )
}

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTag, setActiveTag] = useState<string | null>(null)

  // Sample blog data
  const blogs: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable AI Solutions with React and TensorFlow.js",
      excerpt:
        "Learn how to integrate TensorFlow.js with React to create powerful, browser-based machine learning applications without requiring backend processing.",
      date: "May 15, 2025",
      tags: ["AI", "React", "JavaScript"],
      readTime: "8 min",
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      id: 2,
      title: "The Future of Web Development: AI-Assisted Coding",
      excerpt:
        "Explore how AI tools are transforming the development workflow, from code completion to automated testing and optimization.",
      date: "April 22, 2025",
      tags: ["AI", "Web Development", "Productivity"],
      readTime: "6 min",
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      id: 3,
      title: "Creating Custom React Hooks for State Management",
      excerpt:
        "Discover how to build reusable custom hooks that simplify state management in React applications without external libraries.",
      date: "March 10, 2025",
      tags: ["React", "JavaScript", "Hooks"],
      readTime: "5 min",
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      id: 4,
      title: "Optimizing MongoDB Performance in MERN Applications",
      excerpt:
        "Learn advanced techniques for improving MongoDB query performance, indexing strategies, and data modeling best practices.",
      date: "February 28, 2025",
      tags: ["MongoDB", "MERN", "Performance"],
      readTime: "10 min",
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      id: 5,
      title: "Building Accessible Web Applications: A Comprehensive Guide",
      excerpt:
        "A deep dive into web accessibility standards, testing tools, and implementation strategies to create inclusive applications.",
      date: "January 15, 2025",
      tags: ["Accessibility", "Web Development", "UI/UX"],
      readTime: "12 min",
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      id: 6,
      title: "Serverless Architecture: When to Use It and When to Avoid It",
      excerpt:
        "An analysis of serverless computing benefits, limitations, and real-world use cases to help you make informed architecture decisions.",
      date: "December 5, 2024",
      tags: ["Serverless", "Architecture", "Cloud"],
      readTime: "9 min",
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
  ]

  // Get all unique tags
  const allTags = Array.from(new Set(blogs.flatMap((blog) => blog.tags)))

  // Filter blogs based on search term and active tag
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = activeTag ? blog.tags.includes(activeTag) : true
    return matchesSearch && matchesTag
  })

  return (
    <section id="blogs" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900 to-slate-950 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Blog Posts"
          subtitle="Thoughts, tutorials, and insights on AI, web development, and technology"
        />

        {/* Search and filter */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search input */}
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Tags filter */}
            <div className="flex flex-wrap gap-2 w-full md:w-1/2 justify-center md:justify-end">
              <button
                onClick={() => setActiveTag(null)}
                className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                  activeTag === null ? "bg-indigo-600 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                All
              </button>
              {allTags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 flex items-center gap-1 ${
                    activeTag === tag ? "bg-indigo-600 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FileText className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-slate-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
