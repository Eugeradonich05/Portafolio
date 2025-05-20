import React from 'react';
import styles from './Section.module.css';

export default function Section() {
  return (
    <section className={styles.gridSection}>
      <div className={styles.gridContainer}>
        <div className={`${styles.card} ${styles.cardLarge}`}>
          <h2 className={styles.title}>Capturando Momentos Inolvidables</h2>
          <p className={styles.text}>
            Soy Eugenio, fotógrafo profesional con más de 10 años de experiencia en bodas, retratos y fotografía artística. Mi enfoque es capturar la esencia única de cada instante.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.subtitle}>Fotografía de Bodas</h3>
          <p className={styles.text}>
            Emociones reales, miradas espontáneas y recuerdos que duran para siempre.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.subtitle}>Retratos Profesionales</h3>
          <p className={styles.text}>
            Desde sesiones personales hasta headshots corporativos, cada rostro tiene una historia que contar.
          </p>
        </div>

        <div className={styles.cardImage} style={{ backgroundImage: "url('/tu-foto-destacada.jpg')" }}>
          {/* Imagen de fondo */}
        </div>

       

        <div className={styles.card}>
          <h3 className={styles.subtitle}>Estética Cinemática</h3>
          <p className={styles.text}>
            Luz, composición y color pensados para transmitir una narrativa visual poderosa.
          </p>
        </div>
        
          <div className={`${styles.card} ${styles.cardLarge}`}>
          <h2 className={styles.title}>Capturando Momentos Inolvidables</h2>
          <p className={styles.text}>
            Soy Eugenio, fotógrafo profesional con más de 10 años de experiencia en bodas, retratos y fotografía artística. Mi enfoque es capturar la esencia única de cada instante.
          </p>
        </div>
        
      </div>
    </section>
  );
}
