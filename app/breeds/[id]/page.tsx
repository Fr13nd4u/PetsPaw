"use client";
import React from "react";
import Breadcrumbs from "../../components/breadcrumbs";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import styles from "./id-page.module.css";
import { fetchBreedById } from "../../redux/slices/breedById";
import PageNavigation from "../../components/page-navigation/PageNavigation";
import CatCard from "./CatCard";

interface IBreed {
  params: {
    id: string;
  };
}

const OneBreed: React.FC<IBreed> = ({ params: { id } }) => {
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(fetchBreedById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageNavigation />
      <div className={styles.page}>
        <Breadcrumbs />
        <CatCard />
      </div>
    </>
  );
};

export default OneBreed;
