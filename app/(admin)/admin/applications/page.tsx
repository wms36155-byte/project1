import ApplicationTable from "@/components/admin/ApplicationTable";

export default function ApplicationsPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Applications
          </h1>
          <p className="text-sm text-gray-500">
            Manage all job applications in one place
          </p>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white shadow-sm border rounded-xl p-4">
        <ApplicationTable />
      </div>
    </div>
  );
}