"use client";

import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;

    try {
      const stored = window.localStorage.getItem(key);

      if (!stored) return initialValue;

      const parsed = JSON.parse(stored);

      // ✅ Ensure data is valid
      if (Array.isArray(initialValue)) {
        return Array.isArray(parsed) ? parsed : initialValue;
      }

      if (typeof initialValue === "object" && initialValue !== null) {
        return typeof parsed === "object" ? parsed : initialValue;
      }

      return parsed;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore errors (private mode / quota / etc.)
    }
  }, [key, value]);

  return [value, setValue] as const;
}