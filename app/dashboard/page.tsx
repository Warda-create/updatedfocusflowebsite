import { StatsCard } from "@/components/dashboard/StatsCard";

export default function Dashboard() {
  return (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-8">
    <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatsCard title="Focus Time" value="5h" icon="⏱" />
      <StatsCard title="Tasks Done" value="12" icon="✓" />
      <StatsCard title="Sessions" value="8" icon="◎" />
    </div>
  </div>
);
}