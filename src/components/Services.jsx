import { Sparkles, MessageSquare, Video, Rocket } from 'lucide-react'
import Reveal from './Reveal'

const services = [
  {
    icon: Sparkles,
    title: 'AI Creative Lab',
    desc: 'Concepting, scriptwriting, and image/video generation that feels human, not robotic.'
  },
  {
    icon: MessageSquare,
    title: 'Social Strategy',
    desc: 'Channel strategy, content calendars, and high-velocity community management.'
  },
  {
    icon: Video,
    title: 'Production',
    desc: 'Short-form edits, motion, and UGC-style content engineered for retention.'
  },
  {
    icon: Rocket,
    title: 'Growth & Analytics',
    desc: 'Experimentation frameworks, reporting, and performance optimization.'
  },
]

function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">What we do</h2>
            <p className="mt-3 text-white/70">End-to-end social and AI content — from strategy to production to growth.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-inset ring-blue-400/30">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-white font-semibold">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-white/70">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
