"use client";
import React from "react";
import styles from "./feedcard.module.css";
import Link from "next/link";
import { BsHeart, BsHeartFill, BsShare } from "react-icons/bs";
// import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { add } from "@/app/GlobalRedux/likeSlice";
import toast, { Toaster } from "react-hot-toast";

export default function FeedCard({ data }: any) {
  const notify = () => toast("Here is your toast.");
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  console.log("initial state", state);

  const likeHandler = () => {
    dispatch(add(data));
    toast("liked post");
  };

  // console.log(data.user.profile_image);
  return (
    <div className={styles.feed__card}>
      <div className={styles.feed__card_header}>
        <div className={`${styles.feed__card_header_icon} flex__center`}>
          <img src={data.user.profile_image.medium} alt="image" />
        </div>
        <div className={styles.feed__card_header_desc}>
          <Link href={`/profile/${data.user.username}`}>
            <p className={styles.feed__card_username}>{data.user.username}</p>
          </Link>
          <p className={styles.feed__card_header_location}>
            {data.user.location}
          </p>
        </div>
      </div>
      <div className={styles.feed__card_body}>
        <div className={styles.feed__card_img}>
          <img src={data.urls.regular} alt="image" />
        </div>
        <div className={styles.feed__card_btns}>
          <div className={styles.feed__card_btn} onClick={likeHandler}>
            <BsHeart size="1.2rem" />
          </div>
        </div>
        <div className={styles.feed__card_desc}>
          <span className={styles.feed__card_username}>
            {" "}
            {data.user.username}
          </span>
          ~<span className={styles.feed__card_desc}>{data.description}</span>
        </div>
      </div>
      <div className={styles.feed__card_footer}>
        <Toaster />
      </div>
    </div>
  );
}
