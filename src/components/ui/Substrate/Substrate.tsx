import React, { type PropsWithChildren } from "react";

import styles from "./Substrate.module.scss";
import cn from "clsx";

interface IProps extends React.HTMLProps<HTMLDivElement> {}

export default function Substrate({
  children,
  className,
}: PropsWithChildren<IProps>) {
  return <div className={cn(styles.root, className)}>{children}</div>;
}
