import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:py-32">
      <SectionHeading index="07" eyebrow="Education" title="Foundations." />

      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.08}>
            <div className="card-hover flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7">
              <span className="mb-6 inline-flex h-12 w-fit items-center rounded-xl bg-white px-3.5 shadow-lg shadow-black/20">
                <Image
                  src={e.logo}
                  alt={e.school}
                  width={160}
                  height={56}
                  className="h-6 w-auto sm:h-7"
                />
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-lg font-semibold tracking-tight">{e.school}</h3>
                <span className="font-mono text-xs text-[var(--color-faint)]">{e.period}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {e.credential}
              </p>
              <p className="mt-2 text-xs text-[var(--color-faint)]">{e.location}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
