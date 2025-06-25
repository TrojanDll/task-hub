import React from "react";

import styles from "./SidebarProfile.module.scss";
import { PROFILE } from "../data/profile.data";
import { ChevronDown } from "lucide-react";

export default function SidebarProfile() {
  return (
    <button className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.profileImage}></div>

        <div>
          <div className={styles.name}>{PROFILE.name}</div>
          <div className={styles.email}>{PROFILE.email}</div>
        </div>
      </div>

      <ChevronDown size={16} />
    </button>
  );
}
