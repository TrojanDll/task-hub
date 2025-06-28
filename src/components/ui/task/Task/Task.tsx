"use state";

import type { ITask } from "@/types/task.types";
import styles from "./Task.module.scss";
import cn from "clsx";
import CustomTitle from "../../CustomTitle/CustomTitle";
import { differenceInDays } from "date-fns";
import Image from "next/image";
import Substrate from "../../Substrate/Substrate";
import ImagesList from "../../ImagesList/ImagesList";
import { useEffect, useState } from "react";

interface IProps {
  task: ITask;
  className?: string;
}

export default function Task({ task, className }: IProps) {
  const [userProfileImages, setUserProfileImages] = useState<string[]>([]);
  useEffect(() => {
    let newUserProfileImages: string[] = [];
    task.users.forEach((user) => {
      newUserProfileImages.push(user.avatarPath ? user.avatarPath : "");
    });

    setUserProfileImages(newUserProfileImages);
  }, []);

  return (
    <Substrate className={cn(styles.root, className)}>
      <div className={styles.topInfo}>
        <div className={styles.left}>
          <div className={styles.iconWrapper}>
            <task.icon size={20} color="var(--primary)" />
          </div>

          <div className={styles.topInfoText}>
            <CustomTitle tag="h3" className={styles.title}>
              {task.title}
            </CustomTitle>

            <div className={styles.duration}>
              Осталось дней: {differenceInDays(task.dueDate, new Date())}
            </div>
          </div>
        </div>

        <ImagesList imagesPaths={userProfileImages} />
      </div>
    </Substrate>
  );
}
