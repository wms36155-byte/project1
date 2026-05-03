"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  useAuth();

  const user = useAuthStore((s) => s.user);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // user load bo‘lishini kutish uchun
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading dashboard...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-red-500">User topilmadi</p>
        <button
          onClick={() => router.push("/login")}
          className="ml-3 px-4 py-2 bg-black text-white rounded-lg"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* HEADER */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Welcome back 👋
        </p>

        <p className="mt-1 font-medium">
          {user.email}
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">

        <div className="bg-white p-5 rounded-2xl shadow-md">
          <h2 className="font-bold">Jobs</h2>
          <p className="text-gray-500">0 active jobs</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-md">
          <h2 className="font-bold">Applications</h2>
          <p className="text-gray-500">0 applications</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-md">
          <h2 className="font-bold">Profile</h2>
          <p className="text-gray-500">Complete your profile</p>
        </div>

      </div>

    </div>
  );
}