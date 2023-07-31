import React from "react";
import styles from "./loading.module.css";

export default function LoadingDots() {
  return (
    <div className={styles.loadingdots__container}>
      <div className={styles.lds__ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
