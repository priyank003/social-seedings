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
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();
const fetchData = async (page: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_UNSPLASH_API}/photos?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}&page=${page}`
  );
  return await response.json();
};
const MyComponent = () => {
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

          <span ref={myRef}></span>
        </div>
        <Toaster />
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
