import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted: boolean;
  badge?: string;
}

const TIERS: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to build a serious study habit.",
    features: [
      "Pomodoro timer (unlimited sessions)",
      "Up to 50 tasks",
      "Basic notes editor",
      "7-day focus history",
      "Offline-first storage",
    ],
    cta: "Start for free",
    href: "/dashboard",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$7",
    period: "/ month",
    description: "For serious students who want the full picture.",
    features: [
      "Everything in Free",
      "Unlimited tasks & notes",
      "Full analytics history",
      "Custom timer presets",
      "Data export (JSON / CSV)",
      "Priority support",
    ],
    cta: "Start Pro trial",
    href: "/dashboard",
    highlighted: true,
    badge: "Most popular",
  },
  {
    name: "Team",
    price: "$19",
    period: "/ month",
    description: "Share your productivity system with your study group.",
    features: [
      "Everything in Pro",
      "Up to 5 team members",
      "Shared task boards",
      "Team analytics",
      "Admin controls",
    ],
    cta: "Contact us",
    href: "#",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#080c18] scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-6 pb-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-6">

          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-400 mb-2">
            Pricing
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
            Simple,{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              honest pricing
            </span>
          </h2>

          <p className="text-base text-slate-400">
            Start free — no credit card required. Upgrade when you need more.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {TIERS.map(
            ({
              name,
              price,
              period,
              description,
              features,
              cta,
              href,
              highlighted,
              badge,
            }) => (
              <Card
                key={name}
                glow={highlighted ? "violet" : "none"}
                className={`relative flex flex-col h-full ${
                  highlighted
                    ? "border-violet-500/40 ring-1 ring-violet-500/20"
                    : ""
                }`}
              >

                {badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {badge}
                    </span>
                  </div>
                )}

                {/* Title */}
                <div className="mb-4">

                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-1">
                    {name}
                  </p>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-black text-white">
                      {price}
                    </span>
                    <span className="text-slate-500 text-xs">{period}</span>
                  </div>

                  <p className="text-sm text-slate-400">
                    {description}
                  </p>

                </div>

                {/* Features */}
                <ul className="space-y-2 mb-4 flex-1">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <span className="text-emerald-400">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Link href={href}>
                  <Button
                    variant={highlighted ? "primary" : "secondary"}
                    size="md"
                    className="w-full"
                  >
                    {cta}
                  </Button>
                </Link>

              </Card>
            )
          )}

        </div>

      </div>
    </section>
  );
}