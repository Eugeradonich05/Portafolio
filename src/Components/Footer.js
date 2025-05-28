    import styles from './Footer.module.css';
    import { FaTiktok, FaInstagram } from 'react-icons/fa';
    import imagen1 from "../imagenes/imagen1.webp";
    import imagen2 from "../imagenes/imagen2.webp";
    import imagen3 from "../imagenes/imagen3.webp";
    import imagen4 from "../imagenes/imagen4.webp";

    import cas1 from "../imagenes/casamiento/by.maggieradonich-17.jpg"
    import cas2 from "../imagenes/casamiento/by.maggieradonich-170.jpg"
    import fami1 from "../imagenes/familias/@maggieradonich_ph-39 (1).jpg"
    import fami2 from "../imagenes/familias/@maggieradonich_ph-44.jpg"
    import cum1 from "../imagenes/15/@maggieradonich_ph-34.jpg"
    import cum2 from "../imagenes/15/@maggieradonich_ph-30.jpg"


    const Footer = () => {
    const images = [
       cas1,cas2,fami1,fami2,cum1,cum2];

    return (
        <footer className={styles.footer}>
        <p className={styles.handle}>@maggieRadonichph</p>

        <div className={styles.gallery}>
            {images.map((src, index) => (
            <img
                key={index}
                src={src}
                alt={`gallery-${index}`}
                className={styles.image}
            />
            ))}
        </div>

        <nav className={styles.nav}>
            <a href="/">Home</a>
            <a href="/about">About Maggie</a>
            <a href="/gallery">Portfolio</a>
            <a href="/contact">Contacto</a>
        </nav>

        <p className={styles.copy}>© 2025 MG Radonich PH</p>

      <div className={styles.social}>
 
    <FaTiktok size={26} />
  <a href="https://www.instagram.com/by.maggieradonich/?hl=es-la">
    <FaInstagram size={26} />
  </a>
</div>

        </footer>
    );
    };

    export default Footer;
