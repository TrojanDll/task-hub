"use client";

import React, { useState } from "react";
import ProjectChartHeader from "../ProjectChartHeader/ProjectChartHeader";
import Substrate from "@/components/ui/Substrate/Substrate";
import { monthlyData, timeRanges, yearlyData } from "../project-chart.data";
import ProjectChart from "../ProjectChart/ProjectChart";
import type { ISelectOption } from "@/components/ui/custom-select/custom-select.types";

import styles from "./ProjectStatisticsChart.module.scss";

export default function ProjectStatisticsChart() {
  const [selectedRange, setSelectedRange] = useState<ITimeRange>(timeRanges[0]);

  const chartData = selectedRange.value === "yearly" ? yearlyData : monthlyData;

  return (
    <Substrate>
      <ProjectChartHeader
        selectValue={selectedRange}
        setSelectValue={(value: ISelectOption) =>
          setSelectedRange({
            label: value.label,
            value: value.value === "monthly" ? "monthly" : "yearly",
          })
        }
      />
      <ProjectChart className={styles.chart} data={chartData} />
    </Substrate>
  );
}
