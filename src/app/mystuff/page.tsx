import React from "react";
import styles from "./mystuff.module.css";
import LikedPosts from "@/components/stuff/LikedPosts";
import LikedPostsNav from "@/components/stuff/LikedPostsNav";
import SideNav from "@/components/sidenav/SideNav";
export default function page() {
  return (
    <div className={styles.mystuff__container}>
      <div className={styles.mystuff__nav}>
        <SideNav />
      </div>
      <div className={styles.mystuff__main}>
        {/* <div className={styles.mystuff__left_nav}>
          <LikedPostsNav />
        </div> */}
        <div className={styles.mystuff__right_content}>
          <LikedPosts />
        </div>
        <div className={styles.mystuff__footer}>
          <h1>Liked Photos</h1>
        </div>
      </div>
    </div>
  );
}
