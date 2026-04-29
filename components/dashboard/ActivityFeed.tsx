import { Card } from "@/components/ui/Card";

export function ActivityFeed() {
  return (
    <Card className="flex flex-col gap-4">
      <h3 className="text-lg font-bold text-white">Recent Activity</h3>
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <span className="text-3xl text-slate-700 mb-3">◷</span>
        <p className="text-sm text-slate-400">No activity to show yet.</p>
        <p className="text-xs text-slate-500 mt-1">Complete a task or focus session to see it here.</p>
      </div>
    </Card>
  );
}
