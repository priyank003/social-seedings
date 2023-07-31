"use client";
import React from "react";
import Gallery from "../gallery/Gallery";
import { useSelector } from "react-redux";
import styles from "./likedposts.module.css";

export default function LikedPosts() {
  const likedPosts = useSelector((state: any) => state.likeHandler);

  return (
    <>
      {likedPosts.photos.length > 0 ? (
        <Gallery galleryData={likedPosts} />
      ) : (
        <div className={styles.likedPostsNav__container_empty_right}>
          <h1>No photos liked</h1>
        </div>
      )}
    </>
  );
}
