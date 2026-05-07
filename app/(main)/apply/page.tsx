"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { createApplication } from "@/services/applications.service";

export default function ApplyPage() {
  const params = useSearchParams();
  const router = useRouter();

  const job_id = params.get("job_id");

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await createApplication({
      ...form,
      job_id: Number(job_id),
    });

    setLoading(false);

    if (error) {
      alert("Error applying");
      return;
    }

    alert("Applied successfully!");
    router.push("/jobs");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-4">
        Apply for Job
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-4"
      >
        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="email"
          placeholder="Your Email"
          type="email"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <button
          disabled={loading}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Submitting..." : "Apply"}
        </button>
      </form>
    </div>
  );
}