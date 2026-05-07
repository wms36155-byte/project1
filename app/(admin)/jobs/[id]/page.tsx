"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getJobById, updateJob } from "@/services/jobs.service";

export default function EditJobPage() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    category: "",
    type: "",
    description: "",
  });

  // 🔥 FETCH JOB
  useEffect(() => {
    const fetchJob = async () => {
      const { data } = await getJobById(Number(id));

      if (data) {
        setForm(data);
      }

      setLoading(false);
    };

    if (id) fetchJob();
  }, [id]);

  // 🔥 HANDLE CHANGE
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 UPDATE
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await updateJob(Number(id), form);

    alert("Updated!");
    router.push("/admin/jobs");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold mb-4">
        Edit Job
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-4"
      >
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="salary"
          value={form.salary}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option>Technology</option>
          <option>Design</option>
          <option>Marketing</option>
        </select>

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Remote</option>
        </select>

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button className="bg-indigo-600 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}