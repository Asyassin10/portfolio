"use client"

import { motion } from "framer-motion"
import { ExternalLink, BookOpen, Award } from "lucide-react"
import SectionHeading from "./SectionHeading"

// Medium article type
interface MediumArticle {
  id: number
  title: string
  excerpt: string
  link: string
  image: string
  featured?: boolean
  publication?: string
}

// Featured article component
const FeaturedArticle = ({ article }: { article: MediumArticle }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-indigo-900/30 to-slate-900 rounded-2xl border border-indigo-500/30 overflow-hidden mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image */}
        <div className="relative h-64 lg:h-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
            style={{ backgroundImage: `url(${article.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900" />

          {/* Featured badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-indigo-500/80 backdrop-blur-sm rounded-full text-sm text-white flex items-center gap-1 border border-indigo-400/50">
            <Award className="w-4 h-4" />
            <span>Featured Article</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-10">
          {article.publication && (
            <div className="mb-4 flex items-center">
              <BookOpen className="w-4 h-4 text-indigo-400 mr-2" />
              <span className="text-indigo-300 text-sm">{article.publication}</span>
            </div>
          )}

          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-display">{article.title}</h3>

          <p className="text-slate-300 mb-6 text-lg">{article.excerpt}</p>

          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300"
          >
            Read on Medium
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

// Regular article component
const ArticleCard = ({ article, index }: { article: MediumArticle; index: number }) => {
  return (
    <motion.div
      className="bg-slate-900/80 backdrop-blur-md rounded-xl border border-indigo-500/20 overflow-hidden flex flex-col group hover:border-indigo-500/40 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Article image */}
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${article.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300 font-display">
          {article.title}
        </h3>

        <p className="text-slate-300 mb-6 flex-1">{article.excerpt}</p>

        {article.publication && (
          <div className="mb-4 flex items-center">
            <BookOpen className="w-4 h-4 text-indigo-400 mr-2" />
            <span className="text-indigo-300 text-sm">{article.publication}</span>
          </div>
        )}

        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-slate-800 hover:bg-indigo-600 text-white font-medium transition-all duration-300 mt-auto"
        >
          Read on Medium
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  )
}

export default function MediumArticles() {
  // Your actual Medium articles data (reduced to 4 total: 1 featured + 3 regular)
  const articles: MediumArticle[] = [
    {
      id: 1,
      title: "Building a Moroccan ID OCR Scanner with Python, Flask, and EasyOCR",
      excerpt:
        "A comprehensive guide to building an OCR system specifically designed for Moroccan national ID cards using Python, Flask, and EasyOCR for accurate text extraction and data processing.",
      link: "https://yassineaitsidibrahim.medium.com/building-a-moroccan-id-ocr-scanner-with-python-flask-and-easyocr-ae5b0f575b73",
      image: "/images/moroccan-id-ocr.png",
      featured: true,
      publication: "Yassine Ait Sidi Brahim",
    },
    {
      id: 2,
      title: "Why It's Time to Ditch Docker for Podman",
      excerpt:
        "Exploring the advantages of Podman over Docker, including rootless containers, better security, and seamless integration with systemd for modern containerization needs.",
      link: "https://yassineaitsidibrahim.medium.com/why-its-time-to-ditch-docker-for-podman-8f817ead8e8e",
      image: "/images/docker-vs-podman.png",
      publication: "Yassine Ait Sidi Brahim",
    },
    {
      id: 3,
      title: "Scramble: The Best Laravel Package to Generate API Documentation in One Command",
      excerpt:
        "Discover how Scramble revolutionizes API documentation in Laravel by automatically generating comprehensive docs from your code with zero configuration required.",
      link: "https://yassineaitsidibrahim.medium.com/scramble-the-best-laravel-native-package-to-generate-api-documentation-in-laravel-in-one-command-9a6daf52c83c",
      image: "/images/scramble-api-docs.png",
      publication: "Yassine Ait Sidi Brahim",
    },
    {
      id: 4,
      title: "Laravel Pulse vs Telescope: Best Monitoring Tool for Production",
      excerpt:
        "A detailed comparison between Laravel Pulse and Telescope for production monitoring, covering performance, features, and real-world use cases to help you choose the right tool.",
      link: "https://yassineaitsidibrahim.medium.com/why-laravel-pulse-is-better-than-telescope-for-monitoring-in-production-184c16fa1326",
      image: "/images/laravel-pulse-dashboard.png",
      publication: "Yassine Ait Sidi Brahim",
    },
  ]

  // Separate featured article from regular articles
  const featuredArticle = articles.find((article) => article.featured)
  const regularArticles = articles.filter((article) => !article.featured)

  return (
    <section id="medium" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-slate-900 to-slate-950 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="My Articles" subtitle="In-depth technical articles and tutorials published on Medium" />

        {/* Featured article */}
        {featuredArticle && <FeaturedArticle article={featuredArticle} />}

        {/* Regular articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {/* Medium profile link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://yassineaitsidibrahim.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
          >
            View All Articles on Medium
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
