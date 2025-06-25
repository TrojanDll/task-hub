import {
  CalendarDays,
  ChartNoAxesColumn,
  ChartNoAxesColumnIncreasing,
  LayoutGrid,
  MessageCircleMore,
  NotebookPen,
  Settings,
  Users,
} from "lucide-react";
import type { IMenuItem } from "../../menu/menu.types";
import { Pages } from "@/config/pages";

export const MAIN_MENU: IMenuItem[] = [
  {
    icon: LayoutGrid,
    label: "Dashboard",
    href: Pages.DASHBOARD,
  },
  {
    icon: MessageCircleMore,
    label: "Messages",
    href: Pages.MESSAGES,
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    label: "Insight",
    href: Pages.INSIGHT,
  },
  {
    icon: Users,
    label: "Team",
    href: Pages.TEAM,
  },
  {
    icon: CalendarDays,
    label: "Schedule",
    href: Pages.SCHEDULE,
  },
  {
    icon: NotebookPen,
    label: "Report",
    href: Pages.REPORT,
  },
  {
    icon: Settings,
    label: "Settings",
    href: Pages.SETTINGS,
  },
];
