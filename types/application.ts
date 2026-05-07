export type Application = {
  id: number;
  name: string;
  email: string;
  job_id: number;
  created_at: string;

  jobs?: {
    title: string;
  };
};