import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./breeds.module.css";

interface IBreedCard {
  cat: any;
}

const BreedCard: React.FC<IBreedCard> = ({ cat }) => {
  const { name, image, id } = cat;
  return (
    <Link href={`breeds/${id}`} className={styles.cat_card}>
      <Image
        src={image.url}
        alt={name}
        width={image.width}
        height={image.height}
      />

      <div className={styles.cat_card_info}>
        <p className={styles.card_btn}>{name}</p>
      </div>
    </Link>
  );
};

export default BreedCard;
