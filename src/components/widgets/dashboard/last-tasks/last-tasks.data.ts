import { USERS } from "../users.data";
import { BookCheck, FolderKanban, Plane } from "lucide-react";

import type { ITask } from "@/types/task.types";

export const TASKS: ITask[] = [
  {
    id: "1",
    title: "Travel App User Flow",
    icon: Plane,
    dueDate: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
    comments: ["Комментарий", "Еще один комментарий", "И еще один комментарий"],
    resources: ["", "", "", "", "", ""],
    links: ["https://example.com", "https://example.org"],
    users: [USERS[0], USERS[1]],
    subTasks: [
      {
        id: "1",
        title: "Какая то подтаска",
        isCompleted: true
      },
      {
        id: "2",
        title: "Какая то еще подтаска",
        isCompleted: false
      },
      {
        id: "3",
        title: "Задача",
        isCompleted: false
      }
    ]
  },
  {
    id: "2",
    title: "Какой то крутой проект",
    icon: FolderKanban,
    dueDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
    comments: ["Комментарий", "Еще один комментарий", "И еще один комментарий"],
    resources: ["", "", "", "", "", ""],
    links: ["https://example.com", "https://example.org"],
    users: [USERS[0], USERS[1], USERS[2]],
    color: "#1ac0aa",
    subTasks: [
      {
        id: "1",
        title: "Какая то важная подтаска",
        isCompleted: true
      },
      {
        id: "2",
        title: "Какая то еще подтаска",
        isCompleted: true
      },
      {
        id: "3",
        title: "Задача 1",
        isCompleted: true
      },
      {
        id: "4",
        title: "Задача 2",
        isCompleted: true
      },
      {
        id: "5",
        title: "Задача 3",
        isCompleted: false
      }
    ]
  },
  {
    id: "3",
    title: "Большая задача",
    icon: BookCheck,
    dueDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
    comments: ["Комментарий", "Еще один комментарий", "И еще один комментарий"],
    resources: ["", "", ""],
    links: ["https://example.com", "https://example.org"],
    users: [USERS[0], USERS[1]],
    color: "#f8c022",
    subTasks: [
      {
        id: "1",
        title: "Какая то важная подтаска",
        isCompleted: true
      },
      {
        id: "2",
        title: "Какая то еще подтаска",
        isCompleted: true
      },
      {
        id: "3",
        title: "Задача",
        isCompleted: true
      },
      {
        id: "4",
        title: "Задача",
        isCompleted: true
      }
    ]
  },
  {
    id: "4",
    title: "Большая задача",
    icon: BookCheck,
    dueDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
    comments: ["Комментарий", "Еще один комментарий", "И еще один комментарий"],
    resources: ["", "", ""],
    links: ["https://example.com", "https://example.org"],
    users: [USERS[0], USERS[1]],
    color: "#f8c022",
    subTasks: [
      {
        id: "1",
        title: "Какая то важная подтаска",
        isCompleted: true
      },
      {
        id: "2",
        title: "Какая то еще подтаска",
        isCompleted: true
      },
      {
        id: "3",
        title: "Задача",
        isCompleted: true
      },
      {
        id: "4",
        title: "Задача",
        isCompleted: true
      }
    ]
  },
  {
    id: "5",
    title: "Большая задача",
    icon: BookCheck,
    dueDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
    comments: ["Комментарий", "Еще один комментарий", "И еще один комментарий"],
    resources: ["", "", ""],
    links: ["https://example.com", "https://example.org"],
    users: [USERS[0], USERS[1]],
    color: "#f8c022",
    subTasks: [
      {
        id: "1",
        title: "Какая то важная подтаска",
        isCompleted: true
      },
      {
        id: "2",
        title: "Какая то еще подтаска",
        isCompleted: true
      },
      {
        id: "3",
        title: "Задача",
        isCompleted: true
      },
      {
        id: "4",
        title: "Задача",
        isCompleted: true
      }
    ]
  }
];
