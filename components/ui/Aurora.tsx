import { cn } from "@/lib/utils";

/** Animated gradient-mesh backdrop — soft drifting colour blobs.
    Purely decorative; place inside a relative, overflow-hidden parent. */
export function Aurora({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark" | "warm";
  className?: string;
}) {
  const palettes: Record<string, string[]> = {
    light: ["bg-royal-400/40", "bg-ice-300/45", "bg-flame-400/25"],
    dark: ["bg-royal-500/40", "bg-royal-700/50", "bg-flame-500/20"],
    warm: ["bg-flame-400/35", "bg-gold-400/35", "bg-royal-400/25"],
  };
  const [a, b, c] = palettes[tone];

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className={cn("aurora-blob animate-aurora h-[42vw] w-[42vw] -left-[8%] -top-[12%]", a)} />
      <div
        className={cn("aurora-blob animate-aurora h-[38vw] w-[38vw] right-[-6%] top-[18%]", b)}
        style={{ animationDelay: "-6s" }}
      />
      <div
        className={cn("aurora-blob animate-aurora h-[30vw] w-[30vw] left-[35%] bottom-[-12%]", c)}
        style={{ animationDelay: "-11s" }}
      />
    </div>
  );
}

const PARTICLES = [
  { l: "8%", t: "22%", s: 6, d: "0s", a: 0.5 },
  { l: "18%", t: "68%", s: 4, d: "-1.2s", a: 0.35 },
  { l: "30%", t: "38%", s: 8, d: "-2.4s", a: 0.6 },
  { l: "42%", t: "14%", s: 5, d: "-0.6s", a: 0.4 },
  { l: "52%", t: "72%", s: 7, d: "-3.1s", a: 0.5 },
  { l: "63%", t: "30%", s: 4, d: "-1.8s", a: 0.3 },
  { l: "72%", t: "56%", s: 9, d: "-2.0s", a: 0.55 },
  { l: "81%", t: "20%", s: 5, d: "-0.9s", a: 0.45 },
  { l: "88%", t: "64%", s: 6, d: "-3.6s", a: 0.4 },
  { l: "12%", t: "48%", s: 4, d: "-2.7s", a: 0.3 },
  { l: "48%", t: "50%", s: 5, d: "-1.5s", a: 0.4 },
  { l: "67%", t: "78%", s: 7, d: "-0.4s", a: 0.5 },
];

/** Deterministic floating dots — SSR-safe (no random). */
export function FloatingParticles({
  className,
  color = "bg-white",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={cn(
            "absolute rounded-full",
            color,
            i % 2 === 0 ? "animate-float-slow" : "animate-float-med"
          )}
          style={{
            left: p.l,
            top: p.t,
            width: p.s,
            height: p.s,
            opacity: p.a,
            animationDelay: p.d,
          }}
        />
      ))}
    </div>
  );
}
