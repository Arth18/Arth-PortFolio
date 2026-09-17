const GROUPS = [
  { k: 'Languages', v: ['Python', 'C / C++', 'SQL', 'TypeScript', 'JavaScript'] },
  {
    k: 'Frameworks',
    v: ['React', 'Next.js', 'FastAPI', 'Node.js', 'LangChain', 'Streamlit', 'n8n'],
  },
  {
    k: 'Data & ML',
    v: ['Pandas', 'NumPy', 'Scikit-learn', 'Hugging Face', 'Tableau', 'Power BI'],
  },
  { k: 'Databases', v: ['MongoDB', 'PostgreSQL', 'SQL'] },
  { k: 'AI Tools', v: ['Claude', 'OpenAI API', 'Cursor', 'Agentic AI'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-black text-cream py-32 sm:py-48 border-t border-cream/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="text-xs uppercase tracking-[0.3em] text-cream/50 mb-16">
          (04) &nbsp; Toolbox
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12 gap-y-14">
          {GROUPS.map((g) => (
            <div key={g.k}>
              <div className="text-[11px] uppercase tracking-[0.25em] text-cream/50 mb-4">
                {g.k}
              </div>
              <ul className="space-y-1.5">
                {g.v.map((s) => (
                  <li key={s} className="text-cream/85 text-base">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
