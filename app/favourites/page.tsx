"use client";
import React from "react";
import PageNavigation from "../components/page-navigation/PageNavigation";
import Breadcrumbs from "../components/breadcrumbs";
import MasonryGallery from "../components/shared/masonry-gallery/MasonryGallery";
import VotingCard from "../components/voting-card/VotingCard";
import Loading from "../components/shared/loading/Loading";
import UserActions from "../components/user-actions/UserActions";

import { fetchFavourites, removeFavourite } from "../redux/slices/favourites";
import { setUserActions } from "../redux/slices/userActions";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

import styles from "./favourites.module.css";

const Favourites: React.FC = () => {
  const { favourites, loading, error } = useSelector(
    (state: RootState) => state.favourites
  );
  const dispatch = useDispatch<AppDispatch>();

  const Gallery = () => {
    if (loading || !favourites) {
      return <Loading />;
    }

    if (error) {
      return <div>{error}</div>;
    }

    if (favourites) {
      if (favourites.length === 0) {
        return <p className={styles.nodata}>No item found</p>;
      }

      return (
        <MasonryGallery>
          {favourites.map((cat: any) => {
            const handleUnFavourites = async () => {
              await dispatch(removeFavourite(cat.id));
              dispatch(
                setUserActions({
                  img_id: cat.id,
                  time: Date.now(),
                  type: "favourites",
                  text: `was removed from Favourites`,
                })
              );
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
        <UserActions />
      </div>
    </>
  );
};

export default Favourites;
