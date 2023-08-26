import React from "react";
import Breadcrumbs from "../components/breadcrumbs";
import PageNavigation from "../components/page-navigation/PageNavigation";

import styles from "./voting.module.css";

const Voting: React.FC = () => {
  return (
    <>
      <PageNavigation />
      <div className={styles.page}>
        <Breadcrumbs />
      </div>
    </>
  );
};

export default Voting;
