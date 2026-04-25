import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import MyFramework from "./components/MyFramework"
import ThreeScene from "./components/ThreeScene"
import SpartaBanner from "./components/SpartaBanner"
import DockerHubImages from "./components/DockerHubImages"
import MediumArticles from "./components/MediumArticles"
import ComposerPackages from "./components/ComposerPackages"
import Languages from "./components/Languages"

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
      <MyFramework />
      <DockerHubImages />
      <ComposerPackages />
      <MediumArticles />
      <Languages />
      <footer className="bg-slate-950 border-t border-slate-800 py-6 text-center text-slate-400 text-sm">
        © 2026 Yassine Ait Sidi Brahim. All rights reserved.
      </footer>
    </main>
  )
}
