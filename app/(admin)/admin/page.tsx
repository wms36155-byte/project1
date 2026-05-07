"use client";

import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  FileText,
} from "lucide-react";

import { getJobs } from "@/services/jobs.service";
import { getApplications } from "@/services/applications.service";

export default function DashboardPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [applications, setApplications] =
    useState<any[]>([]);

  // 🔥 FETCH DATA
  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    const { data: jobsData } = await getJobs();

    const { data: appsData } =
      await getApplications();

    if (jobsData) setJobs(jobsData);

    if (appsData) setApplications(appsData);
  };

  return (
    <div>

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back 👋
        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">

        {/* JOBS */}
        <div className="bg-white p-6 rounded-2xl shadow">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-500">
                Total Jobs
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {jobs.length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center">
              <BriefcaseBusiness
                className="text-indigo-600"
                size={28}
              />
            </div>

          </div>
        </div>

        {/* APPLICATIONS */}
        <div className="bg-white p-6 rounded-2xl shadow">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-500">
                Applications
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {applications.length}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
              <FileText
                className="text-green-600"
                size={28}
              />
            </div>

          </div>
        </div>

      </div>

      {/* RECENT JOBS */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8">

        <h2 className="text-xl font-semibold mb-5">
          Recent Jobs
        </h2>

        <div className="space-y-4">

          {jobs.slice(0, 5).map((job) => (
            <div
              key={job.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div>
                <h3 className="font-semibold">
                  {job.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {job.company}
                </p>
              </div>

              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                {job.type}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* RECENT APPLICATIONS */}
      <div className="bg-white rounded-2xl shadow p-6">

        <h2 className="text-xl font-semibold mb-5">
          Recent Applications
        </h2>

        <div className="space-y-4">

          {applications.slice(0, 5).map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div>
                <h3 className="font-semibold">
                  {app.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {app.email}
                </p>
              </div>

              <span className="text-sm text-gray-400">
                {new Date(
                  app.created_at
                ).toLocaleDateString()}
              </span>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}