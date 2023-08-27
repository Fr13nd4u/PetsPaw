"use client";
import React from "react";
import Breadcrumbs from "../components/breadcrumbs";
import PageNavigation from "../components/page-navigation/PageNavigation";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Image from "next/image";

import CatCTA from "./CatCTA";
import UserActions from "../components/user-actions/UserActions";

import styles from "./voting.module.css";

const Voting: React.FC = () => {
  const { gallery } = useSelector((state: RootState) => state.gallery);

  return (
    <>
      <PageNavigation />
      <div className={styles.page}>
        <Breadcrumbs />

        <div className={styles.cat_img_block}>
          {gallery && (
            <Image
              src={gallery[0].url}
              alt={gallery[0].id}
              width={gallery[0].width}
              height={gallery[0].height}
              className={styles.cat_img}
            />
          )}
          <CatCTA />
        </div>

        <UserActions />
      </div>
    </>
  );
};

export default Voting;
