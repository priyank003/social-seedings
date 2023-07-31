"use client";
import React from "react";
import styles from "./likedposts.module.css";
import { useSelector } from "react-redux";

export default function LikedPostsNav() {
  const liked = useSelector((state: any) => state.likeHandler);
  console.log(liked.photos[0]?.urls?.regular);

  return (
    <>
      {liked.photos.length > 0 ? (
        <div className={styles.likedPostsNav__container}>
          <div className={styles.likedPostsNav__content}>
            {/* <div className={styles.likedPostsNav__img}>
              <img src={liked.photos[0]?.urls?.regular} alt="liked photos" />
            </div> */}
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
