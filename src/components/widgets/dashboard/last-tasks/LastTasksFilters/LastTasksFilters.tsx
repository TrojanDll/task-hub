"use client";

import { EFilterTaskStatuses } from "../last-tasks.types";
import styles from "./LastTasksFilters.module.scss";
import cn from "clsx";
import { CalendarArrowDown, CalendarArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button/Button/Button";
import CustomSelect from "@/components/ui/custom-select/CustomSelect/CustomSelect";
import type { ISelectOption } from "@/components/ui/custom-select/custom-select.types";

import { sortTasksByDate } from "@/utils/sort-tasks-by-date";

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
  const [sortType, setSortType] = useState<"asc" | "desc">("asc");

  function handleToggleSortType() {
    setSortType((prevType) => (prevType === "asc" ? "desc" : "asc"));
  }

  useEffect(() => {
    async function filtration() {
      let processedTasks: ITask[] = [];
      switch (taskStatusFilter.value) {
        case EFilterTaskStatuses.ALL:
          processedTasks = tasks;
          break;
        case EFilterTaskStatuses.COMPLETED:
          processedTasks = await tasks.filter((task) => {
            // Если подзадач нет, считаем, что условие не выполнено
            if (task.subTasks.length === 0) return false;

            // Проверяем, что ВСЕ подзадачи завершены (isCompleted: true)
            return task.subTasks.every((subTask) => subTask.isCompleted);
          });
          break;
        case EFilterTaskStatuses.IN_PROGRESS:
          processedTasks = await tasks.filter((task) => {
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
          });
          break;
        case EFilterTaskStatuses.NOT_STARTED:
          processedTasks = await tasks.filter((task) => {
            if (task.subTasks.length === 0) return false;

            return task.subTasks.every((subTask) => !subTask.isCompleted);
          });
          break;
      }

      processedTasks = await sortTasksByDate(processedTasks, sortType);
      setFilteredTasks(processedTasks);
    }

    filtration();
  }, [taskStatusFilter, sortType]);

  return (
    <div className={cn(styles.root, className)}>
      <CustomSelect
        setValue={setTaskStatusFilter}
        value={taskStatusFilter}
        options={TaskStatusesSelectOptions}
        side="bottom"
        align="end"
      />

      <Button
        onClick={handleToggleSortType}
        className={styles.sortButton}
      >
        {sortType === "asc" ? (
          <CalendarArrowUp
            className={styles.sortButtonIcon}
            size={18}
          />
        ) : (
          <CalendarArrowDown
            className={styles.sortButtonIcon}
            size={18}
          />
        )}
      </Button>
    </div>
  );
}
