import type { PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import cn from "clsx";

interface IProps {
  className?: string;
  variant?: "default" | "rounded";
  type?: "solid" | "outlined";
  roundButtonSize?: number;
}

export default function Button({
  className,
  variant = "rounded",
  children,
  roundButtonSize = 30,
  type = "solid",
}: PropsWithChildren<IProps>) {
  return (
    <button
      style={{ width: roundButtonSize, height: roundButtonSize }}
      className={cn(styles.root, className, styles[variant], styles[type])}
    >
      {children}
    </button>
  );
}
