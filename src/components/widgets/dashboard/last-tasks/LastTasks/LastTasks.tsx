"use client";

import { LastTasksFilters } from "../LastTasksFilters/LastTasksFilters";
import { TASKS } from "../last-tasks.data";
import styles from "./LastTasks.module.scss";
import cn from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Swiper, type SwiperClass, SwiperSlide } from "swiper/react";

import CustomTitle from "@/components/ui/CustomTitle/CustomTitle";
import Task from "@/components/ui/task/Task/Task";

import type { ITask } from "@/types/task.types";

interface IProps {
  className?: string;
}

export default function LastTasks({ className }: IProps) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [filteredTasks, setFilteredTasks] = useState<ITask[]>(TASKS);

  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.heading}>
        <div className={styles.left}>
          <CustomTitle
            tag="h2"
            className={styles.title}
          >
            Последние задачи{" "}
            <span className={styles.tasksCount}>({TASKS.length})</span>
          </CustomTitle>

          <div className={styles.swiperButtonsGroup}>
            <button
              className={styles.swiperButton}
              onClick={() => swiper?.slidePrev()}
            >
              <ChevronLeft
                size={20}
                className={styles.swiperButtonIconLeft}
              />
            </button>

            <button
              className={styles.swiperButton}
              onClick={() => swiper?.slideNext()}
            >
              <ChevronRight
                size={20}
                className={styles.swiperButtonIconRight}
              />
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <LastTasksFilters
            tasks={TASKS}
            setFilteredTasks={setFilteredTasks}
          />
        </div>
      </div>

      <div className={styles.sliderWrapper}>
        <Swiper
          spaceBetween={16}
          slidesPerView={3}
          onSwiper={setSwiper}
        >
          {filteredTasks.length ? (
            filteredTasks.slice(0, 10).map((task) => (
              <SwiperSlide
                key={task.id}
                className={styles.slide}
              >
                <Task
                  task={task}
                  className={styles.task}
                />
              </SwiperSlide>
            ))
          ) : (
            <div>Нет задач</div>
          )}
        </Swiper>
      </div>
    </div>
  );
}
