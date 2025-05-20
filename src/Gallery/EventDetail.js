import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { events } from '../Components/Events';
import styles from './EventDetail.module.css';

const EventDetail = () => {
  const { eventId } = useParams();
  const event = events.find((e) => e.id === eventId);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden'; // Bloquear scroll
    } else {
      document.body.style.overflow = 'auto'; // Restaurar scroll
    }

    return () => {
      document.body.style.overflow = 'auto'; // Por si se desmonta
    };
  }, [selectedIndex]);

  if (!event) return <p>Evento no encontrado</p>;

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showPrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? event.images.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setSelectedIndex((prev) =>
      prev === event.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{event.title}</h2>
      <div className={styles.grid}>
        {event.images.map((img, index) => (
          <div
            className={styles.imageWrapper}
            key={index}
            onClick={() => handleImageClick(index)}
          >
            <img src={img} alt={`foto-${index}`} className={styles.image} />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className={styles.modal}>
          <span className={styles.close} onClick={closeModal}>&times;</span>
          <button className={styles.prev} onClick={showPrev}>&#10094;</button>
          <img
            src={event.images[selectedIndex]}
            alt={`imagen-${selectedIndex}`}
            className={styles.modalImage}
          />
          <button className={styles.next} onClick={showNext}>&#10095;</button>
        </div>
      )}
    </div>
  );
};

export default EventDetail;
