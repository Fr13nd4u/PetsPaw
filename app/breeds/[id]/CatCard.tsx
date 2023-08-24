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

  console.log("breed: ", breed);

  if (loading) {
    return <h4>Loading</h4>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <>
        {breed && (
          <Image
            src={"/" + breed.reference_image_id}
            alt={breed.name}
            width={640}
            height={360}
          />
        )}

        <div className={styles.cat_info}>
          <div className={styles.cat_title}>
            <h2>{breed?.name}</h2>
            <h4>{breed?.description}</h4>
          </div>

          <div className={styles.cat_info_box}>
            <p>
              <span>Temperament:</span> <br />
              {breed?.temperament}
            </p>
          </div>
          <div className={styles.cat_info_box}>
            <p>
              <span>Origin:</span> {breed?.origin}
            </p>
            <p>
              <span>Weight:</span> {breed?.weight?.metric}
            </p>
            <p>
              <span>Life span:</span> {breed?.life_span}
            </p>
          </div>
        </div>
      </>
    );
  }
};

export default CatCard;
