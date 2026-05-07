"use client";

import { useEffect, useState } from "react";
import { getApplications, deleteApplication } from "@/services/applications.service";

export default function ApplicationTable() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH
  const fetchApplications = async () => {
    const { data, error } = await getApplications();

    if (!error && data) {
      setApplications(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // ❌ DELETE
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm(
      "Delete this application?"
    );

    if (!confirmDelete) return;

    await deleteApplication(id);

    fetchApplications();
  };

  if (loading) {
    return <p>Loading applications...</p>;
  }

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Applications ({applications.length})
        </h2>
      </div>

      {/* EMPTY */}
      {applications.length === 0 ? (
        <p className="text-gray-500">
          No applications found
        </p>
      ) : (
        <table className="w-full text-sm">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Job</th>
              <th className="p-3 text-left">Applied</th>
              <th className="p-3 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr
                key={app.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-3 font-medium">
                  {app.name}
                </td>

                <td className="p-3 text-gray-500">
                  {app.email}
                </td>

                <td className="p-3">
                  {app.jobs?.title || "Unknown"}
                </td>

                <td className="p-3 text-gray-400">
                  {new Date(
                    app.created_at
                  ).toLocaleDateString()}
                </td>

                <td className="p-3 flex justify-end gap-2">

                  <button
                    onClick={() =>
                      handleDelete(app.id)
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
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