"use client";

import styles from "./Dashboard.module.scss";

import Heading from "@/components/ui/Heading/Heading";
import SearchField from "@/components/ui/search-field/SearchField/SearchField";

export default function Dashboard() {
  return (
    <div className={styles.root}>
      <Heading>Dashboard</Heading>
      <SearchField onChange={() => {}} value="" />
    </div>
  );
}
