import type { LucideIcon } from "lucide-react";
import { type ZodType, z } from "zod";

import type { TTaskFormData } from "@/types/task.types";

export const TaskSchema = z.object({
  title: z.string().min(1, "Заголовок обязателен"),
  dueDate: z.date().nonoptional(),
  icon: z.custom<LucideIcon>((value) => typeof value === "function", {
    error: "Иконка должна быть LucideIcon",
  }),
});
