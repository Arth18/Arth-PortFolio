import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const BG_URL =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85'

// Front cutout: local file (save your headshot at public/portrait.jpg)
const PORTRAIT_URL = '/portrait.jpg'

const NAV = ['Story', 'Jobs', 'Message']
const SOCIALS: { label: string; href: string }[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arth-darji-960984241/' },
  { label: 'GitHub', href: 'https://github.com/Arth18' },
  { label: 'Email', href: 'mailto:arthdarji12@gmail.com' },
]

export default function Hero() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black">
      {/* BG image */}
      <img
        src={BG_URL}
        alt=""
        className="anim-fade-in absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      {/* Marquee (z-10) */}
      <div
        className="anim-fade-up absolute inset-x-0 top-[16vh] sm:top-[14vh] z-10 overflow-hidden"
        style={{ animationDelay: '500ms' }}
      >
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] sm:text-[26vh] leading-[1.1] pb-[3vh] text-cream">
          <span className="pr-[6vw]">
            Arth &mdash; Darji&nbsp;
          </span>
          <span className="pr-[6vw]">
            Arth &mdash; Darji&nbsp;
          </span>
        </div>
      </div>

      {/* Cream rule (z-10) */}
      <div
        className="anim-line absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 h-0.5 bg-cream"
        style={{ animationDelay: '1200ms' }}
      />

      {/* Front portrait (z-20) — above marquee.
          Photo has a light studio backdrop, so we use mix-blend-mode: multiply
          to knock the white out into the dark BG and let the marquee show through. */}
      <img
        src={PORTRAIT_URL}
        alt="Portrait"
        className="anim-rise-in pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[92%] w-full object-contain object-bottom"
        style={{
          animationDelay: '300ms',
          mixBlendMode: 'darken',
          filter: 'contrast(1.08) brightness(0.95)',
          maskImage:
            'linear-gradient(to top, #000 55%, rgba(0,0,0,0.9) 80%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to top, #000 55%, rgba(0,0,0,0.9) 80%, transparent 100%)',
        }}
        draggable={false}
      />

      {/* Header (z-30) */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        <a
          href="#"
          className="anim-fade-up font-hn text-lg tracking-wide text-cream transition-opacity duration-300 hover:opacity-60"
          style={{ animationDelay: '800ms' }}
        >
          Arth
        </a>

        {/* Desktop cluster */}
        <div className="hidden sm:flex items-start gap-16 lg:gap-24">
          <span
            className="anim-fade-up text-sm text-cream"
            style={{ animationDelay: '900ms' }}
          >
            2025
          </span>

          <nav className="flex flex-col gap-0.5 text-sm">
            {NAV.map((label, i) => (
              <a
                key={label}
                href="#"
                className="anim-fade-up text-cream transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1000 + i * 80}ms` }}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-0.5 text-sm">
            {SOCIALS.map((s, i) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                className="anim-fade-up text-cream transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1150 + i * 80}ms` }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="anim-fade-up sm:hidden relative flex h-10 w-10 items-center justify-center z-50"
          style={{ animationDelay: '900ms' }}
        >
          <span className="relative block h-4 w-6">
            <span
              className="absolute left-0 right-0 top-0 h-px bg-cream transition-transform duration-500"
              style={{
                transform: open ? 'translateY(7.5px) rotate(45deg)' : 'none',
                transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
              }}
            />
            <span
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-cream transition-opacity duration-300"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="absolute left-0 right-0 bottom-0 h-px bg-cream transition-transform duration-500"
              style={{
                transform: open ? 'translateY(-7.5px) rotate(-45deg)' : 'none',
                transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
              }}
            />
          </span>
        </button>
      </header>

      {/* Footer (z-10 desktop, z-30 mobile via wrapper) */}
      <footer className="absolute inset-x-0 bottom-0 z-30 sm:z-10 flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn text-cream">
        <div
          className="anim-fade-up"
          style={{ animationDelay: '1400ms' }}
        >
          <div>Full-Stack Builder</div>
          <div>AI &amp; Data Tinkerer</div>
          <div>Obsessed by clean UI</div>
        </div>
        <div
          className="anim-fade-up text-right"
          style={{ animationDelay: '1550ms' }}
        >
          <div>Based in</div>
          <div>Ahmedabad, India</div>
        </div>
      </footer>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 sm:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-40 w-[80%] max-w-sm bg-[#141414] px-8 py-10 sm:hidden`}
        style={{
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 600ms cubic-bezier(0.76, 0, 0.24, 1)',
        }}
        aria-hidden={!open}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute right-6 top-6 z-50 text-cream"
          style={{
            transform: open ? 'rotate(0deg)' : 'rotate(90deg)',
            opacity: open ? 1 : 0,
            transition:
              'transform 500ms cubic-bezier(0.76, 0, 0.24, 1), opacity 400ms ease',
            transitionDelay: open ? '300ms' : '0ms',
          }}
        >
          <X size={26} strokeWidth={1.5} />
        </button>

        <div
          className="mt-16"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(24px)',
            transition:
              'opacity 500ms ease, transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
            transitionDelay: open ? '250ms' : '0ms',
          }}
        >
          <div className="text-xs uppercase tracking-[0.2em] text-cream/50">
            Site Index
          </div>
        </div>

        <nav className="mt-6 flex flex-col gap-3">
          {NAV.map((label, i) => (
            <a
              key={label}
              href="#"
              onClick={() => setOpen(false)}
              className="text-4xl text-cream"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(24px)',
                transition:
                  'opacity 600ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: open ? `${300 + i * 80}ms` : '0ms',
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div
          className="mt-12"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(24px)',
            transition:
              'opacity 500ms ease, transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
            transitionDelay: open ? '500ms' : '0ms',
          }}
        >
          <div className="text-xs uppercase tracking-[0.2em] text-cream/50">
            Find Me
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {SOCIALS.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
              onClick={() => setOpen(false)}
              className="text-sm text-cream"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(16px)',
                transition:
                  'opacity 500ms ease, transform 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: open ? `${550 + i * 60}ms` : '0ms',
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </aside>
    </section>
  )
}
