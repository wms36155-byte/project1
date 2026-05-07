import { supabase } from "@/lib/supabase";
import { Job } from "@/types/job";

export const getJobs = async () => {
  return await supabase
    .from("jobs")
    .select("*")
    .order("created_at", { ascending: false });
};

export const createJob = async (job: Partial<Job>) => {
  return await supabase.from("jobs").insert([job]);
};

export const deleteJob = async (id: number) => {
  return await supabase.from("jobs").delete().eq("id", id);
};

export const getJobById = async (id: number) => {
  return await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)
    .single();
};

export const updateJob = async (id: number, job: any) => {
  return await supabase
    .from("jobs")
    .update(job)
    .eq("id", id);
};