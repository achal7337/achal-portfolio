import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:py-32">
      <SectionHeading
        index="06"
        eyebrow="Toolkit"
        title="The full stack of making AI work."
        description="Everything from eval rubrics and RLHF pipelines down to the production ML and infrastructure underneath."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={(i % 3) * 0.06}>
            <div className="card-hover h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--color-accent-2)]">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-[var(--color-border)] bg-white/[0.03] px-2.5 py-1.5 text-xs text-[var(--color-fg)]/85 transition-colors hover:border-white/20 hover:text-[var(--color-fg)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
