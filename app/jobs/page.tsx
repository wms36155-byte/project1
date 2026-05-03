"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useJobStore } from "@/store/jobStore";

type Job = {
  id: string;
  title: string;
  description: string;
  salary: number;
  location: string;
  company_name: string;
};

export default function JobsPage() {
  const jobs = useJobStore((s) => s.jobs);
  const setJobs = useJobStore((s) => s.setJobs);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.log(error.message);
      } else {
        setJobs(data as Job[]);
      }

      setLoading(false);
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading jobs...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-6">
        Available Jobs
      </h1>

      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h2 className="text-xl font-bold">
                {job.title}
              </h2>

              <p className="text-gray-500 mt-1">
                {job.company_name}
              </p>

              <p className="mt-2 text-sm text-gray-600">
                {job.location}
              </p>

              <p className="mt-3 font-medium">
                💰 {job.salary} $
              </p>

              <p className="mt-3 text-sm text-gray-500 line-clamp-2">
                {job.description}
              </p>

              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:opacity-90">
                Apply
              </button>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}