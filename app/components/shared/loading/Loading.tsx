import React from "react";
import styles from "./loading.module.css";

const Loading: React.FC = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.lds_roller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
