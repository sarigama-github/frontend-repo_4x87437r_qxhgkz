import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(600px_300px_at_10%_-10%,rgba(59,130,246,0.25),transparent),radial-gradient(400px_200px_at_90%_0%,rgba(99,102,241,0.2),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Work />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-10 text-center text-white/60">
        <p>© {new Date().getFullYear()} Birdman Agency. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
