import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-16 md:py-20 relative scroll-mt-20 my-12 md:my-16">

  {/* background glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/10 to-cyan-600/20 blur-3xl" />

  <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">

    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
      Ready to Boost Your Productivity?
    </h2>

    <p className="text-slate-300 text-base sm:text-lg mb-6">
      Join thousands of users who have transformed their workflow with FocusFlow.
    </p>

    <Link href="/dashboard">
      <Button
        size="lg"
        variant="primary"
      >
        Start Free Today
      </Button>
    </Link>

  </div>

</section>
  );
}