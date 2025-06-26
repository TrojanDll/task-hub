import type { IProjectStat } from "../project-stats.types";

export const PROJECT_STATS_DATA: IProjectStat[] = [
  {
    id: 1,
    number: 92,
    bgColor: "var(--lavender-300)",
    label: "Активные проекты",
    icon: "/img/icons/project-stats/active-projects.svg",
  },
  {
    id: 2,
    number: 35,
    bgColor: "var(--yellow)",
    label: "Текущие проекты",
    icon: "/img/icons/project-stats/ongoing-projects.svg",
  },
  {
    id: 3,
    // minutes
    number: 1149,
    bgColor: "var(--pink)",
    label: "Рабочее время",
    icon: "/img/icons/project-stats/working-hours.svg",
  },
];
