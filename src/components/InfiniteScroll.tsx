"use client";

import React, { useRef, useEffect, useState } from "react";
import { getRandomPhotos } from "@/lib/get-data";
import Feed from "@/components/feed/Feed";
import FeedCard from "./feed/FeedCard";
import styles from "./feed.module.css";
import {
  useInfiniteQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import LoadingCircle from "./loading/LoadingCircle";
import LoadingDots from "./loading/LoadingDots";
import { useSelector } from "react-redux";

const queryClient = new QueryClient();
const fetchData = async (page: number) => {
  const response = await fetch(
    `${"https://api.unsplash.com"}/photos?client_id=${"9ZYpYzQEL0dAohdAf6Vk1nczpQ554Naxdx0y_mFnYPg"}&page=${page}`
  );
  return await response.json();
};
const MyComponent = () => {
  const state = useSelector((state) => state);
  console.log(state);
  const myRef = useRef(null);
  const [isLoadingCircle, setIsloadingCircle] = useState(true);
  const [isLoadingDots, setIsloadingDots] = useState(true);

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["query"],
    async ({ pageParam = 1 }) => await fetchData(pageParam),
    {
      getNextPageParam: (_, pages) => pages.length + 1,
    }
  );
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) =>
        fetchNextPage().then(() => setIsloadingDots(false))
      );
    });
    if (myRef.current) {
      observer.observe(myRef.current);
    }
  }, [myRef]);

  useEffect(() => {
    if (data?.pages.length! > 0) {
      setIsloadingCircle(false);
    }
  }, [data]);

  return (
    <>
      <div className={`${styles.feed__container} flex__center`}>
        <div className={styles.feed__content}>
          {isLoadingCircle ? (
            <LoadingCircle />
          ) : (
            data?.pages.map((page, i) => {
              return (
                <div key={i}>
                  {page.map((post: any) => {
                    return <FeedCard data={post} key={post.id} />;
                  })}
                </div>
              );
            })
          )}
          {isLoadingDots && <LoadingDots />}
          <span ref={myRef}></span>
        </div>
      </div>
    </>
  );
};

export default function InfiniteScroll() {
  return (
    <QueryClientProvider client={queryClient}>
      <MyComponent />
    </QueryClientProvider>
  );
}
