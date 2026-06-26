"use client";

import { cn } from "@/lib/utils";
import { Magnetic } from "./Magnetic";
import type { ReactNode } from "react";

type Variant = "primary" | "warm" | "outline" | "glass" | "darkglass" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-gradient-to-br from-royal-400 via-royal-500 to-royal-600 shadow-[var(--shadow-glow)] hover:brightness-110",
  warm:
    "text-navy-950 bg-gradient-to-br from-gold-300 via-flame-400 to-flame-500 hover:brightness-105 shadow-[0_16px_44px_-16px_rgba(201,162,39,0.6)]",
  outline:
    "text-navy-800 border border-navy-900/15 bg-white/55 hover:bg-white hover:border-navy-900/25",
  glass: "text-navy-800 glass hover:bg-white/90",
  darkglass:
    "text-white border border-white/20 bg-white/5 hover:bg-white/12 backdrop-blur-md",
  ghost: "text-navy-700 hover:bg-navy-900/5",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
  magnetic?: boolean;
  sheen?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  icon,
  magnetic = false,
  sheen = true,
  onClick,
  type = "button",
  target,
  rel,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "group relative inline-flex select-none items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 will-change-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
    variants[variant],
    sizes[size],
    sheen && "sheen",
    className
  );

  const inner = (
    <span className="relative z-10 inline-flex items-center gap-2">
      {children}
      {icon}
    </span>
  );

  const el = href ? (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
      aria-label={ariaLabel}
      className={classes}
    >
      {inner}
    </a>
  ) : (
    <button type={type} onClick={onClick} aria-label={ariaLabel} className={classes}>
      {inner}
    </button>
  );

  return magnetic ? <Magnetic className="inline-flex">{el}</Magnetic> : el;
}
