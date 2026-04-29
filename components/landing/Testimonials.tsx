import { Card } from "@/components/ui/Card";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I went from failing to keep up with revision to finishing my semester 3 weeks early.",
    name: "Aisha K.",
    role: "CS undergrad, UCL",
    avatar: "AK",
    rating: 5,
  },
  {
    quote:
      "Having everything in one place means I stay in the zone instead of tab-switching.",
    name: "Marcus T.",
    role: "Self-taught dev",
    avatar: "MT",
    rating: 5,
  },
  {
    quote:
      "The distraction counter made me realize I was getting interrupted constantly.",
    name: "Priya N.",
    role: "PhD candidate",
    avatar: "PN",
    rating: 5,
  },
  {
    quote:
      "Clean, fast, and private. It gets out of the way and lets me work.",
    name: "Leon S.",
    role: "Backend engineer",
    avatar: "LS",
    rating: 5,
  },
  {
    quote:
      "My study group switched to StudyOS and it keeps everyone accountable.",
    name: "Sofia R.",
    role: "Medical student",
    avatar: "SR",
    rating: 5,
  },
  {
    quote:
      "Simple notes + focus system is exactly what I needed.",
    name: "James W.",
    role: "Frontend developer",
    avatar: "JW",
    rating: 5,
  },
];

const AVATAR_COLORS = [
  "from-violet-500 to-purple-600",
  "from-cyan-500 to-blue-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
  "from-fuchsia-500 to-violet-600",
];

export function Testimonials() {
  return (
    <section className="pt-8 pb-8 bg-[#080c18] scroll-mt-24">

  <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">

    {/* Header (reduced spacing) */}
    <div className="text-center max-w-xl mx-auto mb-8">

      <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">
        Social proof
      </span>

      <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
        What students{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          are saying
        </span>
      </h2>

      <p className="text-base text-slate-400">
        Real feedback from real users.
      </p>

    </div>

    {/* Grid (tight gap) */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      {TESTIMONIALS.map(({ quote, name, role, avatar, rating }, i) => (
        <Card key={name} hover className="flex flex-col h-full">

          {/* Stars */}
          <div className="flex gap-0.5 mb-3">
            {Array.from({ length: rating }).map((_, j) => (
              <span key={j} className="text-amber-400 text-sm">
                ★
              </span>
            ))}
          </div>

          {/* Quote */}
          <p className="text-sm text-slate-300 leading-relaxed mb-5 flex-1">
            “{quote}”
          </p>

          {/* User */}
          <div className="flex items-center gap-3 mt-auto">

            <div
              className={`h-9 w-9 rounded-full bg-gradient-to-br ${AVATAR_COLORS[i]} flex items-center justify-center text-xs font-black text-white`}
            >
              {avatar}
            </div>

            <div>
              <p className="text-sm font-semibold text-white">{name}</p>
              <p className="text-xs text-slate-500">{role}</p>
            </div>

          </div>

        </Card>
      ))}

    </div>

  </div>

</section>
  );
}