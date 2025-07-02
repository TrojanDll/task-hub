"use client";

import LastTasks from "../last-tasks/LastTasks/LastTasks";
import ProjectStatisticsChart from "../project-chart/ProjectStatisticsChart/ProjectStatisticsChart";
import ProjectStats from "../project-stats/ProjectStats/ProjectStats";
import styles from "./Dashboard.module.scss";

import Heading from "@/components/ui/Heading/Heading";
import ThemeToggler from "@/components/ui/ThemeToggler/ThemeToggler";
import SearchField from "@/components/ui/search-field/SearchField/SearchField";

export default function Dashboard() {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.header}>
          <Heading>Панель задач</Heading>

          <div className={styles.right}>
            <SearchField
              onChange={() => {}}
              value=""
            />
            <ThemeToggler />
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.statsWrapper}>
            <ProjectStats className={styles.projectStats} />
            <ProjectStatisticsChart />
          </div>

          <LastTasks className={styles.lastTasks} />
        </div>
      </div>

      {/* <div className={styles.chat}>CHAT</div> */}
    </div>
  );
}
