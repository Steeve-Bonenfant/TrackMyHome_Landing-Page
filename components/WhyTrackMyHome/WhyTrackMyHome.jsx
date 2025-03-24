import cardsData from "@/json/whytrackmyhome.json";
import Card from "./Card/Card";
import styles from "./WhyTrackMyHome.module.css";

export default function WhyTrackMyHome() {
  return (
    <section className={styles.generalContainer}>
      <h2 className={styles.title}>
        Pourquoi <span className="colorText">TrackMyHome</span> ?
      </h2>
      <div className={styles.cardsContainer}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
    </section>
  );
}
