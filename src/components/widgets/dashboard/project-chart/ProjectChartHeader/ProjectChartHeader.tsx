import React, { useState } from "react";

import styles from "./ProjectChartHeader.module.scss";
import cn from "clsx";
import CustomSelect from "@/components/ui/custom-select/CustomSelect/CustomSelect";
import { timeRanges } from "../project-chart.data";

interface IProps {
  className?: string;
}

export default function ProjectChartHeader({ className }: IProps) {
  const [selectValue, setSelectValue] = useState<string>(timeRanges[0].value);

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
