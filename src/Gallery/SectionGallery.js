import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SectionGallery.module.css';
import { events } from '../Components/Events'

const SectionGallery = () => {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryHeader}>
        <div className={styles.galleryContainer}>
          {events.map((event) => (
            <Link
              to={`/event/${event.id}`}
              key={event.id}
              className={styles.galleryItem}
            >
              <img src={event.cover} alt={event.title} className={styles.galleryImage} />
              <p className={styles.date}>{event.date}</p>
              <h3 className={styles.title}>{event.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionGallery;
