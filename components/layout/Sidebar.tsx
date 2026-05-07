"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  PlusCircle,
  LogOut,
} from "lucide-react";

import { supabase } from "@/lib/supabase";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Jobs",
      href: "/admin/jobs",
      icon: BriefcaseBusiness,
    },
    {
      title: "Create Job",
      href: "/admin/jobs/create",
      icon: PlusCircle,
    },
    {
      title: "Applications",
      href: "/admin/applications",
      icon: FileText,
    },
  ];

  const handleLogout = async () => {
  await supabase.auth.signOut();
  router.push("/login");
};

  return (
    <aside className="w-72 min-h-screen bg-[#0F172A] text-white flex flex-col justify-between p-6 border-r border-white/10">

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div className="flex items-center gap-3 mb-10">

          <div className="w-11 h-11 rounded-xl bg-indigo-600 flex items-center justify-center text-lg font-bold shadow-lg">
            JP
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide">
              JobPortal
            </h1>

            <p className="text-xs text-gray-400">
              Admin Panel
            </p>
          </div>

        </div>

        {/* NAVIGATION */}
        <nav className="space-y-2">

          {menuItems.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                  
                  ${
                    active
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <Icon
                  size={20}
                  className={`transition ${
                    active
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                />

                <span className="font-medium">
                  {item.title}
                </span>
              </Link>
            );
          })}

        </nav>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 pt-5">

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 transition px-4 py-3 rounded-xl font-medium"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>
    </aside>
  );
}