import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:py-32">
      <SectionHeading
        index="03"
        eyebrow="Experience"
        title="A track record of shipping AI."
        description="From shipping ML in production to running the GenAI programs nobody else wanted to touch."
      />

      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-accent)]/60 via-[var(--color-border)] to-transparent md:left-[calc(11rem+7px)]" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.company + job.role} delay={i * 0.05}>
              <div className="relative flex flex-col gap-5 pl-8 md:flex-row md:gap-8 md:pl-0">
                {/* Period (left rail on desktop) */}
                <div className="md:w-44 md:shrink-0 md:pt-0.5 md:text-right">
                  <div className="font-mono text-xs text-[var(--color-faint)]">{job.period}</div>
                  {job.current ? (
                    <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent-2)]/30 bg-[var(--color-accent-2)]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--color-accent-2)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-2)]" />
                      Current
                    </span>
                  ) : null}
                </div>

                {/* Node */}
                <div className="absolute left-0 top-1.5 md:left-[calc(11rem+1px)]">
                  <span
                    className={`block h-3.5 w-3.5 rounded-full border-2 ${
                      job.current
                        ? "border-[var(--color-accent-2)] bg-[var(--color-accent-2)]/30"
                        : "border-[var(--color-border)] bg-[var(--color-surface)]"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="card-hover flex-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7 md:ml-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {job.role}{" "}
                      <span className="text-[var(--color-muted)]">· {job.company}</span>
                    </h3>
                    <span className="text-xs text-[var(--color-faint)]">{job.location}</span>
                  </div>

                  {job.roleNote ? (
                    <div className="mt-1.5 font-mono text-[11px] text-[var(--color-faint)]">
                      {job.roleNote}
                    </div>
                  ) : null}

                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((pt) => (
                      <li
                        key={pt}
                        className="relative pl-5 text-sm leading-relaxed text-[var(--color-muted)] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-accent)]/60"
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {job.stack ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-[var(--color-border)] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-[var(--color-faint)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
