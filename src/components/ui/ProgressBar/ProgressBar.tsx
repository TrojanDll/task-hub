import { CircleCheck } from "lucide-react";
import styles from "./ProgressBar.module.scss";
import cn from "clsx";
import { generateRepeatingLinearGradient } from "@/utils/generate-repeating-linear-gradient";

interface IProps {
  className?: string;
  progressPercentage: number;
  bgColor?: string;
}

export default function ProgressBar({
  progressPercentage,
  className,
  bgColor = "var(--primary)",
}: IProps) {
  return (
    <div className={cn(styles.root, className)}>
      <div
        style={{
          background: generateRepeatingLinearGradient(bgColor),
          backgroundColor: bgColor,
          width: `${progressPercentage}%`,
        }}
        className={styles.bar}
      >
        {progressPercentage >= 15 && progressPercentage < 100 ? (
          <div className={styles.percentage}>{progressPercentage}%</div>
        ) : progressPercentage === 100 ? (
          <div className={styles.percentage}>
            <CircleCheck size={16} />
            Выполнено
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
