import { ETaskStatuses } from "@/types/task.types";

export enum EFilterTaskStatuses {
  ALL = "all",
  COMPLETED = ETaskStatuses.COMPLETED,
  IN_PROGRESS = ETaskStatuses.IN_PROGRESS,
  NOT_STARTED = ETaskStatuses.NOT_STARTED
}
