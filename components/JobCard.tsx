import Link from "next/link";
import type { Job } from "@/app/types";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, DollarSign } from "lucide-react";

interface Props {
  job: Job;
}

function JobCard({ job }: Props) {
  const initials =
    job.company.length >= 2
      ? job.company.slice(0, 2).toUpperCase()
      : job.company.toUpperCase() || "?";

  return (
    <div className="group rounded-2xl border border-violet-100 bg-white/90 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Top */}
      <div className="mb-5 flex items-start justify-between">
        {/* Logo */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-700 to-fuchsia-600 text-sm font-bold text-white shadow-md">
          {initials}
        </div>

        {/* Job Type */}
        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
          {job.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-1 line-clamp-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-violet-700">
        {job.title}
      </h3>

      {/* Company */}
      <p className="mb-5 text-sm font-medium text-gray-500">
        {job.company}
      </p>

      {/* Info */}
      <div className="mb-6 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <MapPin size={16} className="text-violet-600" />
          <span>{job.location}</span>
        </div>

        {job.salary ? (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <DollarSign size={16} className="text-violet-600" />
            <span>{job.salary}</span>
          </div>
        ) : null}

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Briefcase size={16} className="text-violet-600" />
          <span>{job.type}</span>
        </div>
      </div>

      {/* Button */}
      <Link href={`/jobs/${job.id}`}>
        <Button className="h-11 w-full rounded-xl bg-violet-700 text-white transition-all duration-300 hover:bg-violet-800">
          View Details
        </Button>
      </Link>
    </div>
  );
}

export default JobCard;