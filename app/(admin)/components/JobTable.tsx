"use client";

import { useState } from "react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  category: string;
  type: string;
};

export default function JobTable() {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      category: "Technology",
      type: "Full-time",
    },
  ]);

  const deleteJob = (id: number) => {
    setJobs(jobs.filter((j) => j.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow">

      <div className="flex justify-between mb-4">
        <h2 className="font-semibold">All Jobs ({jobs.length})</h2>
      </div>

      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Title</th>
            <th className="p-3">Company</th>
            <th className="p-3">Category</th>
            <th className="p-3">Type</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="border-t">

              <td className="p-3">
                <p className="font-medium">{job.title}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
              </td>

              <td className="p-3">{job.company}</td>

              <td className="p-3">{job.category}</td>

              <td className="p-3">{job.type}</td>

              <td className="p-3">
                <button
                  onClick={() => deleteJob(job.id)}
                  className="border px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}