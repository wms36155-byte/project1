import JobForm from "@/components/admin/JobForm"

export default function CreateJobPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Create Job
      </h1>

      <JobForm />
    </div>
  );
}