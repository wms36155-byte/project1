"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { addApplication } from "@/lib/applications-storage";

interface Props {
  jobId: string;
  jobTitle: string;
  company: string;
  onClose: () => void;
}

export default function ApplyModal({
  jobId,
  jobTitle,
  company,
  onClose,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const handleSubmit = () => {
    if (!name.trim() || !email.trim()) {
      alert("Please fill in all fields");
      return;
    }

    setSubmitting(true);

    try {
      addApplication({
        jobId,
        jobTitle,
        company,
        applicantName: name.trim(),
        applicantEmail: email.trim(),
      });

      alert("Application submitted successfully!");
      onClose();
    } catch (err) {
      console.error("Failed to save application", err);

      alert("Something went wrong. Please try again.");

      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="apply-modal-title"
        className="fixed left-1/2 top-1/2 z-[101] w-[500px] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-violet-100 bg-white/95 p-8 shadow-2xl backdrop-blur-xl"
      >
        {/* Header */}
        <div className="mb-5 flex items-start justify-between">
          <div>
            <h2
              id="apply-modal-title"
              className="text-3xl font-extrabold text-gray-900"
            >
              Apply Now
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Submit your application for this opportunity.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-xl p-2 text-gray-400 transition-all duration-300 hover:bg-violet-100 hover:text-violet-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Job Info */}
        <div className="mb-6 rounded-2xl border border-violet-100 bg-violet-50 p-4">
          <p className="text-sm text-gray-500">Applying for</p>

          <h3 className="mt-1 text-lg font-bold text-gray-900">
            {jobTitle}
          </h3>

          <p className="text-sm font-medium text-violet-700">
            {company}
          </p>
        </div>

        {/* Name */}
        <div className="mb-5">
          <label
            htmlFor="apply-name"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Full Name
          </label>

          <input
            id="apply-name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-2xl border border-violet-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
          />
        </div>

        {/* Email */}
        <div className="mb-7">
          <label
            htmlFor="apply-email"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Email Address
          </label>

          <input
            id="apply-email"
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-violet-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
          />
        </div>

        {/* Submit */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full rounded-2xl bg-gradient-to-r from-violet-700 to-fuchsia-600 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </>
  );
}