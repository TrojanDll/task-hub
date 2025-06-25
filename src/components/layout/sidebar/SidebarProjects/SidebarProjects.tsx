import React from "react";

import styles from "./SidebarProjects.module.scss";
import { PROJECTS } from "../data/projects.data";

export default function SidebarProjects() {
  return (
    <ul className={styles.root}>
      {PROJECTS.map((project, i) => (
        <li key={i} className={styles.projectItem}>
          <div
            className={styles.projectColor}
            style={{ backgroundColor: project.color }}
          ></div>

          <span className={styles.label}>{project.name}</span>
        </li>
      ))}
    </ul>
  );
}
