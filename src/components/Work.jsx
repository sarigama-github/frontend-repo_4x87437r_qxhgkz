import Reveal from './Reveal'
import { motion } from 'framer-motion'

function Work() {
  const logos = ['Instagram', 'TikTok', 'YouTube', 'X', 'Snap', 'Meta']

  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Selected work</h2>
              <p className="mt-3 text-white/70 max-w-xl">Launches, product drops, and creator-led campaigns that moved culture and metrics.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="#contact" className="hidden sm:inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 hover:bg-white/20">
              Get a deck
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <motion.div whileHover={{ y: -4 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
                <div className="h-40 rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.25),transparent_40%)]" />
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/50">Case Study</p>
                    <h3 className="text-white font-semibold">Campaign {i + 1}</h3>
                  </div>
                  <span className="text-white/50 text-xs">{logos[i % logos.length]}</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
