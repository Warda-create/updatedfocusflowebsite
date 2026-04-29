import Link from "next/link";
import { Button } from "@/components/ui/Button";

const STAT_PILLS = [
  { value: "25 min", label: "Focus blocks" },
  { value: "2,400+", label: "Active users" },
  { value: "94%", label: "Goal completion" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#080c18] pt-32 pb-24">

      {/* Grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-64 left-1/2 -translate-x-1/2 h-[700px] w-[1000px] rounded-full opacity-20 blur-3xl bg-[radial-gradient(ellipse,#7c3aed_0%,transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-0 h-[500px] w-[600px] rounded-full opacity-10 blur-3xl bg-[radial-gradient(ellipse,#06b6d4_0%,transparent_65%)]"
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full pt-1">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div className="flex flex-col gap-5">

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
              Free during early access
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              <span className="text-white">Your entire</span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                study workflow
              </span>
              <br />
              <span className="text-white">in one OS.</span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              StudyOS combines a Pomodoro timer, task manager, and smart notes
              in one distraction-free workspace.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/dashboard">
                <Button size="lg" variant="primary">
                  Get started free →
                </Button>
              </Link>

              <a href="#how-it-works">
                <Button size="lg" variant="secondary">
                  See how it works
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-1">
              {STAT_PILLS.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-black text-white">{value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT */}
          <div className="relative hidden lg:flex justify-center">

            <div className="relative w-full max-w-[600px]">

              <div className="absolute inset-0 scale-110 rounded-3xl blur-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/10" />

              <div className="relative rounded-2xl border border-slate-700/60 bg-slate-900/80 p-3 shadow-2xl">

                <div className="flex items-center gap-1.5 px-1 pb-3">
                  <div className="h-3 w-3 rounded-full bg-red-500/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <div className="h-3 w-3 rounded-full bg-green-500/70" />
                  <div className="ml-auto flex-1 max-w-[160px] h-5 rounded-md bg-slate-800 mx-auto" />
                </div>

                <div className="rounded-xl overflow-hidden bg-slate-800">

                  <div className="w-full h-[360px] flex flex-col items-center justify-center bg-slate-900 border border-slate-700">

                    <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                      StudyOS
                    </div>

                    <p className="text-slate-500 mt-4">
                      Your productivity workspace
                    </p>

                    <div className="flex gap-4 mt-8">

                      <div className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700">
                        <p className="text-xs text-slate-500">Focus</p>
                        <p className="text-lg font-bold text-violet-400">25:00</p>
                      </div>

                      <div className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700">
                        <p className="text-xs text-slate-500">Tasks</p>
                        <p className="text-lg font-bold text-cyan-400">12</p>
                      </div>

                      <div className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700">
                        <p className="text-xs text-slate-500">Notes</p>
                        <p className="text-lg font-bold text-emerald-400">5</p>
                      </div>

                    </div>

                  </div>

                </div>

                <div className="absolute left-2 bottom-8 rounded-xl border border-slate-700 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur-sm">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wide">
                    Focus streak
                  </p>
                  <p className="text-xl font-black text-violet-400 mt-0.5">
                    🔥 7 days
                  </p>
                </div>

                <div className="absolute right-2 top-16 rounded-xl border border-slate-700 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur-sm">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wide">
                    Tasks done today
                  </p>
                  <p className="text-xl font-black text-cyan-400 mt-0.5">
                    12 / 15
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}