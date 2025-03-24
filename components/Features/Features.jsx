import featuresData from "@/json/featuresdata.json";
import styles from "./Features.module.css";
import { StickyScroll } from "./StickyScroll/StickyScroll";

export default function Features() {
  return (
    <section className={styles.containerGeneral}>
      <h2>Découvez nos fonctionnalités !</h2>
      <StickyScroll content={featuresData} />
    </section>
  );
}
