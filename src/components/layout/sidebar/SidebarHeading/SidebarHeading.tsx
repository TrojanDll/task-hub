import React from "react";
import cn from "clsx";

import styles from "./SidebarHeading.module.scss";

interface IProps {
  title: string;
  className?: string;
}

export default function SidebarHeading({ title, className }: IProps) {
  return <div className={cn(styles.root, className)}>{title}</div>;
}
