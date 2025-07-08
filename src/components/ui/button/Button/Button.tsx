import styles from "./Button.module.scss";
import cn from "clsx";
import type { PropsWithChildren } from "react";

interface IProps {
  className?: string;
  variant?: "default" | "rounded";
  type?: "solid" | "outlined";
  roundButtonSize?: number;
  onClick?: () => void;
}

export default function Button({
  className,
  variant = "rounded",
  children,
  roundButtonSize = 30,
  type = "solid",
  onClick
}: PropsWithChildren<IProps>) {
  return (
    <button
      onClick={onClick}
      style={{ width: roundButtonSize, height: roundButtonSize }}
      className={cn(styles.root, className, styles[variant], styles[type])}
    >
      {children}
    </button>
  );
}
