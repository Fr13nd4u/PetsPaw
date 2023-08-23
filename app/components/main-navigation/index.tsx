import React from "react";
import NavHeader from "./NavHeader";
import styles from "./navigation.module.css";

const MainNavigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <NavHeader />
    </nav>
  );
};

export default MainNavigation;
