"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getJobs, deleteJob } from "@/services/jobs.service";
import { Job } from "@/types/job";

export default function JobTable() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  //  FETCH JOBS
  const fetchJobs = async () => {
    const { data, error } = await getJobs();

    if (!error && data) {
      setJobs(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  //  DELETE
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Delete this job?");
    if (!confirmDelete) return;

    await deleteJob(id);
    fetchJobs();
  };

  if (loading) {
    return <p className="text-gray-500">Loading jobs...</p>;
  }

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          All Jobs ({jobs.length})
        </h2>

        <Link
          href="/admin/jobs/create"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          + Create Job
        </Link>
      </div>

      {/* EMPTY STATE */}
      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs found</p>
      ) : (
        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Company</th>
              <th className="p-3">Location</th>
              <th className="p-3">Type</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job) => (
              <tr
                key={job.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3 font-medium">
                  {job.title}
                </td>

                <td className="p-3">{job.company}</td>

                <td className="p-3 text-gray-500">
                  {job.location}
                </td>

                <td className="p-3">{job.type}</td>

                <td className="p-3 flex justify-end gap-2">

                  {/* EDIT */}
                  <Link
                    href={`/admin/jobs/${job.id}`}
                    className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                  >
                    Edit
                  </Link>

                  {/* DELETE */}
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600"
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>

        </table>
      )}
    </div>
  );
}