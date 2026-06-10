"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import SectionHeading from "./SectionHeading";
import { metrics, type Metric } from "@/lib/data";

function Counter({ metric }: { metric: Metric }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(metric.value.toFixed(metric.decimals ?? 0));
      return;
    }
    const controls = animate(mv, metric.value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1] as const,
      onUpdate: (v) => setDisplay(v.toFixed(metric.decimals ?? 0)),
    });
    return () => controls.stop();
  }, [inView, metric, mv, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {metric.prefix}
      {display}
      {metric.suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="05"
          eyebrow="Impact"
          title="Numbers that moved."
          description="Quality and throughput aren't a trade off when you design the system right."
        />

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const }}
              className="card-hover rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8"
            >
              <div className="text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">
                <Counter metric={m} />
              </div>
              <p className="mt-3 text-sm leading-snug text-[var(--color-muted)]">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
