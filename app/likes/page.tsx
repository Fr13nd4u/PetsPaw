"use client";
import React from "react";
import PageNavigation from "../components/page-navigation/PageNavigation";
import Breadcrumbs from "../components/breadcrumbs";
import MasonryGallery from "../components/shared/masonry-gallery/MasonryGallery";
import VotingCard from "../components/voting-card/VotingCard";
import UserActions from "../components/user-actions/UserActions";
import Loading from "../components/shared/loading/Loading";

import { fetchVotings, removeVoting } from "../redux/slices/voting";
import { setUserActions } from "../redux/slices/userActions";
import { AppDispatch, RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";

import styles from "./likes.module.css";

const Likes: React.FC = () => {
  const { voting, loading, error } = useSelector(
    (state: RootState) => state.voting
  );
  const dispatch = useDispatch<AppDispatch>();

  const Gallery = () => {
    if (loading || !voting) {
      return <Loading />;
    } else if (error) {
      return <div>{error}</div>;
    } else if (voting) {
      const filterVoting = voting.filter((cat: any) => cat.value === 1);

      if (filterVoting.length === 0) {
        return <p className={styles.nodata}>No item found</p>;
      }

      return (
        <MasonryGallery>
          {filterVoting.map((cat: any) => {
            const handleUnlike = async () => {
              await dispatch(removeVoting(cat.id));
              dispatch(
                setUserActions({
                  img_id: cat.id,
                  time: Date.now(),
                  type: "like",
                  text: `was removed from Likes`,
                })
              );
              dispatch(fetchVotings(process.env.NEXT_PUBLIC_USER_ID));
            };

            return (
              <VotingCard
                key={cat.id}
                image={cat.image}
                onClick={handleUnlike}
              />
            );
          })}
        </MasonryGallery>
      );
    }
  };

  React.useEffect(() => {
    dispatch(fetchVotings(process.env.NEXT_PUBLIC_USER_ID));
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

export default Likes;
