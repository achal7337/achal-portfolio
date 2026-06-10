import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import IrisOrb from "./IrisOrb";
import { venture } from "@/lib/data";
import { ArrowUpRight, Check } from "lucide-react";

export default function Venture() {
  return (
    <section id="venture" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:py-32">
      <SectionHeading
        index="01"
        eyebrow="What I'm building"
        title="AD Tech AI"
        description="Autonomous AI employees that don't sit there answering questions. They do the job."
      />

      <div className="grid gap-5 lg:grid-cols-12">
        {/* Vision card */}
        <Reveal className="lg:col-span-7">
          <div className="card-hover relative h-full overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--color-accent)] opacity-20 blur-[100px]" />
            <div className="mb-7 flex items-center gap-3">
              <span className="inline-flex items-center rounded-xl bg-white px-3 py-2.5 shadow-lg shadow-black/20">
                <Image
                  src="/logo-adtech.png"
                  alt="AD Tech AI, Agentic Decision AI"
                  width={160}
                  height={120}
                  className="h-9 w-auto"
                />
              </span>
              <span className="rounded-full border border-[var(--color-border)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent-2)]">
                {venture.founded}
              </span>
            </div>
            <p className="text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              {venture.headline}
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-[var(--color-muted)]">
              {venture.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              {venture.roadmap.map((sector, i) => (
                <div key={sector} className="flex items-center gap-2">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs ${
                      i === 0
                        ? "border-[var(--color-accent-2)]/40 bg-[var(--color-accent-2)]/10 text-[var(--color-accent-2)]"
                        : "border-[var(--color-border)] text-[var(--color-faint)]"
                    }`}
                  >
                    {sector}
                  </span>
                  {i < venture.roadmap.length - 1 ? (
                    <span className="text-[var(--color-faint)]">→</span>
                  ) : null}
                </div>
              ))}
            </div>

            <a
              href={venture.url}
              target="_blank"
              rel="noreferrer"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-fg)]"
            >
              Visit{" "}
              <span className="underline decoration-[var(--color-accent)]/50 underline-offset-4 group-hover:decoration-[var(--color-accent)]">
                adtechai.ca
              </span>
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        {/* Vision quote */}
        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="flex h-full flex-col justify-center rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-accent)]/10 via-transparent to-[var(--color-accent-2)]/10 p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-faint)]">
              The thesis
            </p>
            <p className="mt-4 text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              &ldquo;Every sector of business will have an{" "}
              <span className="text-gradient">AI employee</span>.&rdquo;
            </p>
          </div>
        </Reveal>

        {/* Iris product card */}
        <Reveal delay={0.05} className="lg:col-span-12">
          <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo-iris.png"
                    alt="Iris"
                    width={48}
                    height={48}
                    className="h-11 w-11 rounded-xl"
                  />
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{venture.product.name}</h3>
                    <p className="text-xs text-[var(--color-faint)]">
                      Flagship AI employee · ecommerce support
                    </p>
                  </div>
                </div>
                <p className="mt-6 leading-relaxed text-[var(--color-muted)]">
                  {venture.product.pitch}
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {venture.product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-fg)]/90">
                      <Check size={16} className="mt-0.5 shrink-0 text-[var(--color-accent-2)]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[var(--color-border)] pt-6">
                  {venture.product.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-semibold tracking-tight text-gradient sm:text-3xl">
                        {s.value}
                      </div>
                      <div className="mt-1.5 text-[11px] leading-snug text-[var(--color-muted)]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Iris brand mark — animated orb with tagline right below it */}
              <div className="relative flex min-h-[400px] flex-col items-center justify-center gap-6 overflow-hidden border-t border-[var(--color-border)] bg-gradient-to-br from-[var(--color-accent)]/8 to-transparent p-10 lg:border-l lg:border-t-0">
                <IrisOrb size={150} />
                <p className="z-10 text-center text-lg font-semibold tracking-tight">
                  <span className="text-gradient">No salary. No sick days. Always on.</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
