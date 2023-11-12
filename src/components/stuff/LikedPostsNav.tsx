"use client";
import React from "react";
import styles from "./likedposts.module.css";
import { useSelector } from "react-redux";

export default function LikedPostsNav() {
  const liked = useSelector((state: any) => state.likeHandler);

  return (
    <>
      {liked.photos.length > 0 ? (
        <div className={styles.likedPostsNav__container}>
          <div className={styles.likedPostsNav__content}>
            <h1 className={styles.likedPostsNav__header}>Liked Photos</h1>
          </div>
        </div>
      ) : (
        <div className={styles.likedPostsNav__container_empty}>
          <h1>No photos</h1>
        </div>
      )}
    </>
  );
}
