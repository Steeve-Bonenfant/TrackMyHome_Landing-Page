import Image from "next/image";
import styles from "./Download.module.css";

export default function Download() {
  return (
    <section className={styles.containerGeneral}>
      <h2 className={styles.title}>Disponible sur toutes les plateformes</h2>
      <div className={styles.containerText}>
        <p className={styles.text}>
          Téléchargez notre application dès maintenant sur l'App Store et le
          Google Play Store. Accessible partout, elle vous permet de rester
          connecté à vos chantiers en temps réel, où que vous soyez !
        </p>
      </div>
      <div className={styles.containerImages}>
        <Image
          src="/images/appStore-white.svg"
          alt="Télécharger TrackMyHome sur le App Store"
          width={180}
          height={60}
          className={styles.imageButtonApp}
        />
        <Image
          src="/images/playStore-white.svg"
          alt="Télécharger TrackMyHome sur le Play Store"
          width={180}
          height={60}
          className={styles.imageButtonPlay}
        />
      </div>
    </section>
  );
}
