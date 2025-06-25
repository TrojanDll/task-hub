import type { Metadata } from "next";
import React from "react";
import Dashboard from "../../components/widgets/dashboard/Dashboard/Dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
