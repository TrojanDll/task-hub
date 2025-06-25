import type { PropsWithChildren } from "react";
import Sidebar from "@/components/widgets/layout/sidebar/Sidebar/Sidebar";

import styles from "./layout.module.scss";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.root}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
