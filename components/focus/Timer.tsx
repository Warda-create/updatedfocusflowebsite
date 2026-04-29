"use client";

import { useTimer } from "@/hooks/useTimer";
import { formatTime } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import type { SessionMode } from "@/types/session";

const MODES: { id: SessionMode; label: string; color: string }[] = [
  { id: "focus",       label: "Focus",       color: "text-violet-400" },
  { id: "short-break", label: "Short Break", color: "text-cyan-400"   },
  { id: "long-break",  label: "Long Break",  color: "text-emerald-400"},
];

const CIRCUMFERENCE = 2 * Math.PI * 120;

export function Timer() {
  const { time, isRunning, mode, progress, start, pause, reset, switchMode } = useTimer();

  const currentMode = MODES.find((m) => m.id === mode)!;
  const strokeDash = CIRCUMFERENCE * (1 - progress);

  const ringColor =
    mode === "focus"
      ? "#7c3aed"
      : mode === "short-break"
      ? "#06b6d4"
      : "#10b981";

  return (
    <div className="flex flex-col items-center gap-10">

      {/* Mode tabs */}
      <div className="flex items-center gap-1 rounded-xl bg-slate-900 border border-slate-800 p-1">
        {MODES.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => switchMode(id)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              mode === id
                ? "bg-slate-800 text-white shadow"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Ring + time */}
      <div className="relative flex items-center justify-center">
        <svg width="280" height="280" className="-rotate-90">
          {/* Track */}
          <circle
            cx="140" cy="140" r="120"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            className="text-slate-800"
          />
          {/* Progress */}
          <circle
            cx="140" cy="140" r="120"
            fill="none"
            stroke={ringColor}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={strokeDash}
            style={{ transition: "stroke-dashoffset 0.8s ease, stroke 0.4s ease", filter: `drop-shadow(0 0 8px ${ringColor}60)` }}
          />
        </svg>

        {/* Centre text */}
        <div className="absolute flex flex-col items-center">
          <span className={`text-6xl font-black tabular-nums tracking-tight ${currentMode.color}`}>
            {formatTime(time)}
          </span>
          <span className="text-sm text-slate-500 mt-2 uppercase tracking-widest font-semibold">
            {currentMode.label}
          </span>
          {isRunning && (
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        {isRunning ? (
          <Button onClick={pause} variant="secondary" size="lg">
            ⏸ Pause
          </Button>
        ) : (
          <Button onClick={start} variant="primary" size="lg">
            {time === 0 || progress === 0 ? "▶ Start" : "▶ Resume"}
          </Button>
        )}
        <Button onClick={reset} variant="ghost" size="lg">
          ↺ Reset
        </Button>
      </div>
    </div>
  );
}