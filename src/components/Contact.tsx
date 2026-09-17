export default function Contact() {
  return (
    <section
      id="message"
      className="relative w-full bg-black text-cream pt-40 pb-16 border-t border-cream/10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="text-xs uppercase tracking-[0.3em] text-cream/50 mb-16">
          (05) &nbsp; Say Hi
        </div>

        <h2 className="font-hn text-[12vw] sm:text-[9vw] leading-[0.9] tracking-tight">
          Let&rsquo;s make
          <br />
          <span className="text-cream/50">something worth</span>
          <br />
          shipping.
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 items-end">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-3">
              Email
            </div>
            <a
              href="mailto:arthdarji12@gmail.com"
              className="text-2xl sm:text-3xl underline underline-offset-8 decoration-cream/30 hover:decoration-cream transition-all"
            >
              arthdarji12@gmail.com
            </a>
          </div>

          <div className="sm:text-right">
            <div className="text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-3">
              Phone
            </div>
            <a
              href="tel:+919016716411"
              className="text-lg sm:text-xl text-cream/80 hover:text-cream transition-colors"
            >
              +91 90167 16411
            </a>
          </div>
        </div>

        <div className="mt-24 flex flex-wrap gap-x-8 gap-y-4">
          {[
            { l: 'LinkedIn', h: 'https://www.linkedin.com/in/arth-darji-960984241/' },
            { l: 'GitHub', h: 'https://github.com/Arth18' },
            { l: 'Email', h: 'mailto:arthdarji12@gmail.com' },
          ].map((s) => (
            <a
              key={s.l}
              href={s.h}
              target={s.h.startsWith('http') ? '_blank' : undefined}
              rel={s.h.startsWith('http') ? 'noreferrer' : undefined}
              className="text-sm text-cream/70 hover:text-cream transition-colors"
            >
              {s.l} &nbsp;&rarr;
            </a>
          ))}
        </div>
      </div>

      {/* Giant sign-off — sized to fit "Arth — Darji" on one line inside the viewport. */}
      <div className="relative mt-32 w-full overflow-hidden select-none">
        <div className="font-hn text-[13.5vw] leading-[1.05] pb-[1.5vw] tracking-tight text-cream/90 whitespace-nowrap text-center">
          Arth &mdash; Darji
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-10 mt-10 flex items-center justify-between text-xs text-cream/40">
        <div>&copy; 2025 Arth Darji</div>
        <div>Built with intent, in Ahmedabad.</div>
      </div>
    </section>
  )
}
