export type SessionMode = "focus" | "short-break" | "long-break";

export interface FocusSession {
  id: string;
  mode: SessionMode;
  durationSeconds: number;
  completedAt: string;
  note?: string;
}

export interface DailyStats {
  date: string;
  sessionsCompleted: number;
  totalFocusMinutes: number;
  tasksCompleted: number;
}