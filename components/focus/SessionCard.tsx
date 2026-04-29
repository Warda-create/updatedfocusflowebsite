import { Card } from "@/components/ui/Card";

interface SessionCardProps {
  durationMinutes: number;
  taskTitle?: string;
  date: string;
}

export function SessionCard({ durationMinutes, taskTitle, date }: SessionCardProps) {
  return (
    <Card className="flex items-center justify-between p-4 sm:p-5">
      <div>
        <h4 className="font-semibold text-white">
          {taskTitle || "Deep Work Session"}
        </h4>
        <p className="text-xs text-slate-400 mt-1">{date}</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-bold">
          {durationMinutes}m
        </div>
      </div>
    </Card>
  );
}
