"use client";

import JobTable from "../components/JobTable";

export default function JobsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Jobs Management</h1>
      <p className="text-gray-500 mb-6">Manage all your jobs</p>

      <JobTable />
    </div>
  );
}