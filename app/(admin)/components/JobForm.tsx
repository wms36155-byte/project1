"use client";

import { useState } from "react";

export default function JobForm() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    type: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Job created!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow space-y-4"
    >

      <input
        placeholder="Job title"
        className="w-full border p-2 rounded"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        placeholder="Company"
        className="w-full border p-2 rounded"
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />

      <input
        placeholder="Location"
        className="w-full border p-2 rounded"
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />

      <input
        placeholder="Category"
        className="w-full border p-2 rounded"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <select
        className="w-full border p-2 rounded"
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="">Select type</option>
        <option>Full-time</option>
        <option>Part-time</option>
      </select>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Create Job
      </button>
    </form>
  );
}