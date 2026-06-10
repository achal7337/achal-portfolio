import Reveal from "./Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ index, eyebrow, title, description }: Props) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <div className="mb-4 flex items-center gap-3 font-mono text-xs tracking-widest text-[var(--color-accent-2)]">
        <span>{index}</span>
        <span className="h-px w-8 bg-[var(--color-border)]" />
        <span className="uppercase text-[var(--color-faint)]">{eyebrow}</span>
      </div>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        <span className="text-gradient-soft">{title}</span>
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
