import type { PropsWithChildren } from "react";
import Sidebar from "@/components/layout/sidebar/Sidebar/Sidebar";

import styles from "./layout.module.scss";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.root}>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
