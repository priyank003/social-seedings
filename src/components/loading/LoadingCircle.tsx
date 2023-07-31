import React from "react";
import styles from "./loading.module.css";

export default function LoadingCircle() {
  return (
    <div className={styles.loadingcircle__container}>
      <div className={styles.lds__ripple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
