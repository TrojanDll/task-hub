"use client";

import styles from "./Dashboard.module.scss";

import Heading from "@/components/ui/Heading/Heading";
import SearchField from "@/components/ui/search-field/SearchField/SearchField";
import ThemeToggler from "@/components/ui/ThemeToggler/ThemeToggler";

export default function Dashboard() {
  return (
    <div className={styles.root}>
      <Heading>Панель задач</Heading>

      <div className={styles.right}>
        <SearchField onChange={() => {}} value="" />
        <ThemeToggler />
      </div>
    </div>
  );
}
