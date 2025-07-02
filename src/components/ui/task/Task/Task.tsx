"use state";

import CustomTitle from "../../CustomTitle/CustomTitle";
import ImagesList from "../../ImagesList/ImagesList";
import ProgressBar from "../../ProgressBar/ProgressBar";
import Substrate from "../../Substrate/Substrate";
import Button from "../../button/Button/Button";
import styles from "./Task.module.scss";
import cn from "clsx";
import { differenceInDays } from "date-fns";
import { MessageCircleMore, Pencil } from "lucide-react";
import { Image as LucideImage } from "lucide-react";
import { Link as LucideLink } from "lucide-react";
import { useEffect, useState } from "react";

import { taskPercentage } from "@/utils/task-percentage";

import type { ITask } from "@/types/task.types";

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
            <task.icon
              size={20}
              color="var(--primary)"
            />
          </div>

          <div className={styles.topInfoText}>
            <CustomTitle
              tag="h3"
              className={styles.title}
            >
              {task.title}
            </CustomTitle>

            <div className={styles.duration}>
              Осталось дней: {differenceInDays(task.dueDate, new Date())}
            </div>
          </div>
        </div>

        <ImagesList imagesPaths={userProfileImages} />
      </div>

      <ProgressBar
        bgColor={task.color}
        progressPercentage={taskPercentage(task)}
      />

      <div className={styles.controlWrapper}>
        <div className={styles.stats}>
          <div className={styles.statsItem}>
            <MessageCircleMore
              size={16}
              className={styles.statsItemIcon}
            />
            <div className={styles.statsItemCount}>{task.comments.length}</div>
          </div>

          <div className={styles.statsItem}>
            <LucideImage
              size={16}
              className={styles.statsItemIcon}
            />
            <div className={styles.statsItemCount}>{task.comments.length}</div>
          </div>

          <div className={styles.statsItem}>
            <LucideLink
              size={16}
              className={styles.statsItemIcon}
            />
            <div className={styles.statsItemCount}>{task.comments.length}</div>
          </div>
        </div>

        <div className={styles.editWrapper}>
          <Button>+</Button>
          <Button type="outlined">
            <Pencil
              size={14}
              className={styles.editButtonIcon}
            />
          </Button>
        </div>
      </div>
    </Substrate>
  );
}
