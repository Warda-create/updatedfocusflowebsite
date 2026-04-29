import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type Accent = "violet" | "cyan" | "emerald" | "amber";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: string;
  accent?: Accent;
  trend?: { value: string; positive: boolean };
}

const accents: Record<Accent, { text: string; bg: string; glow: "violet" | "cyan" | "emerald" | "amber" }> = {
  violet:  { text: "text-violet-400",  bg: "bg-violet-500/10",  glow: "violet"  },
  cyan:    { text: "text-cyan-400",    bg: "bg-cyan-500/10",    glow: "cyan"    },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/10", glow: "emerald" },
  amber:   { text: "text-amber-400",   bg: "bg-amber-500/10",   glow: "amber"   },
};

export function StatsCard({
  title,
  value,
  subtitle,
  icon,
  accent = "violet",
  trend,
}: StatsCardProps) {
  const { text, bg, glow } = accents[accent];

  return (
    <Card glow={glow} hover className="p-6">
      <div className="flex items-start justify-between mb-4">
        {icon && (
          <div className={cn("h-10 w-10 rounded-xl flex items-center justify-center text-lg", bg)}>
            {icon}
          </div>
        )}
        {trend && (
          <span
            className={cn(
              "text-xs font-semibold px-2 py-1 rounded-full",
              trend.positive
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-red-500/10 text-red-400"
            )}
          >
            {trend.positive ? "↑" : "↓"} {trend.value}
          </span>
        )}
      </div>
      <p className="text-sm text-slate-500 mb-1">{title}</p>
      <p className={cn("text-3xl font-black", text)}>{value}</p>
      {subtitle && <p className="text-xs text-slate-600 mt-1">{subtitle}</p>}
    </Card>
  );
}