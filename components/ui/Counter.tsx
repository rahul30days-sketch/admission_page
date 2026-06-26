"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });
  const reduce = useReducedMotion();
  // Start at the real value so server-rendered / no-JS / pre-hydration output
  // shows the correct figure (never a misleading "0%").
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    // Reduced motion → resolve instantly (duration 0); otherwise count up from 0.
    // All state writes happen inside animation callbacks, never synchronously here.
    const controls = animate(reduce ? value : 0, value, {
      duration: reduce ? 0 : duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
      // Guarantee we always settle on the exact target value.
      onComplete: () => setDisplay(value),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
