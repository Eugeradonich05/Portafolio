import styles from './Contacto.module.css';
import img1 from '../imagenes/imagen1.webp';
import img2 from '../imagenes/imagen2.webp';
import NavBarContacto from '../Contact/NavBarContacto';
export default function Contacto() {
  return (
    <div > 
     {/*  <NavBarContacto/> */}
      <section className={styles.contactSectionTodo}>
    <section className={styles.contactSection}>
      {/* Encabezado */}
      <div className={styles.topText}>
        <p className={styles.subheading}>EDITORIAL & FINE ART PHOTOGRAPHY</p>
        <h2 className={styles.heading}>
          Capturing light, feelings & moments and all the things in between people and life
        </h2>
      </div>

      {/* Contenido principal */}
      <div className={styles.bottomContent}>
        {/* Texto + formulario */}
        <div className={styles.leftContent}>
          <p className={styles.description}>
            My photography is all about telling genuine, timeless stories through an editorial and
            fine art lens. I’m passionate about creating images that are more than just photos — they’re
            heartfelt moments that reflect your unique story, with an emphasis on authenticity,
            emotion, and the beauty of candid connections.
          </p>

          <form className={styles.form}>
            <div className={styles.row}>
              <input type="text" name="nombre" placeholder="Nombre" required />
              <input type="text" name="apellido" placeholder="Apellido" required />
            </div>
            <input type="email" name="email" placeholder="Correo electrónico" required />
            <input type="text" name="asunto" placeholder="Asunto" required />
            <button className={styles.button} type="submit">Enviar</button>
          </form>
        </div>

        {/* Imágenes */}
        <div className={styles.imageStack}>
          <img src={img1} alt="Principal" className={styles.mainImage} />
          <img src={img2} alt="Secundaria" className={styles.secondaryImage} />
        </div>
      </div>
    </section>
    </section>
    </div>

  );
}
