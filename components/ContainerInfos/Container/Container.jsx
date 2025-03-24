import Image from "next/image";
import styles from "./Container.module.css";

export default function Container({
  bgColor,
  bigText,
  littleText,
  width,
  image,
}) {
  return (
    <div
      className={styles.infoBox}
      style={{
        "--bgColor": bgColor,
        "--width": width,
      }}
    >
      <div className={styles.textContainer}>
        <Image
          src="/images/check.svg"
          alt="Icon check TrackMyHome"
          width={40}
          height={40}
          className={styles.iconCheck}
        />
        <p className={styles.bigText}>{bigText}</p>
        <p className={styles.littleText}>{littleText}</p>
        {image && (
          <div className={styles.image}>
            <Image src={image} alt={bigText} width={128} height={97} />
          </div>
        )}
      </div>
    </div>
  );
}
