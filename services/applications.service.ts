import { supabase } from "@/lib/supabase";

export const getApplications = async () => {
  return await supabase
    .from("applications")
    .select("*, jobs(title)")
    .order("created_at", { ascending: false });
};

export const createApplication = async (data: any) => {
  return await supabase.from("applications").insert([data]);
};

export const deleteApplication = async (id: number) => {
  return await supabase.from("applications").delete().eq("id", id);
};