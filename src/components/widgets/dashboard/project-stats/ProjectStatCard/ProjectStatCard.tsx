import type { IProjectStat } from "../project-stats.types";
import styles from "./ProjectStatCard.module.scss";
import Image from "next/image";

import { formatMinutes } from "@/utils/format-minutes";

interface IProps {
  projectStat: IProjectStat;
}

export default function ProjectStatCard({ projectStat }: IProps) {
  return (
    <div
      className={styles.root}
      style={{ backgroundColor: projectStat.bgColor }}
    >
      <div className={styles.text}>
        <div className={styles.heading}>
          {projectStat.id === 3
            ? formatMinutes(projectStat.number)
            : projectStat.number}
        </div>
        <div className={styles.label}>{projectStat.label}</div>
      </div>

      <Image
        alt=""
        src={projectStat.icon}
        width={60}
        height={60}
      />
    </div>
  );
}
