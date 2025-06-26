import React from "react";

import styles from "./ThemeToggler.module.scss";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={styles.root}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Sun className={styles.icon} />
      ) : (
        <Moon className={styles.icon} />
      )}
    </button>
  );
}
