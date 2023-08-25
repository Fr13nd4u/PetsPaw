import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./breeds.module.css";

interface IBreedCard {
  cat: any;
}

const BreedCard: React.FC<IBreedCard> = ({ cat }) => {
  const { url, width, height } = cat;
  return (
    <Link href={`breeds/${cat?.breeds[0]?.id}`} className={styles.cat_card}>
      <Image
        src={url}
        alt={cat?.breeds[0]?.name}
        width={width}
        height={height}
      />

      {cat.breeds[0]?.name && (
        <div className={styles.cat_card_info}>
          <p className={styles.card_btn}>{cat?.breeds[0]?.name}</p>
        </div>
      )}
    </Link>
  );
};

export default BreedCard;
