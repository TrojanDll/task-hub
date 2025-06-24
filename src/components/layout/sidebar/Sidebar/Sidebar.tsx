import React from "react";

import styles from "./Sidebar.module.scss";

import SidebarHeading from "../SidebarHeading/SidebarHeading";
import SidebarProfile from "../SidebarProfile/SidebarProfile";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import SidebarProjects from "../SidebarProjects/SidebarProjects";

export default function Sidebar() {
  return (
    <aside className={styles.root}>
      <SidebarHeading title="Account" className={styles.heading} />

      <SidebarProfile />

      <SidebarHeading title="Main menu" className={styles.heading} />

      <SidebarMenu />

      <SidebarHeading title="Projects" className={styles.heading} />

      <SidebarProjects />
    </aside>
  );
}
