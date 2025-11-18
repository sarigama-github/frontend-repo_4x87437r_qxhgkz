import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <p className="text-xs text-white/80">AI-first social + content studio</p>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Birdman — Social Media & AI Media Agency
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">
            We craft scroll-stopping stories with algorithms and artistry. Strategy, production, and growth for brands that want to fly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:bg-blue-50">
              Start a project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-5 py-3 text-sm font-semibold ring-1 ring-inset ring-white/20 hover:bg-white/20">
              See our work
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950" />
    </section>
  )
}

export default Hero
