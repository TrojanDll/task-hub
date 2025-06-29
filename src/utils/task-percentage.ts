import type { ITask } from "@/types/task.types";

export function taskPercentage(task: ITask): number {
  let percentage: number = 0;
  let totalSubTasks: number = 0;
  let completedSubTasks: number = 0;

  totalSubTasks = task.subTasks.length;

  task.subTasks.forEach((subTask) => {
    if (subTask.isCompleted) {
      completedSubTasks++;
    }
  });

  percentage = Math.floor((completedSubTasks / totalSubTasks) * 100);

  return percentage;
}
