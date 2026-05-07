import { Job } from "@/types/job";

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="border p-4 rounded-xl shadow-sm">
      <h3 className="font-semibold">{job.title}</h3>
      <p className="text-gray-500 text-sm">
        {job.company} • {job.location}
      </p>
    </div>
  );
}