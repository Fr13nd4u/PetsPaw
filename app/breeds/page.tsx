"use client";
import React from "react";
import MasonryGallery from "../components/shared/masonry-gallery/MasonryGallery";
import BreedsOptions from "./BreedsOptions";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import BreedCard from "./BreedCard";
import PageNavigation from "../components/page-navigation/PageNavigation";
import Loading from "../components/shared/loading/Loading";

import styles from "./breeds.module.css";

const Breeds: React.FC = () => {
  const { gallery, loading, error } = useSelector(
    (state: RootState) => state.gallery
  );

  const Gallery = () => {
    if (loading || !gallery) {
      return <Loading />;
    } else if (error) {
      return <div>{error}</div>;
    } else if (gallery) {
      return (
        <MasonryGallery>
          {gallery.map((cat: any) => (
            <BreedCard key={cat.id} cat={cat} />
          ))}
        </MasonryGallery>
      );
    }
  };

  return (
    <>
      <PageNavigation />
      <div className={styles.page}>
        <BreedsOptions />
        <Gallery />
      </div>
    </>
  );
};

export default Breeds;
