import type { PropsWithChildren } from "react";
import styles from "./CustomTitle.module.scss";
import cn from "clsx";

interface IProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export default function CustomTitle({
  tag = "h1",
  className,
  children,
}: PropsWithChildren<IProps>) {
  const Tag = tag;

  return (
    <Tag className={cn(styles.root, className, styles[tag])}>{children}</Tag>
  );
}
