import React from "react";

import styles from "./Sidebar.module.scss";

import SidebarHeading from "../SidebarHeading/SidebarHeading";
import SidebarProfile from "../SidebarProfile/SidebarProfile";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import SidebarProjects from "../SidebarProjects/SidebarProjects";

export default function Sidebar() {
  return (
    <aside className={styles.root}>
      <SidebarHeading title="Аккаунт" className={styles.heading} />

      <SidebarProfile />

      <SidebarHeading title="Главное меню" className={styles.heading} />

      <SidebarMenu />

      <SidebarHeading title="Проекты" className={styles.heading} />

      <SidebarProjects />
    </aside>
  );
}
