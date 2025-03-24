import faqsdata from "@/json/faqsdata.json";
import styles from "./Faqs.module.css";
import FaqWrapper from "./FaqWrapper/FaqWrapper";

export default function Faqs() {
  return (
    <section className={styles.containerGeneral}>
      <h2 className={styles.title}>FAQ's</h2>
      <p className={styles.subTitle}>
        Les réponses a vos questions les plus fréquentes...
      </p>

      <div className={styles.containerWrapper}>
        {faqsdata.map((el) => (
          <FaqWrapper key={el.id} question={el.question} answer={el.answer} />
        ))}
      </div>
    </section>
  );
}
