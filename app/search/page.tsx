"use client";
import React from "react";
import PageNavigation from "../components/page-navigation/PageNavigation";
import Breadcrumbs from "../components/breadcrumbs";
import MasonryGallery from "../components/shared/masonry-gallery/MasonryGallery";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import Loading from "../components/shared/loading/Loading";
import BreedCard from "../breeds/BreedCard";
import styles from "./search.module.css";

const Search: React.FC = () => {
  const { breed, loading, error } = useSelector(
    (state: RootState) => state.breed
  );

  const Gallery = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <div>{error}</div>;
    } else if (!breed || breed.length === 0) {
      return <p className={styles.nodata}>No item found</p>;
    } else if (breed) {
      return (
        <>
          <h4>
            <span>Search results for: </span>
            {breed[0].breeds[0].id}
          </h4>
          <MasonryGallery>
            {breed.map((cat: any) => (
              <BreedCard key={cat.id} cat={cat} />
            ))}
          </MasonryGallery>
        </>
      );
    }
  };

  return (
    <>
      <PageNavigation />
      <div className={styles.page}>
        <Breadcrumbs />
        <Gallery />
      </div>
    </>
  );
};

export default Search;
