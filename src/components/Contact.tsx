import Reveal from "./Reveal";
import { profile } from "@/lib/data";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-[var(--color-border)]">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[60vh] glow opacity-70" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-[var(--color-accent)] opacity-[0.16] blur-[140px]" />

      <div className="mx-auto max-w-6xl px-5 py-24 text-center sm:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent-2)]">
            Let&apos;s talk
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            <span className="text-gradient-soft">Building something at the frontier?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            I&apos;m always up for a conversation about AI employees, GenAI delivery, or what
            we&apos;re building at AD Tech AI.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-white/5 px-6 py-3 text-sm font-semibold transition-colors hover:border-white/20 hover:bg-white/10 sm:w-auto"
            >
              <LinkedinIcon size={16} />
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-white/5 px-6 py-3 text-sm font-semibold transition-colors hover:border-white/20 hover:bg-white/10 sm:w-auto"
            >
              <GithubIcon size={16} />
              GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--color-faint)]">
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-[var(--color-fg)]">
              <Phone size={13} /> {profile.phone}
            </a>
            <a
              href={profile.company.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-[var(--color-fg)]"
            >
              adtechai.ca <ArrowUpRight size={12} />
            </a>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-[var(--color-faint)] sm:flex-row">
          <span>© {year} {profile.name}. Toronto, Canada.</span>
          <span className="font-mono">Built with Next.js · Designed to ship.</span>
        </div>
      </div>
    </footer>
  );
}
