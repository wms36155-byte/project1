"use client";

type App = {
  id: number;
  name: string;
  email: string;
  job: string;
};

export default function ApplicationTable() {
  const applications: App[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      job: "Frontend Developer",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow">

      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Job</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr key={app.id} className="border-t">
              <td className="p-3">{app.name}</td>
              <td className="p-3">{app.email}</td>
              <td className="p-3">{app.job}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}