import React from "react";
import PageNavigation from "../components/page-navigation/PageNavigation";
import Breadcrumbs from "../components/breadcrumbs";

import styles from "./likes.module.css";

const Likes: React.FC = () => {
  return (
    <>
      <PageNavigation />
      <div className={styles.page}>
        <Breadcrumbs />
      </div>
    </>
  );
};

export default Likes;
