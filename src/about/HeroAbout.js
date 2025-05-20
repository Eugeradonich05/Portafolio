
import styles from './HeroAbout.module.css'
import imagen1 from '../imagenes/imagen1.webp';
import imagen2 from '../imagenes/imagen2.webp';
import imagen3 from '../imagenes/imagen3.webp';
import imagen4 from '../imagenes/imagen4.webp';
import NavBar from '../Contact/NavBarContacto';
import About from '../HomePage/About';
import FeatureAbout from './FeatureAbout';
const HeroAbout = () => {
  return (
   <section> 

    {/*   <NavBar /> */}
    <div className={styles.About}>
      <section className={styles.collageSection}>
        <div className={styles.topLeftTitle}>EDITORIAL & FINE ART PHOTOGRAPHY</div>

        <div className={styles.collageContainer}>
          {/* Columna izquierda */}
          <div className={styles.leftColumn}>
            <img src={imagen1} className={`${styles.image} ${styles.imageLarge}`} alt="foto1" />
            <p className={styles.location}>Based in Atlanta, Georgia</p>
          </div>

          {/* Columna central */}
          <div className={styles.centerColumn}>
            <p className={styles.description}>
              My belief is that every person should be framed in the moments
              they’ve felt the most loved and cared for.
            </p>
            <img src={imagen2} className={`${styles.image} ${styles.imageMedium}`} alt="foto2" />
          </div>

          {/* Columna derecha */}
          <div className={styles.rightColumn}>
            <img src={imagen3} className={`${styles.image} ${styles.imageSmall}`} alt="foto3" />
            <img src={imagen3} className={`${styles.image} ${styles.imageSmall}`} alt="foto3" />

            <img src={imagen4} className={`${styles.image} ${styles.imageSmall}`} alt="foto4" />
          </div>
        </div>
            <button className={styles.portfolioBtn}>VIEW PORTFOLIO</button>
      </section>

    </div>
    <About/>
    <FeatureAbout/>
   </section> 
  );
};

export default HeroAbout;
