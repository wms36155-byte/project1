"use client";

import { useState } from "react";
import Link from "next/link";

export default function JobForm() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    category: "Technology",
    type: "Full-time",
    description: "",
    requirements: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Job created!");
  };

  return (
    <div className="max-w-5xl mx-auto">

      {/* BACK */}
      <Link
        href="/admin"
        className="inline-block mb-4 border px-4 py-2 rounded-lg hover:bg-gray-100"
      >
        ← Back to Jobs
      </Link>

      {/* HEADER */}
      <h1 className="text-3xl font-bold">Create New Job</h1>
      <p className="text-gray-500 mb-6">
        Fill in the form below to create a new job posting
      </p>

      {/* CARD */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow"
      >
        <h2 className="text-xl font-semibold mb-6">
          Add New Job
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* TITLE */}
          <div>
            <label className="block mb-1 font-medium">
              Job Title *
            </label>
            <input
              name="title"
              placeholder="e.g., Senior Frontend Engineer"
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              required
            />
          </div>

          {/* COMPANY */}
          <div>
            <label className="block mb-1 font-medium">
              Company *
            </label>
            <input
              name="company"
              placeholder="e.g., TechCorp"
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              required
            />
          </div>

          {/* LOCATION */}
          <div>
            <label className="block mb-1 font-medium">
              Location *
            </label>
            <input
              name="location"
              placeholder="e.g., San Francisco, CA"
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              required
            />
          </div>

          {/* SALARY */}
          <div>
            <label className="block mb-1 font-medium">
              Salary (Optional)
            </label>
            <input
              name="salary"
              placeholder="e.g., $100,000 - $150,000"
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            />
          </div>

          {/* CATEGORY */}
          <div>
            <label className="block mb-1 font-medium">
              Category
            </label>
            <select
              name="category"
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            >
              <option>Technology</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>Sales</option>
            </select>
          </div>

          {/* TYPE */}
          <div>
            <label className="block mb-1 font-medium">
              Job Type
            </label>
            <select
              name="type"
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Remote</option>
            </select>
          </div>

        </div>

        {/* DESCRIPTION */}
        <div className="mt-6">
          <label className="block mb-1 font-medium">
            Description *
          </label>
          <textarea
            name="description"
            placeholder="Job description and responsibilities..."
            onChange={handleChange}
            className="w-full border p-3 rounded-lg h-32"
            required
          />
        </div>

        {/* REQUIREMENTS */}
        <div className="mt-6">
          <label className="block mb-1 font-medium">
            Requirements (comma-separated)
          </label>
          <input
            name="requirements"
            placeholder="e.g., React, TypeScript, 5+ years experience"
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Add Job
          </button>

          <button
            type="reset"
            className="border px-6 py-2 rounded-lg"
          >
            Reset
          </button>
        </div>

      </form>
    </div>
  );
}