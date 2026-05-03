"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/store/authStore";

export const useAuth = () => {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        router.push("/login"); // 🔐 login bo‘lmasa qaytaradi
        return;
      }

      setUser({
        id: data.user.id,
        email: data.user.email!,
      });
    };

    checkUser();
  }, []);
};