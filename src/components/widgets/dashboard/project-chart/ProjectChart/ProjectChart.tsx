"use client";

import { useMemo } from "react";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ProjectChartTooltip from "../ProjectChartTooltip/ProjectChartTooltip";
import { useTheme } from "next-themes";

interface IProps {
  data: IChartDataPoint[];
  className?: string;
}

export default function ProjectChart({ data, className }: IProps) {
  if (!data || data.length === 0) return null;

  const { theme } = useTheme();

  const maxData = useMemo(() => {
    let maxValue = 0;
    let maxPeriod = "";

    data.forEach((item) => {
      if (item.value > maxValue) {
        maxValue = item.value;
        maxPeriod = item.period;
      }
    });

    return { value: maxValue, period: maxPeriod };
  }, [data]);

  return (
    <ResponsiveContainer className={className} width="100%" height={260}>
      <AreaChart data={data} margin={{ top: 10, left: -30, bottom: 0 }}>
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#725bf2" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#725bf2" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid
          strokeDasharray="0"
          vertical={false}
          stroke={theme === "light" ? "#f3f4f6" : "#494949"}
        />

        <XAxis
          dataKey="period"
          axisLine={false}
          tickLine={false}
          tick={{
            fontSize: "0.75rem",
            fill: theme === "light" ? "#9ca3af" : "#c8c8c8",
          }}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{
            fontSize: "0.75rem",
            fill: theme === "light" ? "#9ca3af" : "#c8c8c8",
          }}
          // domain={[0, "dataMax + 10"]}
        />

        <Tooltip content={<ProjectChartTooltip />} cursor={false} />

        {maxData && (
          <ReferenceLine
            x={maxData.period}
            stroke="#6366f1"
            strokeDasharray="5 5"
            strokeWidth={1.5}
          />
        )}

        <Area
          type="bump"
          dataKey="value"
          stroke="#6366f1"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
