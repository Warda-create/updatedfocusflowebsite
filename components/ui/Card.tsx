import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: "violet" | "cyan" | "emerald" | "amber" | "none";
  hover?: boolean;
}

const glows: Record<NonNullable<CardProps["glow"]>, string> = {
  violet: "hover:border-violet-500/50 hover:shadow-violet-500/10",
  cyan: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
  emerald: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
  amber: "hover:border-amber-500/50 hover:shadow-amber-500/10",
  none: "",
};

export function Card({
  children,
  className,
  glow = "none",
  hover = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "w-full h-full rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-6 sm:p-8",
        hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        glow !== "none" && glows[glow],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}