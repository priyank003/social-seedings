import styles from "./Header.module.css";
import Link from "next/link";
import { FaHouse, FaUser } from "react-icons/fa6";
import { satisfy } from "@/styles/fonts";

export default function Header() {
  return (
    <nav className={`${styles.headernav__container} flex__center`}>
      <div className={styles.headernav__content}>
        <div className={styles.headernav__header}>
          <h1 className={satisfy.variable}>Social Seedings</h1>
        </div>
        <div className={styles.headernav__links}>
          <Link href="/">
            <div className={styles.headernav__link}>
              <FaHouse size="1.2rem" />
              <span> Home</span>
            </div>
          </Link>
          <Link href="/mystuff">
            <div className={styles.headernav__link}>
              <FaUser size="1.2rem" />
              <span> My stuff</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
