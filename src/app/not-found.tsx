import Link from "next/link";
import Image from "next/image";
import img from "../../public/notfound.jpeg";
import styles from "./notfound.module.css";

export default function NotFound() {
  return (
    <div className={styles.notfound__container}>
      <div className={styles.notfound__backdrop}>
        <div className={styles.notfound__content}>
          <h1 className={styles.notfound__header}>Are you feeling Lost ?</h1>
          <Link href="/">
            <p className={styles.notfound__desc}> Go back to homepage</p>
          </Link>
        </div>
      </div>
      <Image src={img} alt="Picture of the author" />
    </div>
  );
}
