"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./StickyScroll.module.css";

export const StickyScroll = ({ content }) => {
  const isMobile = useIsMobile();
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  if (isMobile) {
    return (
      <div className={styles.containerGeneralMobile}>
        {content.map((item, index) => (
          <div key={index}>
            <h3 className={styles.mobileTitle}>{item.title}</h3>
            <p>{item.description}</p>
            <Image
              src={item.image}
              alt={`Image pour ${item.title}`}
              width={300}
              height={200}
              className={styles.mobileImage}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div className={styles.stickyScroll} ref={ref}>
      <div className={styles.cardContainer}>
        <div className={styles.contentWrapper}>
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className={styles.card}
              aria-hidden={activeCard !== index}
            >
              <motion.div
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.3 }}
                className={styles.cardTitle}
              >
                <h3>{item.title}</h3>
              </motion.div>
              <motion.div
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.3 }}
                className={styles.cardDescription}
              >
                <p>{item.description}</p>
              </motion.div>
            </div>
          ))}
          <div className={styles.spacer} />
        </div>
      </div>

      <div className={styles.gradientBackground}>
        <Image
          src={content[activeCard]?.image}
          alt={`Image pour ${content[activeCard]?.title}`}
          width={500}
          height={300}
          className={styles.image}
        />
      </div>
    </motion.div>
  );
};
