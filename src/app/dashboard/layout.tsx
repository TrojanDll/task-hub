import styles from "./layout.module.scss";
import type { PropsWithChildren, ReactNode } from "react";
import "swiper/css";

import Sidebar from "@/components/widgets/layout/sidebar/Sidebar/Sidebar";

interface IProps {
  children: ReactNode;
  modals: ReactNode;
}

export default function DashboardLayout({ children, modals }: IProps) {
  return (
    <div className={styles.root}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
      {modals}
    </div>
  );
}
