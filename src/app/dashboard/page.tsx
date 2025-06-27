import type { Metadata } from "next";
import React from "react";
import Dashboard from "../../components/widgets/dashboard/Dashboard/Dashboard";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div className={styles.root}>
      <Dashboard />
      <div className={styles.chat}>CHAT</div>
    </div>
  );
}
