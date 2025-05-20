import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import profileImage from '../imagenes/imagen1.webp'; // Asegurate de que la ruta sea correcta

export default function About() {
  return (
    <section id="about" className={styles.aboutTodo}>
      <motion.section
        className={styles.about}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={profileImage} alt="Eugenio trabajando" className={styles.image} />
        </motion.div>

        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className={styles.location}>Rosario, Argentina — Fotógrafo Profesional</p>
          <h2 className={styles.title}>Hola, soy Magdalena</h2>
          <p className={styles.paragraph}>
            Mi estilo es una fusión entre lo documental y lo artístico, buscando capturar emociones auténticas y momentos genuinos. 
            Creo que las mejores fotos surgen de la naturalidad, por eso me esfuerzo por crear un ambiente relajado y cómodo en cada sesión.
          </p>
          <p className={styles.paragraph}>
            Ya sea una ceremonia íntima o una gran celebración, mi compromiso es crear imágenes atemporales que cuenten historias que perduren.
          </p>
          <motion.button
            className={styles.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Conocer más
          </motion.button>
        </motion.div>
      </motion.section>
    </section>
  );
}
