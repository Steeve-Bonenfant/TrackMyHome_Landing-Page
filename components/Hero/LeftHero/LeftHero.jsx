import ImageDownload from "./ImageDownload/ImageDownload";
import styles from "./LeftHero.module.css";

export default function LeftHero() {
  return (
    <div className={styles.generalContainer}>
      <h1 className={styles.title}>
        Offrez un vrai <span className="colorText">suivi de construction</span>{" "}
        à vos clients
      </h1>
      <p className={styles.subTitle}>
        Simplifiez la gestion de vos chantiers avec notre application mobile.
        Vos clients peuvent suivre l'avancement du chantier en temps réel et
        consulter leurs documents, le tout depuis leur téléphone pour une
        expérience unique.
      </p>
      <ImageDownload />
    </div>
  );
}
