import type { ITask } from "@/types/task.types";
import styles from "./Task.module.scss";
import cn from "clsx";

interface IProps {
  task: ITask;
}

export default function Task({ task }: IProps) {
  return <div>Task</div>;
}
