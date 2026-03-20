import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import ThreeScene from "./components/ThreeScene"
import SpartaBanner from "./components/SpartaBanner"
import DockerHubImages from "./components/DockerHubImages"
import MediumArticles from "./components/MediumArticles"
import ComposerPackages from "./components/ComposerPackages"

export default function Home() {
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
