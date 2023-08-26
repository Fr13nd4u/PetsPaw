import React from "react";
import Button from "../shared/buttons/Button";

import Image from "next/image";
import styles from "./voting-card.module.css";

interface ICard {
  image: any;
  onClick: () => void;
}

const VotingCard: React.FC<ICard> = ({ image, onClick }) => {
  return (
    <div className={styles.card}>
      <Image src={image.url} alt={image.id} width={420} height={330} />

      <div className={styles.card_info}>
        <Button type="secondary" onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M8.07107 2C3.61354 2 0 5.61354 0 10.0711C0 12.2116 0.850339 14.2646 2.36396 15.7782L14.2929 27.7071C14.6834 28.0976 15.3166 28.0976 15.7071 27.7071L27.636 15.7782C29.1497 14.2646 30 12.2116 30 10.0711C30 5.61354 26.3865 2 21.9289 2C19.7884 2 17.7354 2.85034 16.2218 4.36396L15 5.58579L13.7782 4.36396C12.2646 2.85034 10.2116 2 8.07107 2Z"
              fill="white"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default VotingCard;
