"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { SessionMode } from "../types/session";

const DURATIONS: Record<SessionMode, number> = {
  focus: 25 * 60,
  "short-break": 5 * 60,
  "long-break": 15 * 60,
};

export interface UseTimerReturn {
  time: number;
  isRunning: boolean;
  mode: SessionMode;
  progress: number;
  start: () => void;
  pause: () => void;
  reset: () => void;
  switchMode: (m: SessionMode) => void;
}

export function useTimer(): UseTimerReturn {
  const [mode, setMode] = useState<SessionMode>("focus");
  const [time, setTime] = useState<number>(DURATIONS.focus);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clear = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return clear;
  }, [isRunning]);

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => setIsRunning(false), []);

  const reset = useCallback(() => {
    setIsRunning(false);
    setTime(DURATIONS[mode]);
  }, [mode]);

  const switchMode = useCallback((m: SessionMode) => {
    setIsRunning(false);
    setMode(m);
    setTime(DURATIONS[m]);
  }, []);

  const progress = 1 - time / DURATIONS[mode];

  return { time, isRunning, mode, progress, start, pause, reset, switchMode };
}