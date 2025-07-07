import type { IProfile } from "./profile.types";
import type { LucideIcon } from "lucide-react";

export interface ISubTask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface ITask extends Omit<ISubTask, "isCompleted"> {
  icon: LucideIcon;
  dueDate: Date;
  users: IProfile[];
  subTasks: ISubTask[];
  comments: string[];
  resources: string[];
  links: string[];
  color?: string;
}

export enum ETaskStatuses {
  NOT_STARTED = "not-started",
  IN_PROGRESS = "in-progress",
  COMPLETED = "completed"
}
