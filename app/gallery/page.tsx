"use client";
import React from "react";
import Breadcrumbs from "../components/breadcrumbs";
import MasonryGallery from "../components/shared/masonry-gallery/MasonryGallery";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import CatCard from "./CatCard";
import GalleryForm from "./GalleryForm";
import styles from "./gallery.module.css";

const Gallery: React.FC = () => {
  const { gallery, loading, error } = useSelector(
    (state: RootState) => state.gallery
  );

  const CatsGallery = () => {
    if (loading || !gallery) {
      return <h4>Loading</h4>;
    } else if (error) {
      return <div>{error}</div>;
    } else if (gallery) {
      return (
        <MasonryGallery>
          {gallery.map((cat: any) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </MasonryGallery>
      );
    }
  };

  return (
    <div className={styles.page}>
      <Breadcrumbs />
      <GalleryForm />
      <CatsGallery />
    </div>
  );
};

export default Gallery;
