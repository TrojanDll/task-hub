"use client";

import { TASKS } from "../last-tasks.data";
import styles from "./LastTasks.module.scss";
import cn from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Swiper, type SwiperClass, SwiperSlide } from "swiper/react";

import CustomTitle from "@/components/ui/CustomTitle/CustomTitle";
import Task from "@/components/ui/task/Task/Task";

interface IProps {
  className?: string;
}

export default function LastTasks({ className }: IProps) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.heading}>
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
            <ChevronLeft />
          </button>

          <button
            className={styles.swiperButton}
            onClick={() => swiper?.slideNext()}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className={styles.sliderWrapper}>
        <Swiper
          spaceBetween={16}
          slidesPerView={3}
          onSwiper={setSwiper}
        >
          {TASKS.length ? (
            TASKS.slice(0, 10).map((task) => (
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
