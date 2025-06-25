"use client";

import { Search } from "lucide-react";

import styles from "./SearchField.module.scss";

interface IProps {
  placeholder?: string;
  onChange: (value: string) => void;
  value: string;
}

export default function SearchField({
  onChange,
  value,
  placeholder = "Найти что-нибудь... ",
}: IProps) {
  return (
    <div className={styles.root}>
      <Search size={20} className={styles.icon} />
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
      />
    </div>
  );
}
