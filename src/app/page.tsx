import React, { useState } from "react";
import InfiniteScroll from "@/components/InfiniteScroll";
import SideNav from "@/components/sidenav/SideNav";
import Feed from "@/components/feed/Feed";
import Recommendations from "@/components/recommendations/Recommendations";
import styles from "./page.module.css";
import { getRandomPhotos } from "../lib/get-data";
import Header from "@/components/header/Header";
import Loading from "@/components/loading/LoadingCircle";

export default async function Home() {
  return (
    <div className={styles.home__container}>
      <div className={styles.home__container_nav}>
        <Header />
      </div>
      <div className={styles.home__container_sidenav}>
        <SideNav />
      </div>

      <div className={styles.home__container_main}>
        {/* <Feed data={photosData} /> */}
        <div className={`${styles.home__container_feed}`}>
          <InfiniteScroll />
        </div>
        <div className={styles.home__container_recommendation}>
          <Recommendations />
        </div>
      </div>
    </div>
  );
}
