"use client";
import React from "react";
import MasonryGallery from "../components/shared/masonry-gallery/MasonryGallery";
import BreedsOptions from "./BreedsOptions";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import styles from "./breeds.module.css";
import BreedCard from "./BreedCard";

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
