import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading index="02" eyebrow="About" title="Operator turned founder." />
        </div>
        <div className="space-y-6 lg:col-span-7 lg:pt-2">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-[var(--color-muted)] sm:text-xl">
                {i === about.paragraphs.length - 1 ? (
                  <span className="text-[var(--color-fg)]">{p}</span>
                ) : (
                  p
                )}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
