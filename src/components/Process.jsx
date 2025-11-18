import Reveal from './Reveal'

const steps = [
  {
    k: '01',
    t: 'Discover',
    d: 'We audit channels, define goals, and map the audience + opportunity.'
  },
  { k: '02', t: 'Design', d: 'Narratives, content pillars, and creative directions shaped for social.' },
  { k: '03', t: 'Make', d: 'Production sprints blending AI and human craft for speed and taste.' },
  { k: '04', t: 'Grow', d: 'Ship, learn, iterate. Reporting and experiments that move KPIs.' },
]

function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">How we work</h2>
            <p className="mt-3 text-white/70">A simple, focused process that keeps momentum high and outcomes sharp.</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.k} delay={i * 0.06}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-white/40 text-sm">{s.k}</div>
                <h3 className="mt-2 text-white font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-white/70">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
