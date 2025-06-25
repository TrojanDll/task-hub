import type { TTheme } from "@/types/theme.types";

export function getTheme(): TTheme {
  const currientTheme: TTheme | null = localStorage.getItem(
    "theme"
  ) as TTheme | null;

  return currientTheme ? currientTheme : "light";
}

export function setTheme(theme: TTheme) {
  localStorage.setItem("theme", theme);
}

export function toggleTheme() {
  const currientTheme: TTheme | null = localStorage.getItem(
    "theme"
  ) as TTheme | null;

  let newTheme: TTheme = "light";

  if (currientTheme === "light") {
    newTheme = "dark";
  } else {
    newTheme = "light";
  }

  setTheme(newTheme);
}
