import ApplicationTable from "@/components/admin/ApplicationTable";

export default function ApplicationsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Applications
      </h1>

      <ApplicationTable />
    </div>
  );
}