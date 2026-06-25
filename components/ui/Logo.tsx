import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="seri-logo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5d87f7" />
          <stop offset="0.55" stopColor="#3061ee" />
          <stop offset="1" stopColor="#1d49d8" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#seri-logo)" />
      <path
        d="M11 26 L24 14 L37 26"
        stroke="white"
        strokeWidth="4.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 35 L24 23 L37 35"
        stroke="white"
        strokeOpacity="0.65"
        strokeWidth="4.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <a href="#top" className={cn("group flex items-center gap-2.5", className)} aria-label="SITASRM — home">
      <LogoMark className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-extrabold tracking-tight sm:text-lg",
            dark ? "text-white" : "text-navy-900"
          )}
        >
          SITASRM
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.56rem] font-semibold uppercase tracking-[0.18em]",
            dark ? "text-ice-200/70" : "text-ink-soft"
          )}
        >
          Engineering &amp; Research
        </span>
      </span>
    </a>
  );
}
