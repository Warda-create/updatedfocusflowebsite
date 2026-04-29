import { Card } from "@/components/ui/Card";

export function Chart() {
  return (
    <Card className="flex flex-col gap-4 h-full min-h-[300px]">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">Focus Trend</h3>
        <select className="bg-slate-800 border border-slate-700 text-sm rounded-lg px-2 py-1 text-slate-300">
          <option>Last 7 days</option>
          <option>This month</option>
        </select>
      </div>
      <div className="flex-1 flex items-center justify-center border border-dashed border-slate-700 rounded-xl bg-slate-800/20">
        <p className="text-sm text-slate-500">Chart visualization placeholder</p>
      </div>
    </Card>
  );
}
