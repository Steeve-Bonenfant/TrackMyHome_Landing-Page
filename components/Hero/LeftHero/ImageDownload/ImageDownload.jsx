"use client";

import Image from "next/image";
import styles from "./ImageDownload.module.css";

export default function ImageDownload() {
  return (
    <div className={styles.downloadContainer}>
      <Image
        src="/images/appStore.webp"
        alt="Bouton pour télécharger l'application sur l'App Store"
        width={154}
        height={49}
        className={styles.imageButton}
      />

      <Image
        src="/images/playStore.webp"
        alt="Bouton pour télécharger l'application sur le Play Store"
        width={157}
        height={49}
        className={styles.imageButton}
      />
    </div>
  );
}
