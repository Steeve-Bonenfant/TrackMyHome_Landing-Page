import Image from "next/image";
import styles from "./Card.module.css";

export default function Card({ image, title, content }) {
  return (
    <div className={styles.cardContainer}>
      <Image
        src={image}
        alt={title}
        width={65}
        height={65}
        className={styles.imageCards}
      />

      <h3>{title}</h3>
      <p className={styles.textCards}>{content}</p>
    </div>
  );
}
