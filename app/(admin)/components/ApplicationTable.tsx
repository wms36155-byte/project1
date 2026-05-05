"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Application = {
  id: number;
  name: string;
  email: string;
  job: string;
  created_at: string;
};

export default function ApplicationTable() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [selected, setSelected] = useState<Application | null>(null);

  // 🔗 FETCH DATA
  useEffect(() => {
    fetchApps();
  }, []);

  const fetchApps = async () => {
    const { data } = await supabase
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setApplications(data);
  };

  // ❌ DELETE
  const handleDelete = async (id: number) => {
    await supabase.from("applications").delete().eq("id", id);
    fetchApps();
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow">

      <h2 className="text-xl font-semibold mb-4">
        Applications ({applications.length})
      </h2>

      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Job</th>
            <th className="p-3">Applied Date</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr key={app.id} className="border-t">

              <td className="p-3 font-medium">{app.name}</td>
              <td className="p-3 text-gray-600">{app.email}</td>
              <td className="p-3">{app.job}</td>

              <td className="p-3 text-sm text-gray-500">
                {new Date(app.created_at).toLocaleString()}
              </td>

              <td className="p-3">
                <div className="flex gap-3">

                  {/* VIEW BUTTON */}
                  <button
                    onClick={() => setSelected(app)}
                    className="px-3 py-1 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                  >
                    View
                  </button>

                  {/* DELETE BUTTON */}
                  <button
                    onClick={() => handleDelete(app.id)}
                    className="px-3 py-1 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
                  >
                    Delete
                  </button>

                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

          <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg relative">

            {/* CLOSE */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 border rounded px-2"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-1">
              Application Details
            </h2>

            <p className="text-gray-500 mb-4">
              View the full application details
            </p>

            <div className="space-y-3 text-sm">

              <div>
                <p className="text-gray-400 uppercase">Name</p>
                <p className="font-medium">{selected.name}</p>
              </div>

              <div>
                <p className="text-gray-400 uppercase">Email</p>
                <p>{selected.email}</p>
              </div>

              <div>
                <p className="text-gray-400 uppercase">Job Position</p>
                <p>{selected.job}</p>
              </div>

              <div>
                <p className="text-gray-400 uppercase">Applied Date</p>
                <p>
                  {new Date(selected.created_at).toLocaleString()}
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}