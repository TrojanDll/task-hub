"use client";

import React, { useState } from "react";

import styles from "./SidebarMenu.module.scss";

import { MAIN_MENU } from "../data/main-menu.data";
import Link from "next/link";
import cn from "clsx";

export default function SidebarMenu() {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  return (
    <nav className={styles.root}>
      <ul>
        {MAIN_MENU.map((menuItem, i) => (
          <li className={styles.menuItem} key={i}>
            <Link
              className={cn(
                styles.menuItemLink,
                activeItemIndex === i && styles.active
              )}
              href={menuItem.href}
            >
              <menuItem.icon size={20} className={styles.icon} />
              <div className={styles.menuItemLabel}>{menuItem.label}</div>

              {menuItem.label === "Сообщения" && <span>4</span>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
