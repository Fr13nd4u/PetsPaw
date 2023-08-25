"use client";
import React from "react";
import Link from "next/link";

import styles from "./navigation.module.css";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

interface INavCard {
  href: string;
  title: string;
  background: string;
  img_src: StaticImageData;
  alt_src: string;
}

const NavCard: React.FC<INavCard> = ({
  href,
  title,
  background,
  img_src,
  alt_src,
}) => {
  const pathname = usePathname();

  const cardClassName =
    pathname === href ? `${styles.card} ${styles.active}` : styles.card;

  return (
    <Link href={href} className={cardClassName}>
      <div className={styles.card_img_wrap} style={{ background: background }}>
        <Image src={img_src} alt={alt_src} />
      </div>
      <p className={styles.card_btn}>{title}</p>
    </Link>
  );
};

export default NavCard;
