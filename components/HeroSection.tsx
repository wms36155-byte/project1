"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsAdmin } from "@/lib/useIsAdmin";

function HeroSection() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { isAdmin, hydrated } = useIsAdmin();

  const handleSearch = () => {
    const q = search.trim();

    if (q) {
      router.push(`/jobs?search=${encodeURIComponent(q)}`);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-violet-50 via-purple-50 to-fuchsia-50 py-32 text-center">
      
      {/* Background Blur */}
      <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-violet-300/30 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-72 w-72 rounded-full bg-fuchsia-300/30 blur-3xl" />

      <div className="relative z-10">
        {/* Badge */}
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
          Career Opportunities
        </p>

        {/* Heading */}
        <h1 className="mb-6 text-6xl font-extrabold leading-tight text-gray-900">
          Find Your Perfect{" "}
          <span className="bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent">
            Career
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600">
          Discover career opportunities from top companies. Search, filter, and
          apply to roles that match your skills and aspirations.
        </p>

        {/* Search */}
        <div className="mx-auto mb-10 flex max-w-2xl items-center justify-center gap-3 px-4">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search by job title, company, or keyword..."
            className="h-12 border-violet-200 bg-white/80 backdrop-blur focus-visible:ring-violet-500"
          />

          <Button
            onClick={handleSearch}
            className="h-12 bg-violet-700 px-8 text-white transition-all duration-300 hover:bg-violet-800"
          >
            Search
          </Button>
        </div>

        {/* Buttons */}
        <div className="mb-16 flex items-center justify-center gap-4">
          <Link href="/jobs">
            <Button className="h-12 bg-violet-700 px-8 text-white transition-all duration-300 hover:bg-violet-800">
              Browse All Jobs
            </Button>
          </Link>

          {hydrated && isAdmin ? (
            <Link href="/admin/create-job">
              <Button
                variant="outline"
                className="h-12 border-violet-300 px-8 text-violet-700 transition-all duration-300 hover:bg-violet-100"
              >
                Post a Job
              </Button>
            </Link>
          ) : null}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-12">
          <div>
            <p className="text-4xl font-extrabold text-violet-700">500+</p>
            <p className="mt-1 text-sm text-gray-500">Active Jobs</p>
          </div>

          <div>
            <p className="text-4xl font-extrabold text-violet-700">200+</p>
            <p className="mt-1 text-sm text-gray-500">Companies</p>
          </div>

          <div>
            <p className="text-4xl font-extrabold text-violet-700">50K+</p>
            <p className="mt-1 text-sm text-gray-500">Placements</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;