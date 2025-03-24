import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.containerGeneral}>
        <p className={styles.footerText}>
          Made with 🧡 by Benoit, kevin et Steeve. Site certifié sans cookies.
          On préfère les manger nous...
        </p>
        <p className={styles.copyRight}>
          Copyright © 2025 All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
