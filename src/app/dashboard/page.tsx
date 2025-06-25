import type { Metadata } from "next";
import React from "react";
import Dashboard from "./Dashboard";

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
