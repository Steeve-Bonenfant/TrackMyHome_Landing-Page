import clsx from "clsx";
import Image from "next/image";
import styles from "./Headers.module.css";

export default function Headers() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src="/images/logo.webp"
          alt="Logo TrackMyHome"
          width={60}
          height={60}
        />
        <p className={clsx(styles.logoText, "colorText")}>TrackMyHome</p>
      </div>
    </header>
  );
}
