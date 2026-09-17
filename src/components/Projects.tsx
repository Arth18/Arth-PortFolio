type Project = {
  index: string
  title: string
  role: string
  year: string
  stack: string[]
  blurb: string
  bullets: string[]
  href?: string
}

const PROJECTS: Project[] = [
  {
    index: '01',
    title: 'SA Realtors',
    role: 'Production Real-Estate Platform',
    year: '2025',
    stack: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    blurb:
      'Designed, built, and deployed a live production website for an Australian real-estate brokerage — listings, agent profiles, and multi-channel inquiry routing.',
    bullets: [
      'Advanced search: suburb, price range, bedrooms, property type.',
      'Image-optimised galleries + lazy loading — LCP down ~45%.',
      'On-page SEO with structured data; mobile-first responsive.',
    ],
    href: 'https://sarealtors.com.au',
  },
  {
    index: '02',
    title: 'Agent Collective',
    role: 'Multi-Agent AI Orchestration',
    year: '2025',
    stack: ['FastAPI', 'React', 'TypeScript', 'WebSockets', 'Claude', 'OpenAI'],
    blurb:
      'End-to-end multi-agent platform where 5 specialised agents decompose a task, run subtasks in parallel, and self-critique before publishing a deliverable.',
    bullets: [
      'Async FastAPI backend streaming per-token LLM output over WebSockets.',
      'Live per-agent conversation bubbles rendered as tokens arrive.',
      'Provider-agnostic LLM layer (Claude Sonnet · GPT-4o) swappable via env var.',
    ],
  },
  {
    index: '03',
    title: 'PricePulse',
    role: 'AI-Powered E-Commerce Price Intelligence',
    year: '2025',
    stack: ['Python', 'ML', 'Pandas', 'Scikit-learn'],
    blurb:
      'Scraped and modelled competitor pricing signals to surface repricing recommendations for a mid-market catalogue.',
    bullets: [
      'Feature pipeline across brand, category, seasonality, and stock-out signals.',
      'Regression + tree ensembles benchmarked; picked per-category winner.',
      'Streamlit console for merchandiser overrides and audit trail.',
    ],
  },
  {
    index: '04',
    title: 'Job Bot',
    role: 'Automated Outreach Agent',
    year: '2025',
    stack: ['Python', 'Playwright', 'OpenAI'],
    blurb:
      'Personal agent that reads a job feed, tailors a cover letter per posting, and drafts an application ready for review.',
    bullets: [
      'Headless browser flow with human-in-the-loop confirmation.',
      'Per-role prompt scaffolding pulled from a résumé graph.',
      'Local-only credentials; no third-party job platforms called on my behalf.',
    ],
  },
]

export default function Projects() {
  return (
    <section id="jobs" className="relative w-full bg-black text-cream py-32 sm:py-48">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="text-xs uppercase tracking-[0.3em] text-cream/50 mb-16">
          (02) &nbsp; Selected Work
        </div>

        <div className="border-t border-cream/15">
          {PROJECTS.map((p) => (
            <ProjectRow key={p.index} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectRow({ p }: { p: Project }) {
  const Wrapper = (props: { children: React.ReactNode }) =>
    p.href ? (
      <a
        href={p.href}
        target="_blank"
        rel="noreferrer"
        className="block group"
      >
        {props.children}
      </a>
    ) : (
      <div className="block group">{props.children}</div>
    )

  return (
    <Wrapper>
      <div className="border-b border-cream/15 py-10 sm:py-14 transition-colors duration-500 group-hover:bg-cream/[0.02]">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-2 sm:col-span-1 text-xs sm:text-sm text-cream/40 pt-2">
            {p.index}
          </div>

          <div className="col-span-10 sm:col-span-6">
            <h3 className="font-hn text-3xl sm:text-5xl leading-none tracking-tight">
              {p.title}
              {p.href && (
                <span className="ml-3 inline-block align-middle text-lg text-cream/40 transition-transform duration-500 group-hover:translate-x-1">
                  &rarr;
                </span>
              )}
            </h3>
            <div className="mt-3 text-sm text-cream/60">{p.role}</div>
          </div>

          <div className="col-span-12 sm:col-span-5">
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-cream/60">
              <span>{p.year}</span>
              <span className="text-cream/25">/</span>
              {p.stack.map((s, i) => (
                <span key={s}>
                  {s}
                  {i < p.stack.length - 1 && (
                    <span className="ml-4 text-cream/25">/</span>
                  )}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm sm:text-base text-cream/80 leading-relaxed">
              {p.blurb}
            </p>

            <ul className="mt-4 space-y-1.5 text-sm text-cream/60">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="text-cream/30">&mdash;</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
