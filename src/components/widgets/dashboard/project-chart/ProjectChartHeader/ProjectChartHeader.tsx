import React, { useState } from "react";

import styles from "./ProjectChartHeader.module.scss";
import cn from "clsx";
import CustomSelect from "@/components/ui/custom-select/CustomSelect/CustomSelect";
import { timeRanges } from "../project-chart.data";
import type { ISelectOption } from "@/components/ui/custom-select/custom-select.types";

interface IProps {
  className?: string;
  selectValue: ISelectOption;
  setSelectValue: (value: ISelectOption) => void;
}

export default function ProjectChartHeader({
  className,
  selectValue,
  setSelectValue,
}: IProps) {
  return (
    <div className={cn(styles.root, className)}>
      <h2 className={styles.title}>Статистика проектов</h2>

      <CustomSelect
        options={timeRanges}
        value={selectValue}
        setValue={setSelectValue}
        className={styles.select}
      />
    </div>
  );
}
