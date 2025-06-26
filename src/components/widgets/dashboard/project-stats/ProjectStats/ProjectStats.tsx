import ProjectStatCard from "../ProjectStatCard/ProjectStatCard";
import { PROJECT_STATS_DATA } from "../data/project-stats.data";
import cn from "clsx";

import styles from "./ProjectStats.module.scss";

interface IProps {
  className?: string;
}

export default function ProjectStats({ className }: IProps) {
  return (
    <div className={cn(className, styles.root)}>
      {PROJECT_STATS_DATA.map((statItem, i) => (
        <ProjectStatCard key={statItem.id} projectStat={statItem} />
      ))}
    </div>
  );
}
