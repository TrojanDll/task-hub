import type { ITask } from "@/types/task.types";

export const sortTasksByDate = (
  tasks: ITask[],
  order: "asc" | "desc" = "asc"
): ITask[] => {
  return [...tasks].sort((a, b) => {
    const dateA = a.dueDate.getTime();
    const dateB = b.dueDate.getTime();

    return order === "asc" ? dateA - dateB : dateB - dateA;
  });
};
