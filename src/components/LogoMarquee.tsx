"use client";

import { motion } from "motion/react";

const logos: { src: string; label: string }[] = [
  { src: "/logos/python.svg", label: "Python" },
  { src: "/logos/pytorch.svg", label: "PyTorch" },
  { src: "/logos/tensorflow.svg", label: "TensorFlow" },
  { src: "/logos/scikitlearn.svg", label: "scikit-learn" },
  { src: "/logos/pandas.svg", label: "pandas" },
  { src: "/logos/apachespark.svg", label: "Apache Spark" },
  { src: "/logos/apachekafka.svg", label: "Apache Kafka" },
  { src: "/logos/googlecloud.svg", label: "Google Cloud" },
  { src: "/logos/docker.svg", label: "Docker" },
  { src: "/logos/fastapi.svg", label: "FastAPI" },
  { src: "/logos/nextdotjs.svg", label: "Next.js" },
];

export default function LogoMarquee() {
  const row = [...logos, ...logos];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto mt-16 max-w-6xl px-5 lg:mt-24"
    >
      <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-faint)]">
        Tools I build with
      </p>
      <div className="mask-fade-x overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-14">
          {row.map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${logo.label}-${i}`}
              src={logo.src}
              alt={logo.label}
              title={logo.label}
              className="h-7 w-auto opacity-55 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
