"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

export default function MotionProvider({ children }: { children: ReactNode }) {
  // reducedMotion="user" disables transform/layout animations for users who
  // prefer reduced motion (opacity still fades, so content always reveals),
  // while keeping a consistent initial render between server and client.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
