"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Image from "next/image";

import styles from "./id-page.module.css";

const CatCard: React.FC = () => {
  const { breed, loading, error } = useSelector(
    (state: RootState) => state.breed
  );

  if (loading || !breed) {
    return <h4>Loading</h4>;
  } else if (error) {
    return <div>{error}</div>;
  } else if (breed) {
    const firstBreed = breed[0];

    const { name, description, temperament, origin, weight, life_span } =
      firstBreed.breeds[0];

    return (
      <>
        <Image
          src={firstBreed.url}
          alt={name}
          width={firstBreed.width}
          height={firstBreed.height}
          className={styles.cat_img}
        />

        <div className={styles.cat_info}>
          <div className={styles.cat_title}>
            <h2>{name}</h2>
            <h4>{description}</h4>
          </div>

          <div className={styles.cat_info_box}>
            <p>
              <span>Temperament:</span> <br />
              {temperament}
            </p>
          </div>
          <div className={styles.cat_info_box}>
            <p>
              <span>Origin:</span> {origin}
            </p>
            <p>
              <span>Weight:</span> {weight.metric}
            </p>
            <p>
              <span>Life span:</span> {life_span}
            </p>
          </div>
        </div>
      </>
    );
  }
};

export default CatCard;
