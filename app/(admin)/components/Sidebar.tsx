"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `block px-4 py-2 rounded-lg ${
      pathname === path
        ? "bg-white text-black"
        : "hover:bg-gray-800"
    }`;

  return (
    <aside className="w-64 bg-black text-white p-5 flex flex-col justify-between">

      <div>
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-lg font-bold">
            JP
          </div>
          <h1 className="font-semibold">JobPortal</h1>
        </div>

        <nav className="space-y-3">
          <Link href="/admin" className={linkClass("/admin")}>
            📄 Jobs
          </Link>

          <Link href="/admin/create" className={linkClass("/admin/create")}>
            ➕ Create Job
          </Link>

          <Link href="/admin/applications" className={linkClass("/admin/applications")}>
            📩 Applications
          </Link>
        </nav>
      </div>

      <button className="bg-red-500 py-2 rounded-lg">
        Logout
      </button>
    </aside>
  );
}