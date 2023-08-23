"use client";
import { ThemeProvider } from "next-themes";
import "./styles/variables.css";

export function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
