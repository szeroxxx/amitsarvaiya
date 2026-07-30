"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

/**
 * Animates a stat like "24+" or "22,000+" by counting up the numeric part
 * once it scrolls into view, then re-appends any suffix (+, commas, etc).
 */
export function CountUp({ value, duration = 1.5, className }: CountUpProps) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/^[0-9,]+/, "");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, numericValue, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, numericValue, duration, motionValue]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
