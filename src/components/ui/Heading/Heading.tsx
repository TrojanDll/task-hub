import React, { type PropsWithChildren } from "react";

import styles from "./Heading.module.scss";

import cn from "clsx";

interface IProps {
  className?: string;
}

export default function Heading({
  children,
  className,
}: PropsWithChildren<IProps>) {
  return <h1 className={cn(styles.root, className)}>{children}</h1>;
}
