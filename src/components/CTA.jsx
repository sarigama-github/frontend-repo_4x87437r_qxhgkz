function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-8 sm:p-12 ring-1 ring-inset ring-white/20">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Tell us what you want to make</h2>
            <p className="mt-3 text-white/80">Two ways to start: book a discovery call or drop us a brief. We reply within 24 hours.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="mailto:hello@birdman.agency" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:bg-blue-50">
                Book a call
              </a>
              <a href="https://cal.com" target="_blank" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-5 py-3 text-sm font-semibold ring-1 ring-inset ring-white/20 hover:bg-white/20">
                Send a brief
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
