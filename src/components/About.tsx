export default function About() {
  return (
    <section id="story" className="relative w-full bg-black text-cream py-32 sm:py-48">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="text-xs uppercase tracking-[0.3em] text-cream/50 mb-16">
          (01) &nbsp; About
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="aspect-[3/4] w-full overflow-hidden bg-neutral-900">
              <img
                src="/portrait-alt.jpg"
                alt="Arth Darji"
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  ;(e.currentTarget as HTMLImageElement).src = '/portrait.jpg'
                }}
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2 className="font-hn text-[9vw] sm:text-[6vw] lg:text-[4.5vw] leading-[0.95] tracking-tight">
              I build interfaces
              <br />
              that feel deliberate
              <br />
              <span className="text-cream/50">and systems that scale.</span>
            </h2>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl text-cream/80 text-base leading-relaxed">
              <p>
                I&rsquo;m an Information Technology student at LDRP-ITR, Gandhinagar,
                pairing engineering with design taste. My day-to-day sits between
                Python, React, and the LLM stack &mdash; shipping products end to end,
                not just prototypes.
              </p>
              <p>
                Recent work spans a live production real-estate platform for an
                Australian brokerage, and a multi-agent AI orchestration
                platform. I care about small details &mdash; typography, motion,
                latency &mdash; because that&rsquo;s what tells a user this was made
                with intent.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl">
              <Stat k="CGPA" v="7.54" />
              <Stat k="Live sites" v="1" />
              <Stat k="Projects" v="6+" />
              <Stat k="Stack" v="Full-stack" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-3xl sm:text-4xl font-hn">{v}</div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-cream/50">
        {k}
      </div>
    </div>
  )
}
