"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getJobs } from "@/services/jobs.service";
import { Job } from "@/types/job";

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filtered, setFiltered] = useState<Job[]>([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");

  // 🔥 FETCH JOBS
  useEffect(() => {
    const fetchJobs = async () => {
      const { data } = await getJobs();

      if (data) {
        setJobs(data);
        setFiltered(data);
      }
    };

    fetchJobs();
  }, []);

  // 🔥 FILTER
  useEffect(() => {
    let result = jobs;

    // SEARCH
    if (search) {
      result = result.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // CATEGORY
    if (category !== "All") {
      result = result.filter(
        (job) => job.category === category
      );
    }

    // TYPE
    if (type !== "All") {
      result = result.filter(
        (job) => job.type === type
      );
    }

    setFiltered(result);
  }, [search, category, type, jobs]);

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Find Your Next Job
        </h1>

        <p className="text-gray-500 mt-2">
          Browse available opportunities
        </p>
      </div>

      {/* FILTERS */}
      <div className="bg-white p-4 rounded-2xl shadow mb-8 grid md:grid-cols-3 gap-4">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-xl"
        />

        {/* CATEGORY */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-3 rounded-xl"
        >
          <option>All</option>
          <option>Technology</option>
          <option>Design</option>
          <option>Marketing</option>
        </select>

        {/* TYPE */}
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-3 rounded-xl"
        >
          <option>All</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Remote</option>
        </select>

      </div>

      {/* JOBS */}
      <div className="grid md:grid-cols-2 gap-6">

        {filtered.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start">

              <div>
                <h2 className="text-xl font-semibold">
                  {job.title}
                </h2>

                <p className="text-gray-500 mt-1">
                  {job.company} • {job.location}
                </p>
              </div>

              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                {job.type}
              </span>

            </div>

            <p className="text-gray-600 mt-4 line-clamp-2">
              {job.description}
            </p>

            <div className="mt-6 flex justify-between items-center">

              <span className="text-sm text-gray-400">
                {job.category}
              </span>

              <Link
                href={`/jobs/${job.id}`}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
              >
                View Job
              </Link>

            </div>
          </div>
        ))}

      </div>

      {/* EMPTY */}
      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No jobs found
        </div>
      )}

    </div>
  );
}