import { Card } from "@/components/ui/Card";

const FEATURES = [
  {
    icon: "◎",
    title: "Pomodoro Focus Timer",
    description:
      "Structured 25-minute sessions with short and long breaks. Built-in streak tracking keeps you accountable.",
    color: "text-violet-400",
    glow: "violet" as const,
    tag: "Focus",
  },
  {
    icon: "◻",
    title: "Smart Task Manager",
    description:
      "Organise tasks by priority and status. See exactly what needs doing today without the noise.",
    color: "text-cyan-400",
    glow: "cyan" as const,
    tag: "Tasks",
  },
  {
    icon: "◈",
    title: "Integrated Notes",
    description:
      "Capture ideas and session notes instantly. Everything stays synced so context is never lost.",
    color: "text-emerald-400",
    glow: "emerald" as const,
    tag: "Notes",
  },
  {
    icon: "⬡",
    title: "Progress Dashboard",
    description:
      "Visual stats on your focus time, tasks completed, and streaks. Know how productive your week actually was.",
    color: "text-amber-400",
    glow: "amber" as const,
    tag: "Analytics",
  },
  {
    icon: "✦",
    title: "Distraction Tracking",
    description:
      "Log interruptions during sessions. Over time, patterns emerge so you can eliminate the biggest blockers.",
    color: "text-fuchsia-400",
    glow: "violet" as const,
    tag: "Insights",
  },
  {
    icon: "⊞",
    title: "Offline-First",
    description:
      "Everything is stored locally in your browser. No account required, no data shared — your workflow stays private.",
    color: "text-rose-400",
    glow: "none" as const,
    tag: "Privacy",
  },
];

export function Features() {
  return (
     <section id="features" className="bg-[#080c18] scroll-mt-20 py-28">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4">
            Everything you need
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            One workspace.{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              All your tools.
            </span>
          </h2>
          <p className="text-xl text-slate-400">
            No more switching between five different apps. StudyOS brings
            everything into a single, distraction-free environment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto justify-center">
          {FEATURES.map(({ icon, title, description, color, glow, tag }) => (
            <Card key={title} glow={glow} hover className="group">
              <div className="flex items-start justify-between mb-5">
                <span className={`text-3xl ${color}`}>{icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 border border-slate-800 rounded-full px-2.5 py-1">
                  {tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}