"use client";

import styles from "./Dashboard.module.scss";

import Heading from "@/components/ui/Heading/Heading";
import SearchField from "@/components/ui/search-field/SearchField/SearchField";
import ThemeToggler from "@/components/ui/ThemeToggler/ThemeToggler";
import ProjectStats from "../project-stats/ProjectStats/ProjectStats";

export default function Dashboard() {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.header}>
          <Heading>Панель задач</Heading>

          <div className={styles.right}>
            <SearchField onChange={() => {}} value="" />
            <ThemeToggler />
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.statsWrapper}>
            <ProjectStats className={styles.projectStats} />

            <div>chart</div>
          </div>
        </div>
      </div>

      <div className={styles.chat}>CHAT</div>
    </div>
  );
}
