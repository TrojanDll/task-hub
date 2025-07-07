"use client";

import { EFilterTaskStatuses } from "../last-tasks.types";
import styles from "./LastTasksFilters.module.scss";
import cn from "clsx";
import { useEffect, useState } from "react";

import CustomSelect from "@/components/ui/custom-select/CustomSelect/CustomSelect";
import type { ISelectOption } from "@/components/ui/custom-select/custom-select.types";

import type { ITask } from "@/types/task.types";

const TaskStatusesSelectOptions: ISelectOption[] = [
  {
    label: "Все",
    value: EFilterTaskStatuses.ALL
  },
  {
    label: "Завершённые",
    value: EFilterTaskStatuses.COMPLETED
  },
  {
    label: "В процессе",
    value: EFilterTaskStatuses.IN_PROGRESS
  },
  {
    label: "Не начатые",
    value: EFilterTaskStatuses.NOT_STARTED
  }
];

interface IProps {
  className?: string;
  tasks: ITask[];
  setFilteredTasks: (value: ITask[]) => void;
}

export function LastTasksFilters({
  tasks,
  setFilteredTasks,
  className
}: IProps) {
  const [taskStatusFilter, setTaskStatusFilter] = useState<ISelectOption>(
    TaskStatusesSelectOptions[0]
  );

  useEffect(() => {
    switch (taskStatusFilter.value) {
      case EFilterTaskStatuses.ALL:
        setFilteredTasks(tasks);
        break;
      case EFilterTaskStatuses.COMPLETED:
        setFilteredTasks(
          tasks.filter((task) => {
            // Если подзадач нет, считаем, что условие не выполнено
            if (task.subTasks.length === 0) return false;

            // Проверяем, что ВСЕ подзадачи завершены (isCompleted: true)
            return task.subTasks.every((subTask) => subTask.isCompleted);
          })
        );
        break;
      case EFilterTaskStatuses.IN_PROGRESS:
        setFilteredTasks(
          tasks.filter((task) => {
            // Если подзадач нет, задача не подходит
            if (task.subTasks.length === 0) return false;

            // Проверяем, что хотя бы одна подзадача выполнена
            const hasCompletedSubtask = task.subTasks.some(
              (subTask) => subTask.isCompleted
            );

            // Проверяем, что не все подзадачи выполнены
            const notAllSubtasksCompleted = !task.subTasks.every(
              (subTask) => subTask.isCompleted
            );

            // Задача подходит, если выполнены оба условия
            return hasCompletedSubtask && notAllSubtasksCompleted;
          })
        );
        break;
      case EFilterTaskStatuses.NOT_STARTED:
        setFilteredTasks(
          tasks.filter((task) => {
            if (task.subTasks.length === 0) return false;

            return task.subTasks.every((subTask) => !subTask.isCompleted);
          })
        );
        break;
    }
  }, [taskStatusFilter]);

  return (
    <div className={cn(styles.root, className)}>
      <CustomSelect
        setValue={setTaskStatusFilter}
        value={taskStatusFilter}
        options={TaskStatusesSelectOptions}
        side="bottom"
        align="end"
      />
    </div>
  );
}
