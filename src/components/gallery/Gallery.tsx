"use client";
import React from "react";
import styles from "./gallery.module.css";
import { BsGrid, BsList } from "react-icons/bs";

export default function Gallery({ galleryData }: { galleryData: any }) {
  const [orientation, setOrientation] = React.useState("grid");
  return (
    <div className={styles.gallery__container}>
      {galleryData.photos.length > 0 ? (
        <>
          <div className={styles.gallery__content_body_header}>
            <div
              className={`${styles.gallery__content_body_header_icon} flex__center`}
              onClick={() => setOrientation("grid")}
            >
              <BsGrid size="1.5rem" />
            </div>
            <div
              className={styles.gallery__content_body_header_icon}
              onClick={() => setOrientation("list")}
            >
              <BsList size="1.5rem" />
            </div>
          </div>
          <div
            className={
              orientation === "grid"
                ? styles.gallery__content_body_wrapper_grid
                : styles.gallery__content_body_wrapper_list
            }
          >
            {galleryData.photos.map((photo: any) => (
              <div
                className={
                  orientation === "grid"
                    ? styles.gallery__content_body_card_grid
                    : styles.gallery__content_body_card_list
                }
                key={photo.id}
              >
                <img src={photo.urls.regular} alt="image" />
              </div>
            ))}
          </div>
        </>
      ) : (
        <h1>No content here</h1>
      )}
    </div>
  );
}
