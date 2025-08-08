"use client";

import styles from "./EditTaskModal.module.scss";
import { TaskSchema } from "@/zod-schemes/task.zod";
import { zodResolver } from "@hookform/resolvers/zod";
import cn from "clsx";
import { useForm } from "react-hook-form";

import Modal from "@/components/ui/Modal/Modal";

import type { TTaskFormData } from "@/types/task.types";

interface IProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function EditTaskModal({ isOpen, setIsOpen }: IProps) {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<TTaskFormData>({
    resolver: zodResolver(TaskSchema),
  });

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    ></Modal>
  );
}
