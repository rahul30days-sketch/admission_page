"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#3b328a", "#fa8dd2", "#c9a227", "#d9a9e6", "#ef5fb8", "#ffffff"];

/** Lightweight one-shot canvas confetti. Fires whenever `fire` flips true. */
export function Confetti({ fire }: { fire: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!fire) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const W = rect.width;
    const H = rect.height;

    const parts = Array.from({ length: 130 }, () => ({
      x: W / 2 + (Math.random() - 0.5) * W * 0.3,
      y: H * 0.32,
      vx: (Math.random() - 0.5) * 10,
      vy: Math.random() * -10 - 3,
      g: 0.24,
      size: 4 + Math.random() * 6,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.35,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      life: 1,
    }));

    let raf = 0;
    let frame = 0;
    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      frame++;
      let alive = false;
      for (const p of parts) {
        p.vy += p.g;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        p.life -= 0.0075;
        if (p.life > 0 && p.y < H + 30) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.life);
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.62);
          ctx.restore();
        }
      }
      if (alive && frame < 280) {
        raf = requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0, 0, W, H);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [fire]);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 z-20 h-full w-full"
      aria-hidden="true"
    />
  );
}
