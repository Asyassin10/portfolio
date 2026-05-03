import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import MyFramework from "./components/MyFramework"
import ThreeScene from "./components/ThreeScene"
import MediumArticles from "./components/MediumArticles"
import ComposerPackages from "./components/ComposerPackages"
import Languages from "./components/Languages"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <ThreeScene />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <MyFramework />
      <ComposerPackages />
      <MediumArticles />
      <Languages />
      <Contact />
      <footer className="bg-slate-950 border-t border-slate-800 py-6 text-center text-slate-400 text-sm">
        © 2026 Yassine Ait Sidi Brahim. All rights reserved.
      </footer>
    </main>
  )
}
