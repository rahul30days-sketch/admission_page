/* Curated Lucide icon registry — maps content string keys to icons
   so data files stay JSX-free while keeping imports tree-shakeable. */
import {
  Cpu, FlaskConical, Rocket, Globe2, Briefcase, Code2, BrainCircuit,
  ShieldCheck, CircuitBoard, ClipboardList, BookOpen, TrendingUp, Target,
  FileText, Mic, Handshake, Music4, Dumbbell, Home, PhoneCall, CheckCircle2,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  flask: FlaskConical,
  rocket: Rocket,
  globe: Globe2,
  briefcase: Briefcase,
  code: Code2,
  brain: BrainCircuit,
  shield: ShieldCheck,
  circuit: CircuitBoard,
  clipboard: ClipboardList,
  book: BookOpen,
  trending: TrendingUp,
  target: Target,
  file: FileText,
  mic: Mic,
  handshake: Handshake,
  music: Music4,
  dumbbell: Dumbbell,
  home: Home,
  phone: PhoneCall,
  check: CheckCircle2,
};

/** Map a content accent key to brand utility classes. */
export const accentClasses: Record<
  string,
  { text: string; bg: string; soft: string; ring: string; from: string; to: string }
> = {
  royal: {
    text: "text-royal-600",
    bg: "bg-royal-500",
    soft: "bg-royal-500/10",
    ring: "ring-royal-500/30",
    from: "from-royal-500",
    to: "to-royal-400",
  },
  flame: {
    text: "text-flame-600",
    bg: "bg-flame-500",
    soft: "bg-flame-500/10",
    ring: "ring-flame-500/30",
    from: "from-flame-500",
    to: "to-gold-400",
  },
  gold: {
    text: "text-gold-500",
    bg: "bg-gold-400",
    soft: "bg-gold-400/15",
    ring: "ring-gold-400/30",
    from: "from-gold-400",
    to: "to-flame-500",
  },
  ice: {
    text: "text-royal-500",
    bg: "bg-ice-400",
    soft: "bg-ice-300/20",
    ring: "ring-ice-400/30",
    from: "from-ice-400",
    to: "to-royal-400",
  },
  navy: {
    text: "text-navy-700",
    bg: "bg-navy-700",
    soft: "bg-navy-500/10",
    ring: "ring-navy-500/30",
    from: "from-navy-700",
    to: "to-royal-500",
  },
};
