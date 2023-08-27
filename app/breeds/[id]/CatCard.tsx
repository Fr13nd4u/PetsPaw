"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CatCarousel from "./CatCarousel";
import Loading from "../../components/shared/loading/Loading";

import styles from "./id-page.module.css";

const CatCard: React.FC = () => {
  const { breed, loading, error } = useSelector(
    (state: RootState) => state.breed
  );

  if (loading || !breed) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (breed) {
    const firstBreed = breed[0];

    const { name, description, temperament, origin, weight, life_span } =
      firstBreed.breeds[0];

    return (
      <>
        <CatCarousel breeds={breed} />

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
