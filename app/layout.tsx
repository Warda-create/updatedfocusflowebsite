import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StudyOS — Your Productivity Workspace",
  description:
    "A modern SaaS productivity workspace for students and developers. Focus, plan, and build better habits.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body className="min-h-screen bg-[#080c18] text-white overflow-x-hidden">

        <Navbar />

        <main className="pt-20">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            {children}
          </div>
        </main>

        <Footer />

      </body>
    </html>
  );
}