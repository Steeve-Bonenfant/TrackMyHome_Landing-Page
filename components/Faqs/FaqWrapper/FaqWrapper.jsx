"use client";

import { useState } from "react";
import styles from "./FaqWrapper.module.css";

export default function FaqWrapper({ question, answer }) {
  const [open, setOpen] = useState(false);

  const toggleAnswer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={styles.faqContainer} onClick={toggleAnswer}>
      <div className={styles.question}>
        <h3 className={styles.title}>{question}</h3>
        <div className={styles.croixFaq}>{open ? "-" : "+"}</div>
      </div>
      <div className={`${styles.answer} ${open ? styles.open : styles.closed}`}>
        <p className={styles.answerText}>{answer}</p>
      </div>
    </div>
  );
}
