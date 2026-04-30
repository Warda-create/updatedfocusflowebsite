"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
];

const APP_LINKS = [
  { href: "/dashboard", label: "Dashboard", icon: "⬡" },
  { href: "/focus", label: "Focus", icon: "◎" },
  { href: "/tasks", label: "Tasks", icon: "◻" },
  { href: "/notes", label: "Notes", icon: "◈" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ FIX: proper app route detection
  const isApp =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/focus") ||
    pathname.startsWith("/tasks") ||
    pathname.startsWith("/notes");

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-800/60 bg-[#080c18]/70 backdrop-blur-md">

      <Container className="flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-black text-sm">
            S
          </div>
          <span className="font-bold text-white text-lg">
            Study<span className="text-violet-400">OS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="flex items-center gap-6 px-4 py-2 rounded-xl bg-slate-900/40 border border-slate-800">

            {isApp
              ? APP_LINKS.map(({ href, label, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition",
                      pathname === href
                        ? "bg-violet-600/20 text-violet-300 border border-violet-500/30"
                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                    )}
                  >
                    <span className="text-xs opacity-70">{icon}</span>
                    {label}
                  </Link>
                ))
              : NAV_LINKS.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition"
                  >
                    {label}
                  </a>
                ))}
          </div>
        </div>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center">
          {!isApp ? (
            <Link href="/dashboard">
              <Button variant="primary" size="md">
                Open App →
              </Button>
            </Link>
          ) : (
            <Link href="/">
              <Button variant="ghost" size="sm">
                ← Home
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </Container>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#080c18]/95 px-4 sm:px-6 py-6 flex flex-col gap-4">

          {/* HOME BUTTON (APP ONLY) */}
          {isApp && (
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-base font-medium text-violet-300 bg-violet-500/10 border border-violet-500/20"
            >
              ← Home
            </Link>
          )}

          {/* LINKS */}
          {(isApp ? APP_LINKS : NAV_LINKS).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
            >
              {"icon" in item && (
                <span className="text-sm opacity-70">{item.icon}</span>
              )}
              {item.label}
            </Link>
          ))}

          {/* CTA */}
          {!isApp && (
            <Link href="/dashboard" onClick={() => setMenuOpen(false)}>
              <Button className="w-full mt-3">
                Open App →
              </Button>
            </Link>
          )}

        </div>
      )}

    </header>
  );
}