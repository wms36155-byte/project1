"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useIsAdmin } from "@/lib/useIsAdmin";

function Navbar() {
  const { isAdmin, hydrated } = useIsAdmin();

  return (
    <nav className="sticky top-0 z-50 border-b border-violet-100 bg-white/80 px-8 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-700 to-fuchsia-600 text-sm font-bold text-white shadow-md">
            JP
          </div>

          <span className="text-xl font-extrabold tracking-tight text-gray-900">
            JobPortal
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-medium text-gray-600 transition-colors duration-300 hover:text-violet-700"
          >
            Home
          </Link>

          <Link
            href="/jobs"
            className="font-medium text-gray-600 transition-colors duration-300 hover:text-violet-700"
          >
            Jobs
          </Link>

          {hydrated && isAdmin ? (
            <Link href="/admin/create-job">
              <Button className="rounded-xl bg-violet-700 px-5 text-white shadow-sm transition-all duration-300 hover:bg-violet-800 hover:shadow-md">
                Post a Job
              </Button>
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;