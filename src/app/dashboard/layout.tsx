import styles from "./layout.module.scss";
import type { PropsWithChildren } from "react";
import "swiper/css";

import Sidebar from "@/components/widgets/layout/sidebar/Sidebar/Sidebar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.root}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
