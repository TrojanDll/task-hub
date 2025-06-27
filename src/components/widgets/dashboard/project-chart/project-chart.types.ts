interface ITimeRange {
  label: string;
  value: "yearly" | "monthly";
}

interface IChartDataPoint {
  month: string;
  value: number;
}
