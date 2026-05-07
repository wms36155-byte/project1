import JobTable from "@/components/admin/JobTable";

export default function AdminJobsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Jobs</h1>
      <JobTable />
    </div>
  );
}