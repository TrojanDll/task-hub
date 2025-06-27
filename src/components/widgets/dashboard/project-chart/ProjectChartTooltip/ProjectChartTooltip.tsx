import styles from "./ProjectChartTooltip.module.scss";

interface IProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
}

export default function ProjectChartTooltip({ active, payload }: IProps) {
  if (!active || !payload || payload.length === 0) return null;

  return <div className={styles.root}>{payload[0].value} Проектов</div>;
}
