import type React from "react"
export interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
}

export interface Project {
  title: string
  description: string
  techStack: string
  link: string
  icon: React.ReactNode
  type: "github" | "live"
  category: string
  featured?: boolean
}

export interface Repository {
  id: number
  name: string
  description: string
  stars: number
  forks: number
  watchers: number
  language: string
  url: string
  tags: string[]
}

export interface DockerImage {
  id: number
  name: string
  description: string
  pulls: number
  stars: number
  url: string
  tags: string[]
}

export interface ComposerPackage {
  id: number
  name: string
  description: string
  version: string
  installCommand: string
  githubUrl: string
  packagistUrl: string
  downloads: number
  stars?: number
  forks?: number
  tags: string[]
}

export interface MediumArticle {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  link: string
  image: string
  featured?: boolean
  claps?: number
  publication?: string
}

export interface ProjectImage {
  src: string
  alt: string
}

export interface ProjectLink {
  url: string
  label: string
}

export interface ExperienceProject {
  title: string
  description: string
  links: ProjectLink[]
  images: ProjectImage[]
}

export interface Experience {
  period: string
  role: string
  company: string
  color: string
  projects: ExperienceProject[]
}

export interface Skill {
  icon: React.ComponentType<{ className?: string }>
  title: string
  technologies: string
  description: string
  color?: string
}

export interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export interface AnimatedSectionHeaderProps {
  title: string
}

export interface TypingAnimationProps {
  text: string
  delay?: number
}

export interface ProjectImageModalProps {
  isOpen: boolean
  onClose: () => void
  images: ProjectImage[]
}

export interface Card3DProps {
  children: React.ReactNode
}

export interface RepoCardProps {
  repo: Repository
  index: number
}

export interface DockerCardProps {
  image: DockerImage
  index: number
}

export interface PackageCardProps {
  pkg: ComposerPackage
  index: number
}

export interface ArticleCardProps {
  article: MediumArticle
  index: number
}

export interface FeaturedArticleProps {
  article: MediumArticle
}

export interface SkillCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  technologies: string
  description: string
  color?: string
}

export interface LanguageColors {
  [key: string]: string
}

export interface Colors {
  [key: string]: string
}
