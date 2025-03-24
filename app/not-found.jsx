import styles from "@/styles/notFound.module.css";
import Image from "next/image";
import Link from "next/link";

export default function notFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.logo}>
        <Image
          src="/images/logo.webp"
          alt="Logo TrackMyHome"
          width={160}
          height={160}
        />
      </div>
      <h1>
        Page 404 <span className={styles.iconNotFound}>🚧</span>
      </h1>
      <p className={styles.textNotFound}>
        Oup&apos;s ! Votre page n&apos;existe pas...
      </p>
      <Link href="/">
        <button>Revenir à la page d&apos;acceuil</button>
      </Link>
    </div>
  );
}
