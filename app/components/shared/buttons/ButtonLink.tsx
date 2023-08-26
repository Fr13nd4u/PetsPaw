"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./button.module.css";

interface IButton {
  children: React.ReactNode;
  href: string;
}

const ButtonLink: React.FC<IButton> = ({ children, href }) => {
  const pathname = usePathname();

  const linkClass =
    pathname === href ? `${styles.link} ${styles.link_active}` : styles.link;

  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
};

export default ButtonLink;
