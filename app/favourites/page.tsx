"use client";
import React from "react";
import PageNavigation from "../components/page-navigation/PageNavigation";
import Breadcrumbs from "../components/breadcrumbs";
import MasonryGallery from "../components/shared/masonry-gallery/MasonryGallery";
import VotingCard from "../components/voting-card/VotingCard";

import { fetchFavourites, removeFavourite } from "../redux/slices/favourites";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import Loading from "../components/shared/loading/Loading";

import styles from "./favourites.module.css";

const Favourites: React.FC = () => {
  const { favourites, loading, error } = useSelector(
    (state: RootState) => state.favourites
  );
  const dispatch = useDispatch<AppDispatch>();

  const Gallery = () => {
    if (loading || !favourites) {
      return <Loading />;
    } else if (error) {
      return <div>{error}</div>;
    } else if (favourites) {
      if (favourites.length === 0) {
        return <p className={styles.nodata}>No item found</p>;
      }

      return (
        <MasonryGallery>
          {favourites.map((cat: any) => {
            const handleUnFavourites = async () => {
              await dispatch(removeFavourite(cat.id));
              dispatch(fetchFavourites(process.env.NEXT_PUBLIC_USER_ID));
            };
            return (
              <VotingCard
                key={cat.id}
                image={cat.image}
                onClick={handleUnFavourites}
              />
            );
          })}
        </MasonryGallery>
      );
    }
  };

  React.useEffect(() => {
    dispatch(fetchFavourites(process.env.NEXT_PUBLIC_USER_ID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageNavigation />
      <div className={styles.page}>
        <Breadcrumbs />
        <hr />
        <Gallery />
      </div>
    </>
  );
};

export default Favourites;
