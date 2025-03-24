import LeftHero from "@/components/Hero/LeftHero/LeftHero";
import RightHero from "@/components/Hero/RightHero/RightHero";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.generalContainer}>
      <LeftHero />
      <RightHero />
    </section>
  );
}
