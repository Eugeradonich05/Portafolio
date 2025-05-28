
import styles from './HeroAbout.module.css'
import imagen1 from '../imagenes/imagen1.webp';
import imagen2 from '../imagenes/imagen2.webp';
import imagen3 from '../imagenes/imagen3.webp';
import imagen4 from '../imagenes/imagen4.webp';


import casamiento from "../imagenes/casamiento/by.maggieradonich-153.jpg"
import estudio from "../imagenes/corpo/by.maggieradonich-55.jpg"
import producto from "../imagenes/Producto/by.maggieradonich-30.jpg"
import book from "../imagenes/familias/@by.maggieradonich-84.jpg"
import cumpleaños from "../imagenes/15/MRFotos-99.jpg"


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
            <img src={estudio} className={`${styles.image} ${styles.imageLarge}`} alt="foto1" />
            <p className={styles.location}>Based in Atlanta, Georgia</p>
          </div>

          {/* Columna central */}
          <div className={styles.centerColumn}>
            <p className={styles.description}>
              My belief is that every person should be framed in the moments
              they’ve felt the most loved and cared for.
            </p>
            <img src={casamiento} className={`${styles.image} ${styles.imageMedium}`} alt="foto2" />
          </div>

          {/* Columna derecha */}
          <div className={styles.rightColumn}>
            <img src={producto} className={`${styles.image} ${styles.imageSmall}`} alt="foto3" />
            <img src={cumpleaños} className={`${styles.image} ${styles.imageSmall}`} alt="foto3" />

            <img src={book} className={`${styles.image} ${styles.imageSmall}`} alt="foto4" />
          </div>
        </div>
            <a href='/gallery'>
             <button className={styles.portfolioBtn}>VIEW PORTFOLIO</button>
            </a>
      </section>

    </div>
    <About/>
    <FeatureAbout/>
   </section> 
  );
};

export default HeroAbout;
