import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02]",

  secondary:
    "border border-slate-700 bg-slate-800/60 text-slate-300 hover:border-slate-600 hover:bg-slate-700/60 hover:text-white",

  ghost:
    "text-slate-400 hover:text-white hover:bg-slate-800/60",

  danger:
    "bg-red-600/20 border border-red-500/40 text-red-400 hover:bg-red-600/30 hover:text-red-300",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-3 text-sm rounded-lg",      // ✅ more breathing space
  md: "px-8 py-4 text-sm rounded-xl",      // ✅ FIXED
  lg: "px-10 py-5 text-base rounded-xl",   // ✅ FIXED
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold leading-none whitespace-nowrap transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
          <path d="M4 12a8 8 0 018-8v8H4z" fill="currentColor" className="opacity-75" />
        </svg>
      )}
      {children}
    </button>
  );
}