"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./RightHero.module.css";

export default function RightHero() {
  return (
    <div className={styles.generalContainer}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/images/homeHero.webp"
          alt="Chantier en cours de construction suivi grâce a TrackMyHome"
          width={680}
          height={367}
        />
      </motion.div>
    </div>
  );
}
