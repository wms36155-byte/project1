"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Registered successfully");
      clearInputs(); // 🔥 input clear
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f7fb]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[380px]">

        <h2 className="text-2xl font-bold text-center mb-6">
          Register
        </h2>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full mb-3 p-3 border rounded-lg"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-[#4f46e5] text-white py-3 rounded-lg hover:bg-[#4338ca]"
        >
          Register
        </button>

      </div>
    </div>
  );
}