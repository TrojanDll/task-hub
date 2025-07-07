"use client";

import { EFilterTaskStatuses } from "../last-tasks.types";
import styles from "./LastTasksFilters.module.scss";
import { useState } from "react";

import CustomSelect from "@/components/ui/custom-select/CustomSelect/CustomSelect";
import type { ISelectOption } from "@/components/ui/custom-select/custom-select.types";

interface IProps {
  className?: string;
}

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

export function LastTasksFilters({}: IProps) {
  const [taskStatus, setTaskStatus] = useState<ISelectOption>(
    TaskStatusesSelectOptions[0]
  );

  return (
    <div className={styles.root}>
      <CustomSelect
        setValue={setTaskStatus}
        value={taskStatus}
        options={TaskStatusesSelectOptions}
      />
    </div>
  );
}
