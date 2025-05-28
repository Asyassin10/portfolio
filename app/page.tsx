"use client"

import { useQuery } from "@tanstack/react-query"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import ThreeScene from "./components/ThreeScene"
import SpartaBanner from "./components/SpartaBanner"
import DockerHubImages from "./components/DockerHubImages"
import MediumArticles from "./components/MediumArticles"
import ComposerPackages from "./components/ComposerPackages"

// Mock API functions (replace with actual API calls)
const fetchPortfolioData = async () => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          name: "Yassine Ait Sidi Brahim",
          title: "Software Developer",
          description:
            "Not just writing code — building logic, shaping ideas, and solving real human problems through software.",
        },
        projects: [],
        articles: [],
        packages: [],
        dockerImages: [],
      })
    }, 1000)
  })
}

const fetchUserStats = async () => {
  // Simulate API call for user statistics
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        githubRepos: 25,
        mediumArticles: 12,
        dockerImages: 8,
        composerPackages: 5,
      })
    }, 800)
  })
}

export default function Home() {
  // React Query for portfolio data
  const {
    data: portfolioData,
    isLoading: isPortfolioLoading,
    error: portfolioError,
  } = useQuery({
    queryKey: ["portfolio"],
    queryFn: fetchPortfolioData,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  })

  // React Query for user statistics
  const {
    data: userStats,
    isLoading: isStatsLoading,
    error: statsError,
  } = useQuery({
    queryKey: ["userStats"],
    queryFn: fetchUserStats,
    staleTime: 10 * 60 * 1000, // 10 minutes
    cacheTime: 15 * 60 * 1000, // 15 minutes
  })

  // Loading state
  if (isPortfolioLoading || isStatsLoading) {
    return (
      <main className="bg-slate-950 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-500 mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading portfolio...</p>
        </div>
      </main>
    )
  }

  // Error state
  if (portfolioError || statsError) {
    return (
      <main className="bg-slate-950 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-xl mb-4">Error loading portfolio data</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300"
          >
            Retry
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-slate-950 min-h-screen">
      <ThreeScene />
      <div className="pt-24 container mx-auto px-6">
        <SpartaBanner />
      </div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <DockerHubImages />
      <ComposerPackages />
      <MediumArticles />
    </main>
  )
}
