import { useEffect, useState } from "react";
import { getJobs } from "@/services/jobs.service";
import { Job } from "@/types/job";

export const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await getJobs();
      setJobs(data || []);
    };

    fetch();
  }, []);

  return { jobs };
};