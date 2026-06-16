"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { profile } from "@/lib/data";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import LogoMarquee from "./LogoMarquee";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Subtle parallax: content fades as you scroll past
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-44 lg:pb-20"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-grid" />
      <div className="pointer-events-none absolute inset-0 -z-30 overflow-hidden">
        <div className="aurora aurora-1 -left-20 -top-24 h-[460px] w-[460px]" />
        <div className="aurora aurora-2 left-1/3 -top-32 h-[420px] w-[520px]" />
        <div className="aurora aurora-3 right-10 top-10 h-[380px] w-[380px]" />
      </div>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative mx-auto max-w-6xl px-5">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto w-full max-w-3xl text-center"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/5 px-4 py-1.5 text-xs text-[var(--color-muted)] backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent-2)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-2)]" />
            </span>
            Cofounder @ AD Tech AI · Building autonomous AI employees
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl"
          >
            <span className="text-gradient-soft">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-balance text-xl font-medium leading-snug sm:text-2xl"
          >
            I build{" "}
            <span className="text-gradient animate-gradient-x">AI employees</span>, and the
            systems that make AI actually work in production.
          </motion.p>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
          >
            {profile.blurb}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <a
              href="#venture"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto"
            >
              See what I&apos;m building
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-white/5 px-6 py-3 text-sm font-semibold transition-colors hover:border-white/20 hover:bg-white/10 sm:w-auto"
            >
              <Mail size={16} />
              Get in touch
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex items-center justify-center gap-2 text-xs text-[var(--color-faint)]"
          >
            <MapPin size={13} />
            {profile.location}
            <span className="mx-1.5 h-1 w-1 rounded-full bg-[var(--color-faint)]" />
            Available for the right opportunity
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Real tech-stack logos */}
      <LogoMarquee />
    </section>
  );
}
