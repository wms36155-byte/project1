"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  const handleLogin = async () => {
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) return alert(error.message);

    if (data.user) {
      setUser({
        id: data.user.id,
        email: data.user.email ?? "",
      });

      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FB]">

      {/* CARD */}
      <div className="w-[400px] bg-white rounded-2xl shadow-md p-8 border border-gray-100">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center text-[#111827]">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Login to your account
        </p>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-5 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
        />

        {/* BUTTON */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-[#4F46E5] text-white py-3 rounded-lg hover:bg-[#4338CA] transition"
        >
          {loading ? "Loading..." : "Login"}
        </button>

        {/* FOOTER */}
        <p className="text-center text-xs text-gray-400 mt-5">
          Powered by Supabase
        </p>

      </div>
    </div>
  );
}