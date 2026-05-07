"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function PostJobPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/auth/login"); // login bo'lmasa redirect
      } else {
        setLoading(false);
      }
    };

    checkUser();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Post a Job</h1>
      {/* form shu yerda */}
    </div>
  );
}