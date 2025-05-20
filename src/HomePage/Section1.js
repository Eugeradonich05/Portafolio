import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Section1.module.css';
import imagen1 from "../imagenes/imagen1.webp";
import imagen2 from "../imagenes/imagen2.webp";
import imagen3 from "../imagenes/imagen3.webp";
import imagen4 from "../imagenes/imagen4.webp";

const images = [
  {
    src: imagen2,
    alt: "Casamientos",
    description: "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
  },
  {
    src: imagen1,
    alt: "Cumpleaños de XV",
    description: "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
  },
  {
    src: imagen3,
    alt: "Fotos estudios",
    description: "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
  },
  {
    src: imagen4,
    alt: "Algo",
    title: "Rivers are serene",
    description: "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
  },
];

export default function Section1() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>ALGUNOS TRABAJOS</h1>
      <p className={styles.subtitle}>
       Desripcion emotiva de como ve las coces un fotógrafo.
      </p>

      <div className={styles.grid}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.card} ${activeIndex !== null && activeIndex !== index ? styles.blurred : ""}`}
            style={{ backgroundImage: `url(${image.src})` }}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <>
            <motion.div
              className={styles.backdrop}
              onClick={() => setActiveIndex(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className={styles.modal}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div
                className={styles.modalImage}
                style={{
                  backgroundImage: `url(${images[activeIndex].src})`,
                }}
              >
                <div className={styles.modalContent}>
                  <h2>{images[activeIndex].title || images[activeIndex].alt}</h2>
                  <p>{images[activeIndex].description}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
