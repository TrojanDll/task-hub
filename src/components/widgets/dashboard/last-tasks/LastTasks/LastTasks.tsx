import CustomTitle from "@/components/ui/CustomTitle/CustomTitle";
import { TASKS } from "../last-tasks.data";

import styles from "./LastTasks.module.scss";
import cn from "clsx";
import Task from "@/components/ui/task/Task/Task";

interface IProps {
  className?: string;
}

export default function LastTasks({ className }: IProps) {
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.heading}>
        <CustomTitle tag="h2" className={styles.title}>
          Последние задачи{" "}
          <span className={styles.tasksCount}>({TASKS.length})</span>
        </CustomTitle>
      </div>

      <div className={styles.tasks}>
        {TASKS.length ? (
          TASKS.map((task) => (
            <Task key={task.id} task={task} className={styles.task} />
          ))
        ) : (
          <div>Нет задач</div>
        )}
      </div>
    </div>
  );
}
