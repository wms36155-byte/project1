"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createJob } from "@/services/jobs.service";

export default function JobForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    category: "Technology",
    type: "Full-time",
    description: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await createJob(form);

    setLoading(false);

    if (error) {
      alert("Error creating job");
      return;
    }

    router.push("/admin/jobs");
  };

  return (
    <div className="bg-white rounded-2xl shadow p-8">

      {/* TITLE */}
      <h1 className="text-2xl font-bold mb-1">
        Add New Job
      </h1>

      <p className="text-gray-500 mb-6">
        Fill in the form to create a job posting
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* JOB TITLE */}
          <div>
            <label className="text-sm font-medium">
              Job Title *
            </label>
            <input
              name="title"
              onChange={handleChange}
              placeholder="e.g. Senior Frontend Engineer"
              className="w-full mt-1 border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>

          {/* COMPANY */}
          <div>
            <label className="text-sm font-medium">
              Company *
            </label>
            <input
              name="company"
              onChange={handleChange}
              placeholder="e.g. TechCorp"
              className="w-full mt-1 border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>

          {/* LOCATION */}
          <div>
            <label className="text-sm font-medium">
              Location *
            </label>
            <input
              name="location"
              onChange={handleChange}
              placeholder="e.g. San Francisco, CA"
              className="w-full mt-1 border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>

          {/* SALARY */}
          <div>
            <label className="text-sm font-medium">
              Salary (Optional)
            </label>
            <input
              name="salary"
              onChange={handleChange}
              placeholder="$100,000 - $150,000"
              className="w-full mt-1 border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* CATEGORY */}
          <div>
            <label className="text-sm font-medium">
              Category
            </label>
            <select
              name="category"
              onChange={handleChange}
              className="w-full mt-1 border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option>Technology</option>
              <option>Design</option>
              <option>Marketing</option>
            </select>
          </div>

          {/* TYPE */}
          <div>
            <label className="text-sm font-medium">
              Job Type
            </label>
            <select
              name="type"
              onChange={handleChange}
              className="w-full mt-1 border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Remote</option>
            </select>
          </div>

        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="text-sm font-medium">
            Description *
          </label>
          <textarea
            name="description"
            onChange={handleChange}
            placeholder="Job description and responsibilities..."
            className="w-full mt-1 border p-3 rounded-lg h-32 focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4">

          <button
            disabled={loading}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            {loading ? "Creating..." : "Add Job"}
          </button>

          <button
            type="reset"
            className="border px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            Reset
          </button>

        </div>

      </form>
    </div>
  );
}