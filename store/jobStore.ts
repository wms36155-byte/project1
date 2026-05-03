import { create } from "zustand";

type Job = {
  id: string;
  title: string;
  description: string;
  salary: number;
  location: string;
  company_name: string;
};

type JobStore = {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
  addJob: (job: Job) => void;
};

export const useJobStore = create<JobStore>((set) => ({
  jobs: [],

  setJobs: (jobs) => set({ jobs }),

  addJob: (job) =>
    set((state) => ({
      jobs: [job, ...state.jobs],
    })),
}));