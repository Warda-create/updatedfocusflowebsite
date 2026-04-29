import Link from "next/link";
import { Container } from "@/components/layout/Container";

const LINKS = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Resources: ["Docs", "Blog", "Community", "Support"],
  Legal: ["Privacy", "Terms", "Cookies"],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#080c18]">

      <Container className="py-12">

        {/* Center wrapper (IMPORTANT FIX) */}
        <div className="mx-auto max-w-5xl">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left justify-items-center md:justify-items-start">

            {/* Brand */}
            <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">

              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-black text-sm">
                  S
                </div>
                <span className="font-bold text-white text-lg">
                  Study<span className="text-violet-400">OS</span>
                </span>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                A focused productivity workspace for students and developers who want to do their best work.
              </p>

            </div>

            {/* Links */}
            {Object.entries(LINKS).map(([group, items]) => (
              <div key={group} className="flex flex-col items-center md:items-start">

                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                  {group}
                </p>

                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-slate-400 hover:text-white transition"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            ))}

          </div>

          {/* Bottom (centered fix) */}
          <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">

            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} StudyOS. All rights reserved.
            </p>

            <p className="text-xs text-slate-600">
              Built with Next.js · TypeScript · Tailwind CSS
            </p>

          </div>

        </div>

      </Container>

    </footer>
  );
}