// src/sections/Features.js
import styles from './FeatureAbout.module.css';

export default function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featureItem}>
        <h3 className={styles.title}>Captura Emotiva</h3>
        <p className={styles.description}>Momentos auténticos, naturales y llenos de emoción para contar tu historia.</p>
      </div>
      <div className={styles.featureItem}>
        <h3 className={styles.title}>Estilo Cinemático</h3>
        <p className={styles.description}>Edición de alta calidad con tonos cálidos y una estética cinematográfica.</p>
      </div>
      <div className={styles.featureItem}>
        <h3 className={styles.title}>Entrega Premium</h3>
        <p className={styles.description}>Galerías digitales, álbumes personalizados y cajas con grabado artesanal.</p>
      </div>
    </section>
  );
}
