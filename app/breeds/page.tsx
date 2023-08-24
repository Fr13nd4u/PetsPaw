"use client";
import React from "react";
import MasonryGallery from "../components/shared/masonry-gallery/MasonryGallery";
import BreedsOptions from "./BreedsOptions";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

import styles from "./breeds.module.css";
import BreedCard from "./BreedCard";

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

const Breeds: React.FC = () => {
  const { breeds, loading, error } = useSelector(
    (state: RootState) => state.breeds
  );

  const Gallery = () => {
    if (loading) {
      return <h4>Loading</h4>;
    } else if (error) {
      return <div>{error}</div>;
    } else {
      return (
        <MasonryGallery>
          {breeds.map((cat: any) => (
            <BreedCard key={cat.id} cat={cat} />
          ))}
        </MasonryGallery>
      );
    }
  };

  return (
    <div className={styles.page}>
      <BreedsOptions breeds={breeds} />
      <Gallery />
    </div>
  );
};

export default Breeds;
