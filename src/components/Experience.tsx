const ITEMS = [
  {
    role: 'International Business Development Intern',
    org: 'GlitchOver',
    period: 'Jul 2025 — Aug 2025',
    points: [
      'Drove global market expansion via lead generation, market research, and cross-border outreach.',
      'Ran competitor analysis and market-entry reports for targeting in key international regions.',
      'Owned targeted email campaigns; aligned BD efforts with product capabilities cross-functionally.',
    ],
  },
  {
    role: 'Bachelor of Engineering — Information Technology',
    org: 'LDRP-ITR, Gandhinagar',
    period: '2022 — 2026 · CGPA 7.54',
    points: [
      'Core: DSA, DBMS, Operating Systems, Computer Networks, Software Engineering.',
      'Self-taught: full-stack (React/Node), applied ML, LLM orchestration.',
    ],
  },
]

const CERTS = [
  { name: 'Foundations: Data, Data, Everywhere', by: 'Google / Coursera' },
  { name: 'Data Science Pro', by: 'FingerTips, Ahmedabad' },
  { name: 'Agentic AI', by: 'Udemy' },
  { name: 'Python Bootcamp', by: 'Udemy' },
]

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-black text-cream py-32 sm:py-48 border-t border-cream/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="text-xs uppercase tracking-[0.3em] text-cream/50 mb-16">
          (03) &nbsp; Experience &amp; Education
        </div>

        <div className="space-y-16">
          {ITEMS.map((it) => (
            <div key={it.role} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
              <div className="lg:col-span-3 text-sm text-cream/60">{it.period}</div>
              <div className="lg:col-span-9">
                <h3 className="font-hn text-2xl sm:text-3xl tracking-tight">{it.role}</h3>
                <div className="mt-1 text-sm text-cream/60">{it.org}</div>
                <ul className="mt-5 space-y-2 text-sm sm:text-base text-cream/80 leading-relaxed max-w-3xl">
                  {it.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="text-cream/30">&mdash;</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-8">
            Certifications
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 max-w-4xl">
            {CERTS.map((c) => (
              <li
                key={c.name}
                className="flex items-baseline justify-between border-b border-cream/10 pb-3"
              >
                <span className="text-cream text-sm sm:text-base">{c.name}</span>
                <span className="text-xs text-cream/50">{c.by}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
