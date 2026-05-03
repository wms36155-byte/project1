"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
            style={{ backgroundColor: "#4F46E5" }}
          >
            JP
          </div>

          <span className="text-2xl font-bold text-gray-800 tracking-tight">
            JobPortal
          </span>
        </Link>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-10 font-semibold text-lg">

          <Link
            href="/"
            className="text-gray-500 hover:text-[#4F46E5] transition"
          >
            Home
          </Link>

          <Link
            href="/jobs"
            className="text-gray-500 hover:text-[#4F46E5] transition"
          >
            Jobs
          </Link>

          {/* CTA BUTTON */}
          <Link
            href="/post-job"
            className="px-6 py-2 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition hover:opacity-90"
            style={{ backgroundColor: "#4F46E5" }}
          >
            Post a Job
          </Link>

        </nav>

      </div>
    </header>
  );
}