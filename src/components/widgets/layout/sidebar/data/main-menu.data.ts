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
    label: "Панель задач",
    href: Pages.DASHBOARD,
  },
  {
    icon: MessageCircleMore,
    label: "Сообщения",
    href: Pages.MESSAGES,
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    label: "Аналитика",
    href: Pages.INSIGHT,
  },
  {
    icon: Users,
    label: "Команда",
    href: Pages.TEAM,
  },
  {
    icon: CalendarDays,
    label: "Расписание",
    href: Pages.SCHEDULE,
  },
  {
    icon: NotebookPen,
    label: "Отчёт",
    href: Pages.REPORT,
  },
  {
    icon: Settings,
    label: "Настройки",
    href: Pages.SETTINGS,
  },
];
