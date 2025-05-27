// src/sections/Contact.js
import { Link } from 'react-router-dom';
import styles from './Contacto2.module.css';


export default function Contact() {
  return (
    <div className={styles.contactContainer}>

    <section className={styles.contactSection}>
      <div className={styles.overlay}>
        <p className={styles.location}>BASED IN ROSARIO, ARGENTINA</p>
        <h2 className={styles.heading}>Contactame a traves de un correo electronico</h2>
        <Link to="/contact" className={styles.link}>
  <button className={styles.button}>Conversemos</button>
</Link>
      </div>
    </section>
    </div>
  );
}
