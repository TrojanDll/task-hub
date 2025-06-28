import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

import styles from "./ImagesList.module.scss";
import cn from "clsx";

interface IProps {
  className?: string;
  maxItems?: number;
  imagesPaths: string[];
  size?: number;
}

export default function ImagesList({
  imagesPaths = [],
  className,
  maxItems,
  size = 25,
}: IProps) {
  return (
    <div className={cn(styles.usersImages, className)}>
      {imagesPaths.map((imagePath, i) => (
        <div key={uuidv4()}>
          <div className={styles.profileContainer}>
            <Image width={size} height={size} alt="" src={imagePath} />
          </div>
        </div>
      ))}
    </div>
  );
}
