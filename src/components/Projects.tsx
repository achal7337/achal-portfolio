import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:py-32">
      <SectionHeading
        index="04"
        eyebrow="Projects"
        title="Things I've built."
        description="Real systems across ML, data engineering, and GenAI evaluation. Not notebooks that never left a laptop."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.07}>
            <article className="card-hover group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-[var(--color-border)] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent-2)]">
                  {p.category}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-[var(--color-faint)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-fg)]"
                />
              </div>

              <h3 className="text-lg font-semibold leading-snug tracking-tight">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                {p.summary}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm text-[var(--color-fg)]/90">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-2)]" />
                <span className="text-gradient font-medium">{p.result}</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-[var(--color-border)] pt-4">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-[var(--color-faint)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
