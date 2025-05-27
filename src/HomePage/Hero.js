import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import About from './About';
import Contact2 from './Contacto2';
import Carrousel from './Carrousel';
import Section1 from './Section1';
import NavBar from '../Components/NavBar';
import Features from './Feature';


export default function Hero() {
  return (
    <div>
      {/* <NavBar/> */}
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      >
      <div className={styles.aurora}></div>

      <motion.div
        className={styles.content}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        >
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          >
          Explorá lo Desconocido
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          >
          Inspirado en la magia del cielo del norte
        </motion.p>

        <motion.div
          className={styles.BtnContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          >
            <a href="/contact">

          <motion.button
            className={styles.botonelegante}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            
            >
            Contacto
          </motion.button>
              </a>
          <a href="/gallery">
          <motion.button
            className={styles.botonelegante}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        
            >
            Ver Galería
          </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
      <Carrousel/>
      <About/>
      <Section1/>
      <Features/>
      <Contact2/>
    </div>
  );
}
