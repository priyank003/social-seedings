"use client";
import React from "react";
import styles from "./recommendations.module.css";
import Link from "next/link";
import LoadingCircle from "../loading/LoadingCircle";
import LoadingDots from "../loading/LoadingDots";
const fetchData = async (page: number, count: number) => {
  const response = await fetch(
    `${"https://api.unsplash.com"}/photos?client_id=${"9ZYpYzQEL0dAohdAf6Vk1nczpQ554Naxdx0y_mFnYPg"}&page=${page}&count=${count}`
  );
  return await response.json();
};

export default function Recommendations() {
  const [isLoadingCircle, setIsloadingCircle] = React.useState(true);
  const [userData, setUserData] = React.useState([]);
  React.useEffect(() => {
    fetchData(1, 5).then((res) =>
      setUserData((prev: any) => [...prev, ...res])
    );
  }, []);
  React.useEffect(() => {
    if (userData.length > 0) {
      setIsloadingCircle(false);
    }
  }, [userData]);
  return (
    <div className={styles.recommendation__container}>
      <div className={styles.recommendation__content}>
        <div className={styles.recommendation__header}>
          <p>Suggested Users</p>
          {/* <span>See all</span> */}
        </div>
        <div className={styles.recommendation__body}>
          {isLoadingCircle ? (
            <LoadingDots />
          ) : (
            userData.slice(5).map((user: any, i: number) => {
              return (
                <div key={i}>
                  <Link href={`/profile/${user.user.username}`}>
                    <div className={styles.recommendation__body_item}>
                      <div
                        className={` ${styles.recommendation__item_icon} flex__center `}
                      >
                        <img src={user.user.profile_image.medium} alt="image" />
                      </div>
                      <div className={styles.recommendation__item_desc}>
                        <p className={styles.recommendation__item_username}>
                          {user.user.username}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
