"use client";
import React from "react";
import styles from "./sidenav.module.css";
import Link from "next/link";
import { satisfy } from "@/styles/fonts";
import { FaHouse, FaUser } from "react-icons/fa6";

export default function SideNav() {
  return (
    <nav className={`${styles.sidenav__container}`}>
      <div className={styles.sidenav__content}>
        <div className={styles.sidenav__header}>
          <h1 className={satisfy.variable}>Social Seedings</h1>
        </div>
        <div className={styles.sidenav__links}>
          <Link href="/">
            <div className={styles.sidenav__link}>
              <FaHouse size="1.2rem" />
              <span> Home</span>
            </div>
          </Link>
          <Link href="/mystuff">
            <div className={styles.sidenav__link}>
              <FaUser size="1.2rem" />
              <span> My stuff</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
